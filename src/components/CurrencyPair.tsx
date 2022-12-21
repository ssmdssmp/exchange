import { Select, TextField, MenuItem } from "@mui/material";
import { IRate } from "../types/Rate";
import { useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { nanoid } from "@reduxjs/toolkit";

const CurrencyPair = ({ settings }: { settings: IRate }) => {
  const { currentExchange } = useAppSelector(({ currency }) => currency);
  const [firstRate, setFirstRate] = useState(settings.r030);
  const [secondRate, setSecondRate] = useState(1);
  const [firstInputValue, setFirstInputValue] = useState(1);
  const [secondInputValue, setSecondInputValue] = useState(settings.rate);
  const switchRates = () => {
    setFirstRate(secondRate);
    setSecondRate(firstRate);

    setFirstInputValue(secondInputValue);
    setSecondInputValue(firstInputValue);
  };
  return (
    <li className="h-16 w-full  rounded-sm flex items-center ">
      <div className="flex items-center justify-between w-full px-2 ">
        <div className="flex gap-2 items-center p-2 bg-slate-300 overflow-hidden rounded-sm">
          <TextField
            onFocus={(event) => {
              event.target.select();
            }}
            type="number"
            sx={{
              background: "white",
              border: "none",
            }}
            value={firstInputValue}
            onChange={(e) => {
              setFirstInputValue(+e.target.value);
              if (secondRate === 1) {
                setSecondInputValue(
                  +(
                    +e.target.value *
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === firstRate)?.rate
                  ).toFixed(2)
                );
              } else if (firstRate === 1) {
                setSecondInputValue(
                  +(
                    +e.target.value /
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === secondRate)?.rate
                  ).toFixed(2)
                );
              } else {
                setSecondInputValue(
                  +(
                    (+e.target.value *
                      //@ts-ignore
                      currentExchange.find((el) => el.r030 === firstRate)
                        ?.rate) /
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === secondRate)?.rate
                  ).toFixed(2)
                );
              }
            }}
          />
          <Select
            sx={{
              width: "120px",
              height: "55px",
              color: "black",
              background: "white",
            }}
            name="currency"
            value={firstRate}
            onChange={(e) => {
              setFirstRate(+e.target.value);
              if (secondRate === 1 && e.target.value !== 1) {
                setSecondInputValue(
                  +(
                    +firstInputValue *
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === e.target.value)
                      ?.rate
                  ).toFixed(2)
                );
              } else if (
                e.target.value === 1 &&
                e.target.value !== secondRate
              ) {
                setSecondInputValue(
                  +(
                    +firstInputValue /
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === secondRate)?.rate
                  ).toFixed(2)
                );
              } else if (e.target.value === secondRate) {
                setSecondInputValue(+firstInputValue);
              } else {
                setSecondInputValue(
                  +(
                    (firstInputValue *
                      //@ts-ignore
                      currentExchange.find((el) => el.r030 === e.target.value)
                        ?.rate) /
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === secondRate)?.rate
                  ).toFixed(2)
                );
              }
            }}
          >
            {currentExchange.map((item: IRate) => (
              <MenuItem key={nanoid()} value={item.r030}>
                {item.cc}
              </MenuItem>
            ))}
            <MenuItem value={1}> UAH</MenuItem>
          </Select>
        </div>

        <img
          onClick={() => switchRates()}
          className="w-10 h-10 cursor-pointer invert "
          src={process.env.PUBLIC_URL + "/assets/switch.png"}
          alt=""
        />
        <div className="flex gap-2 items-center p-2 bg-slate-300 rounded-sm">
          <TextField
            onFocus={(event) => {
              event.target.select();
            }}
            type="number"
            sx={{ background: "white" }}
            value={+secondInputValue}
            onChange={(e) => {
              setSecondInputValue(+e.target.value);
              if (firstRate === 1) {
                setFirstInputValue(
                  +(
                    +e.target.value *
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === secondRate)?.rate
                  ).toFixed(2)
                );
              } else if (secondRate === 1) {
                setFirstInputValue(
                  +(
                    +e.target.value /
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === firstRate)?.rate
                  ).toFixed(2)
                );
              } else {
                setFirstInputValue(
                  +(
                    (+e.target.value *
                      //@ts-ignore
                      currentExchange.find((el) => el.r030 === secondRate)
                        ?.rate) /
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === firstRate)?.rate
                  ).toFixed(2)
                );
              }
            }}
          />
          <Select
            sx={{
              width: "120px",
              height: "55px",
              color: "black",
              background: "white",
            }}
            name="currency"
            value={secondRate}
            onChange={(e) => {
              setSecondRate(+e.target.value);
              if (firstRate === 1 && e.target.value !== 1) {
                setFirstInputValue(
                  +(
                    +secondInputValue *
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === e.target.value)
                      ?.rate
                  ).toFixed(2)
                );
              } else if (+e.target.value === firstRate) {
                setFirstInputValue(+secondInputValue);
              } else if (e.target.value === 1) {
                setFirstInputValue(
                  +(
                    +secondInputValue /
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === firstRate)?.rate
                  ).toFixed(2)
                );
              } else {
                setFirstInputValue(
                  +(
                    (secondInputValue *
                      //@ts-ignore
                      currentExchange.find((el) => el.r030 === e.target.value)
                        ?.rate) /
                    //@ts-ignore
                    currentExchange.find((el) => el.r030 === firstRate)?.rate
                  ).toFixed(2)
                );
              }
            }}
          >
            {currentExchange.map((item) => (
              <MenuItem key={nanoid()} value={item.r030}>
                {item.cc}
              </MenuItem>
            ))}
            <MenuItem value={1}> UAH</MenuItem>
          </Select>
        </div>
      </div>
    </li>
  );
};

export default CurrencyPair;
