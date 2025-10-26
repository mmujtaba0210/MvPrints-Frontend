// src/redux/slices/MegaMenuSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://testbackend.mecarviprints.com/api/";

export const fetchMegaMenu = createAsyncThunk(
  "megaMenu/fetchMegaMenu",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}frontend/megamenu`);
      if (data?.status_code === 200) {
        return data.data;
      } else {
        return rejectWithValue("Failed to load mega menu data");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Server Error");
    }
  }
);

const megaMenuSlice = createSlice({
  name: "megaMenu",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMegaMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMegaMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMegaMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default megaMenuSlice.reducer;
