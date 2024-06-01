import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const MarketTrend = createAsyncThunk(
  "MarketTrend",
  async (_, thunkAPI) => {
    const options = {
      method: "GET",
      url: "https://real-time-finance-data.p.rapidapi.com/market-trends",
      params: {
        trend_type: "MARKET_INDEXES",
        country: "us",
        language: "en",
      },
      headers: {
        "x-rapidapi-key": "d7e376bff3mshf9a8072365f1828p199d6ejsn792045f99c30",
        "x-rapidapi-host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log("This is marketTrends->", response.data.data.news);
      return response.data;
    } catch (error: any) {
      console.error(error);
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const trendSlice = createSlice({
  name: "trendSlice",
  initialState: {
    isLoading: false,
    data: null,
    loadingSuccess: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(MarketTrend.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(MarketTrend.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.loadingSuccess = true;
    });
    builder.addCase(MarketTrend.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
  reducers: {},
});

export default trendSlice.reducer;
