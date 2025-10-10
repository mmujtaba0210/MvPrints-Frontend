import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "https://testbackend.mecarviprints.com/api/frontend/wishlists";

// ✅ Create/Add to wishlist
export const createWishlist = createAsyncThunk(
  "wishlist/createWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const res = await axios.post(
        BASE_URL,
        { product_id: productId },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      toast.success("Added to wishlist!");
      return res.data.data;
    } catch (error) {
      toast.error("Failed to add wishlist item!");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const createWishlistSlice = createSlice({
  name: "createWishlist",
  initialState: { loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(createWishlist.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default createWishlistSlice.reducer;
