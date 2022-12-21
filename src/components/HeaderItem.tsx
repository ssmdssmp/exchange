import { useState } from "react";
import { IRate } from "../types/Rate";

const HeaderItem = ({ cur }: { cur: IRate }) => {
  const [isReverseRate, setIsReverseRate] = useState(false);
  return (
    <li className="bg-slate-200 min-w-[200px] rounded-sm   h-10 flex justify-center items-center gap-2">
      <img
        className="w-6 h-6"
        src={
          cur.r030 === 840
            ? process.env.PUBLIC_URL + "/assets/usd.png"
            : cur.r030 === 978
            ? process.env.PUBLIC_URL + "/assets/eur.png"
            : process.env.PUBLIC_URL + "/assets/gbp.png"
        }
        alt="us flag"
      />
      <p
        onClick={() => setIsReverseRate(!isReverseRate)}
        className="cursor-pointer"
      >
        {" "}
        {cur.cc} / UAH
      </p>
      <p className="  bg-white rounded-md px-2 text-slate-700">
        {isReverseRate
          ? (1 / cur.rate).toFixed(3)
          : cur.rate.toString().slice(0, -2)}
      </p>
    </li>
  );
};

export default HeaderItem;
