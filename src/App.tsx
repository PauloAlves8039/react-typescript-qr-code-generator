import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}
