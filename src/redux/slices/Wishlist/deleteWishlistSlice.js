import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "https://testbackend.mecarviprints.com/api/frontend/wishlists";

// ✅ Delete single wishlist item
export const deleteWishlist = createAsyncThunk(
  "wishlist/deleteWishlist",
  async (id, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      await axios.delete(`${BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      toast.success("Wishlist item removed!");
      return id;
    } catch (error) {
      toast.error("Failed to remove wishlist item!");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const deleteWishlistSlice = createSlice({
  name: "deleteWishlist",
  initialState: { loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteWishlist.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default deleteWishlistSlice.reducer;
