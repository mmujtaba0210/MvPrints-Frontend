import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk with axios + async/await
const baseUrl = " https://testbackend.mecarviprints.com/api/";
export const fetchPrints = createAsyncThunk(
  "prints/fetchPrints",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}admin/products/prints/list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          origin: [
            "https://testfrontend.mecarviprints.com",
            "http://localhost:3000",
          ],
        },
      });

      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch prints"
      );
    }
  }
);

const fetchProductSlice = createSlice({
  name: "fetchProduct",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearPrints: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrints.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrints.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPrints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearPrints } = fetchProductSlice.actions;
export default fetchProductSlice.reducer;
