import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../pages/Home/home.css";

export default function Footer({ theme }) {
    return (
        <Navbar className={theme ? "footer" : "footer-dark"} fixed="bottom" variant="dark" style={{ justifyContent: "center" }}>
            <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/jmasone15" style={theme ? { color: "black" } : { color: "white" }}> Jordan Masone </a></p>
        </Navbar>
    )
}
