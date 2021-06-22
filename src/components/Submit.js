import React from "react";
import Typist from 'react-typist';

export default function Submit({ theme, changePage }) {

    const buttonfadeIn = () => {
        setInterval(buttonShow, 100);
    };

    const buttonShow = () => {
        const target = document.getElementById("fade-btn");
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

    return (
        <div style={{ textAlign: "center" }}>
            <Typist cursor={{ show: false }} onTypingDone={() => buttonfadeIn()}>
                <Typist.Delay ms={500} />
                <h1 className={theme ? "submit-header" : "submit-header-dark"}>Thank you! I usually respond within 1-2 business days.</h1>
                <Typist.Delay ms={500} />
                <h1 className={theme ? "submit-header" : "submit-header-dark"}>Looking forward to working with you :)</h1>
            </Typist>
            <div style={{ marginTop: "100px" }}>
                <button id="fade-btn" className={theme ? "back-btn first-back" : "back-btn-dark first-back-dark"} onClick={(e) => changePage(e)}>Back to About Me</button>
            </div>
        </div>
    )
}
