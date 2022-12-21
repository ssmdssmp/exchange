import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks/redux";
import HeaderItem from "./HeaderItem";
const Header = () => {
  const currentExchange = useAppSelector(
    ({ currency }) => currency.currentExchange
  );

  return (
    <div className="fixed top-2 h-16 w-full flex justify-center items-center  border-slate-500">
      <ul className="w-7/12 h-12 flex items-center gap-3 justify-between px-2">
        {currentExchange.map((item) => {
          return <HeaderItem key={nanoid()} cur={item} />;
        })}
      </ul>
    </div>
  );
};

export default Header;
