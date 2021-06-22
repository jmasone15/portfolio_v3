import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import AuthCard from '../../components/AuthCard';
import ThemeCard from '../../components/ThemeCard';
import "./skills.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Languages from '../../components/Languages';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import pageTransition from "../../utils/animations/pageTrans";

export default function Skills({ theme, setTheme, setCurrentPage, currentPage, setDraw }) {

    const history = useHistory();

    const changePage = (e, link) => {
        e.preventDefault();
        history.push(link);
    };

    // For Page Transition
    let screen = useRef(null);
    let body = useRef(null);

    useEffect(() => {
        setCurrentPage("skills");
        pageTransition(screen, body);
        skillsFadeIn();
        setDraw(false);
    });

    const skillsFadeIn = () => {
        setInterval(skillsShow, 170);
    };

    const skillsShow = () => {
        const target = document.getElementById("s-load-fade");
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
        <div className={theme ? "s-wrapper" : "s-wrapper-dark"}>
            <div className="load-container">
                <div className={theme ? "s-load-screen" : "s-load-screen-dark"} ref={(el) => (screen = el)}>
                    <h1 className={theme ? "s-load-text" : "s-load-text-dark"} id="s-load-fade">skills</h1>
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
                        <div className={theme ? "s-header" : "s-header-dark"}>
                            <h1 style={theme ? { color: "black" } : { color: "white" }}>skills</h1>
                            <h4 style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }}>This page showcases some of my skills in full stack development</h4>
                        </div>
                    </Row>
                    <Container>
                        <Row>
                            <Col>
                                <div className="s-container">
                                    <AuthCard changePage={changePage} theme={theme} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="s-container">
                                    <ThemeCard theme={theme} setTheme={setTheme} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="l-container">
                                    <Languages theme={theme} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
