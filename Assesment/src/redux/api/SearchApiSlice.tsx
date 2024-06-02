import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const SearchItemAPI = createAsyncThunk(
  "SearchItemAPI",
  async (keyword: any, thunkAPI) => {
    const options = {
      method: "GET",
      url: "https://real-time-finance-data.p.rapidapi.com/search",
      params: {
        query: keyword,
        language: "en",
      },
      headers: {
        "x-rapidapi-key": "0bcd23b85dmsh229cf3537927b87p1ec579jsnec09227d2e29",
        "x-rapidapi-host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log("This is SearchAPi->", response.data.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const SearchAPi = createSlice({
  name: "trendSlice",
  initialState: {
    isLoading: false,
    data: null,
    loadingSuccess: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(SearchItemAPI.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SearchItemAPI.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.loadingSuccess = true;
    });
    builder.addCase(SearchItemAPI.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
  reducers: {},
});

export default SearchAPi.reducer;
