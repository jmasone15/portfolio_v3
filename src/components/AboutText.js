import React from 'react';

export default function AboutText({ theme, changePage }) {
    return (
        <div>
            <div className={theme ? "text-div" : "text-div-dark"}>
                <h1 className={theme ? "text-header" : "text-header-dark"}>jordan masone</h1>
                <h5>I am a Full Stack Developer with a passion for creating modern UI experiences.</h5>
                <h5>With every project I work on, I bring <u>creative ideas</u>, effective <u>problem solving</u>, and a little <u>humor</u> to make things fun.</h5>
                <h5>Whatever goals you may have, I am ready to make them a reality. :)</h5>
                <h5><a download href="./Jordan Masone Resume.pdf" style={{ color: "inherit" }}><b><u>My Resume</u></b></a></h5>
            </div>
            <br />
            <div className={theme ? "text-div" : "text-div-dark"}>
                <h4 className={theme ? "text-header" : "text-header-dark"}>A little about me...</h4>
                <h5>Born in Long Island, New York (Go Islanders!!!). Currently located in Orlando, FL.</h5>
                <h5>Huge video game and Nintendo nerd, always down to play some Super Smash Bros.</h5>
                <h5>Food may be my biggest passion, not cooking it just eating it.</h5>
            </div>
            <div style={{ textAlign: "center", marginTop: "75px" }}>
                <button className={theme ? "contact-btn first-contact" : "contact-btn-dark first-contact-dark"} onClick={(e) => changePage(e)}>Let's build something!</button>
            </div>
        </div>
    )
}
