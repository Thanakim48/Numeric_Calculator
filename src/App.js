import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Secantp from "./pages/Secantp";
import Class from "./pages/Class";
import Bisection from "./pages/Bisection";
import False from "./pages/False";
import Newtonx from "./pages/Newtonx";
import Gaussjd from "./pages_Linear/Gaussjd_p";
import CramerRulep from "./pages_Linear/Cramer_Rule_p";
import Onepointp from "./pages/Onepoint";
import GaussEM from "./pages_Linear/GaussEm";
import Matrixinversion from "./pages_Linear/Matrix_Inversion";
import NewtonInterpolation from "./Interpolation/NewtonInter_pages";
import Newtonregessionpages from "./Input_regression/Newtonregp";
// import Navbar and Footer if they are needed in all pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    return (
        <Router>
            {/* Navbar อาจจะอยู่ตรงนี้เพื่อให้แสดงในทุกหน้า */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bisection" element={<Bisection />} />
                <Route path="/false" element={<False />} />
                <Route path="/Newton" element={<Newtonx />} />
                <Route path="/Secant" element={<Secantp />} />
                <Route path="/Onepoint" element={<Onepointp />} />
                <Route path="/Class" element={<Class />} />
                <Route path="/Cramer" element={<CramerRulep />} />
                <Route path="/Gaussjd" element={<Gaussjd />} />
                <Route path="/GaussEM" element={<GaussEM />} />
                <Route path="/Matrixinversion" element={<Matrixinversion />} />
                <Route path="/NewtonInterpolation" element={<NewtonInterpolation />} />
                <Route path="/NewtonRegression" element={<Newtonregessionpages />} />
            </Routes>
            {/* Footer อาจจะอยู่ตรงนี้เพื่อให้แสดงในทุกหน้า */}
            <Footer />
        </Router>
    );
}
