import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import AboutText from "../../components/AboutText";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import pageTransition from "../../utils/animations/pageTrans";
import "./aboutme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutImages from '../../components/AboutImages';

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
        const target = document.getElementById("a-load-fade");
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
        history.push("/contact");
    };


    return (
        <div className={theme ? "a-wrapper" : "a-wrapper-dark"}>
            <div className="load-container">
                <div className={theme ? "a-load-screen" : "a-load-screen-dark"} ref={(el) => (screen = el)}>
                    <h1 className={theme ? "a-load-text" : "a-load-text-dark"} id="a-load-fade">about me</h1>
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
                            <div className="a-header">
                                <h1 style={theme ? {} : { color: "white" }}>about me</h1>
                                <h4 style={theme ? { color: "#8900f2" } : { color: "#6ed3e7" }}>Learn a little about me and what I can do for you</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt200">
                        <Col xl={6} className="mb175">
                            <Container>
                                <Row>
                                    <Col className="text-col">
                                        <AboutText theme={theme} changePage={changePage} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xl={6} style={{ marginTop: "-100px" }}>
                            <Container>
                                <Row>
                                    <Col>
                                        <AboutImages theme={theme} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
