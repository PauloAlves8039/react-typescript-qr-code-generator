import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About/About";
import QrCodeGenerator from "../components/QrCode/QrCodeGenerator";

export default function AppRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/qr-code-generator" element={<QrCodeGenerator />} />
                <Route path="/about" element={<About />} />
            </Routes>        
        </>
    );
}
