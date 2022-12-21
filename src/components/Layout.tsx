import Header from "./Header";
import Pairs from "./Pairs";
import { useAppSelector } from "../hooks/redux";
const Layout = () => {
  const { isLoading } = useAppSelector(({ currency }) => currency);
  return (
    <div className="w-screen h-screen bg-gradient-to-l from-gray-900 to-gray-600 flex items-center justify-center">
      {isLoading ? (
        <img src={process.env.PUBLIC_URL + "/assets/spinner.svg"} alt="" />
      ) : (
        <>
          <Header />
          <Pairs />
        </>
      )}
      <div className="absolute bottom-5 right-5 cursor-pointer">
        <a href="#" target="_blank">
          <img
            className="w-10 h-10 rounded-full invert opacity-20 transition-opacity hover:opacity-80 "
            src={process.env.PUBLIC_URL + "/assets/github.png"}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Layout;
