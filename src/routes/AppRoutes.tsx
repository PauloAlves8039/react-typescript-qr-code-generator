import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About/About";

export default function AppRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}
