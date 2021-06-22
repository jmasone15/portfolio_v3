import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Navs from "../../components/Navs";
import Footer from "../../components/Footer";
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import pageTransition from "../../utils/animations/pageTrans";

export default function Home({ theme, currentPage, setCurrentPage, draw, setDraw }) {

    const history = useHistory();

    // For Page Transition
    let screen = useRef(null);
    let body = useRef(null);

    useEffect(() => {
        setCurrentPage("home");
        pageTransition(screen, body);
        homeFadeIn()
    });

    const homeFadeIn = () => {
        setInterval(homeShow, 170);
    };

    const homeShow = () => {
        const target = document.getElementById("h-load-fade");
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

    const changePage = (e, link) => {
        e.preventDefault();
        history.push(link);
    };

    return (
        <div className="unselectable">
            <div className="load-container">
                <div className={theme ? "h-load-screen" : "h-load-screen-dark"} ref={(el) => (screen = el)}>
                    <h1 className={theme ? "h-load-text" : "h-load-text-dark"} id="h-load-fade">home</h1>
                </div>
            </div>
            <Container fluid data-barba="container" className="home">
                <Container fluid ref={(el) => (body = el)} className="head">
                    <Row>
                        <Col>
                            <Navs theme={theme} currentPage={currentPage} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <div className="header">
                            <Header theme={theme} draw={draw} setDraw={setDraw} changePage={changePage} />
                        </div>
                    </Row>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
