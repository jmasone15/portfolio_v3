import React from "react";
import Typist from 'react-typist';

export default function Header({ theme, draw, setDraw, changePage }) {

    const headerfadeIn = () => {
        setInterval(headerShow, 100);
    };

    const headerShow = () => {
        const target = document.getElementById("fade");
        if (target) {
            let opacity = Number(window.getComputedStyle(target).getPropertyValue("opacity"));

            if (opacity < 1) {
                opacity += 0.1;
                target.style.opacity = opacity
            } else {
                clearInterval(0);
            }
        }
    }

    const drawingFunc = (e) => {
        e.preventDefault();

        if (draw === false) {
            setDraw(true)
        } else {
            setDraw(false)
        };
    };

    return (
        <div style={theme ? {} : { color: "white" }}>
            <Typist cursor={{ show: false }} onTypingDone={() => headerfadeIn()}>
                <Typist.Delay ms={2000} />
                <h1>Hello, my name is <span style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }}>Jordan Masone</span></h1>
                <Typist.Delay ms={500} />
                <h1>
                    I am a <a style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }} href="https://github.com/jmasone15">Front End</a>
                    <Typist.Backspace count={10} delay={500} />
                    <Typist.Delay ms={500} /> <a style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }} href="https://github.com/jmasone15">Back End</a>
                    <Typist.Backspace count={9} delay={500} />
                    <Typist.Delay ms={500} /> <a style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }} href="https://github.com/jmasone15">Full Stack Developer</a>
                </h1>
            </Typist>
            <div id="fade" className="fade">
                <div>
                    <h3>Check out my <span className={theme ? "h-link" : "h-link-dark"} onClick={(e) => changePage(e, "/project")}>projects page</span> to see my latest projects.</h3>
                    <h3>Or you can contact me directly through my <span className={theme ? "h-link" : "h-link-dark"} onClick={(e) => changePage(e, "/contact")}>contact page.</span></h3>
                </div>
                <div style={{ marginTop: "50px" }}>
                    {draw === false && (<button className={theme ? "home-btn first-home" : "home-btn-dark first-home-dark"} onClick={(e) => drawingFunc(e)}>Draw on Me!</button>)}
                    {draw === true && (<button className={theme ? "home-btn first-home" : "home-btn-dark first-home-dark"} onClick={(e) => drawingFunc(e)}>Stop drawing on Me!</button>)}
                </div>
            </div>
        </div>
    )
}
