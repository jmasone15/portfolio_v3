import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import UserAuth from "./pages/UserAuth/UserAuth";
import Contact from "./pages/Contact/Contact";

export default function Router({ theme, setTheme, draw, setDraw }) {

    const [currentPage, setCurrentPage] = useState("");


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} draw={draw} setDraw={setDraw} />
                </Route>
                <Route exact path="/project">
                    <Projects theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} setDraw={setDraw} />
                </Route>
                <Route exact path="/skills">
                    <Skills theme={theme} setTheme={setTheme} currentPage={currentPage} setCurrentPage={setCurrentPage} setDraw={setDraw} />
                </Route>
                <Route exact path="/aboutme">
                    <AboutMe theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} setDraw={setDraw} />
                </Route>
                <Route exact path="/userauth">
                    <UserAuth theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} setDraw={setDraw} />
                </Route>
                <Route exact path="/contact">
                    <Contact theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} setDraw={setDraw} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
