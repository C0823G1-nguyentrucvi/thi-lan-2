import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ListOder } from "./components/product/ListOrder";
import { CreateOder } from "./components/product/CreateOder";
import { ToastContainer } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListOder />} />
        <Route path="/create" element={<CreateOder />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
