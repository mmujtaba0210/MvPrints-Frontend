import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "https://testbackend.mecarviprints.com/api/frontend/wishlists";

// ✅ Clear all wishlist
export const clearAllWishlist = createAsyncThunk(
  "wishlist/clearAllWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      await axios.delete(`${BASE_URL}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      toast.success("Wishlist cleared!");
      return true;
    } catch (error) {
      toast.error("Failed to clear wishlist!");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const clearAllWishlistSlice = createSlice({
  name: "clearAllWishlist",
  initialState: { loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(clearAllWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearAllWishlist.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(clearAllWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clearAllWishlistSlice.reducer;
