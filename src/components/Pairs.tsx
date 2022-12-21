import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks/redux";
import CurrencyPair from "./CurrencyPair";

const Pairs = () => {
  const { currentExchange } = useAppSelector(({ currency }) => currency);
  return (
    <ul className="min-h-[500px] h-auto  w-7/12 flex flex-col gap-5 items-center justify-center">
      {currentExchange.map((item) => (
        <CurrencyPair key={nanoid()} settings={item} />
      ))}
    </ul>
  );
};

export default Pairs;
