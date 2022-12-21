import { useEffect } from "react";
import Layout from "../components/Layout";
import { fetchRates } from "../hooks/http";
import { useAppDispatch } from "../hooks/redux";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRates());
  }, []);
  return <Layout />;
}

export default App;
