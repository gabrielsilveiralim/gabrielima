import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from "./components/About/About";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
           

            </Routes>
        </BrowserRouter>
    )
}