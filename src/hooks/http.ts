import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IRate } from "../types/Rate";

export const fetchRates = createAsyncThunk<IRate[]>(
  "currency/fetchRates",
  async () =>
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((res) =>
        res.data.filter((el: IRate) => [840, 978, 826].includes(el.r030))
      )
);
