import axios from "axios";

export const getAllProduct = async () => {
  const res = await axios.get("http://localhost:8080/sanPham");
  return res.data;
};
