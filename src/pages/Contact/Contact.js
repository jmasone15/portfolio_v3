import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import ContactCard from "../../components/ContactCard";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import pageTransition from "../../utils/animations/pageTrans";
import "./contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe({ theme, currentPage, setCurrentPage }) {

    // For Page Transition
    let screen = useRef(null);
    let body = useRef(null);

    useEffect(() => {
        setCurrentPage("aboutme");
        pageTransition(screen, body);
        aboutMeFadeIn()
    });

    const aboutMeFadeIn = () => {
        setInterval(aboutMeShow, 170);
    };

    const aboutMeShow = () => {
        const target = document.getElementById("c-load-fade");
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

    const history = useHistory();

    const changePage = (e) => {
        e.preventDefault();
        history.push("/aboutme");
    };


    return (
        <div className={theme ? "c-wrapper" : "c-wrapper-dark"}>
            <div className="load-container">
                <div className={theme ? "c-load-screen" : "c-load-screen-dark"} ref={(el) => (screen = el)}>
                    <h1 className={theme ? "c-load-text" : "c-load-text-dark"} id="c-load-fade">contact</h1>
                </div>
            </div>
            <Container fluid data-barba="container" className="home">
                <Container fluid ref={(el) => (body = el)} className="head">
                    <Row>
                        <Col>
                            <Navs theme={theme} currentPage={currentPage} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="c-header">
                                <h1 style={theme ? {} : { color: "white" }}>contact</h1>
                                <h4 style={theme ? { color: "#8900f2" } : { color: "#6ed3e7" }}>Let's connect! I'll buy the coffee</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Container>
                            <Row>
                                <Col>
                                    <ContactCard theme={theme} changePage={changePage} />
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
