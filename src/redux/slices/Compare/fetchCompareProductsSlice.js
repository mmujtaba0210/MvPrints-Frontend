import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://testbackend.mecarviprints.com/api/";

export const fetchCompareProducts = createAsyncThunk(
  "compare/fetchCompareProducts",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return rejectWithValue("No access token found");

      const res = await axios.get(`${BASE_URL}frontend/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Compare products:", res.data.data);
      return res.data?.data ?? [];
    } catch (error) {
      console.error("Fetch compare products error:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch compare products"
      );
    }
  }
);

// ✅ Slice Definition
const fetchCompareProductsSlice = createSlice({
  name: "compareProducts",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompareProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompareProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload || [];
      })
      .addCase(fetchCompareProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default fetchCompareProductsSlice.reducer;
