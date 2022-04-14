import axios from "axios";
import { useEffect, useState } from "react";

const useHotels = () => {
  const [hotels, setHotels] = useState([]);

  const getHotels = async () => {
    await axios.get("/data.json").then((res) => setHotels(res.data));
  };

  useEffect(() => {
    getHotels();
  }, []);

  return { hotels };
};
export default useHotels;
