import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://testbackend.mecarviprints.com/api/";

export const postCompareProducts = createAsyncThunk(
  "compare/postCompareProducts",
  async (productIds, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return rejectWithValue("No access token found");
      const formData = new FormData();
      productIds.forEach((id) => {
        formData.append("product_ids[]", parseInt(id));
      });

      // Debug print
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const res = await axios.post(
        `${BASE_URL}frontend/compare-products`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Compare response:", res.data.data);
      return res.data.data ?? [];
    } catch (error) {
      console.log("Compare products error:", error.response?.data || error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to compare products"
      );
    }
  }
);

const postCompareProductsSlice = createSlice({
  name: "postCompareProducts",
  initialState: {
    comparedData: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearCompareData: (state) => {
      state.comparedData = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCompareProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postCompareProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.comparedData = action.payload || [];
      })
      .addCase(postCompareProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCompareData } = postCompareProductsSlice.actions;
export default postCompareProductsSlice.reducer;
