import axios from "axios";

export const getAllOrder = async () => {
  const res = await axios.get("http://localhost:8080/oder");
  return res.data;
};
export const createOder = async (oder) => {
  const response = await axios.post(" http://localhost:8080/oder", oder);
  return response.data;
};
