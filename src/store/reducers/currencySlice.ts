import { createSlice } from "@reduxjs/toolkit";
import { IRate } from "../../types/Rate";
import { fetchRates } from "../../hooks/http";
interface ICurrencyState {
  currentExchange: IRate[];
  isLoading: boolean;
}
const initialState: ICurrencyState = {
  currentExchange: [],
  isLoading: false,
};
const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.fulfilled, (state, { payload }) => {
        state.currentExchange = payload;
        state.isLoading = false;
      })
      .addCase(fetchRates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRates.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default currencySlice.reducer;
