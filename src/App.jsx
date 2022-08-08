import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useDispatch } from "react-redux";
import { setApi } from "./futures/gamesSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/alieldeba/wifi4games/results/")
      .then((response) => {
        dispatch(setApi(response.data));
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
