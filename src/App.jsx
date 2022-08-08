import {useEffect} from "react"
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/alieldeba/wifi4games/results/")
      .then((response) => {
        console.log(response.data);
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
