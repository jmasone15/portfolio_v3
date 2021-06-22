import React, { useRef, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import ProjectCard from '../../components/ProjectCard';
import projects from "../../utils/projectData";
import "./projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import pageTransition from "../../utils/animations/pageTrans";

export default function Projects({ theme, currentPage, setCurrentPage, setDraw }) {

    const lightBackgroundColors = [
        "#FFADAD",
        "#FFD6A5",
        "#FDFFB6",
        "#CAFFBF",
        "#9BF6FF",
        "#A0C4FF",
        "#BDB2FF",
        "#FFC6FF",
        "#ffc8dd"
    ];
    const darkBackgroundColors = [
        "#54478c",
        "#2c699a",
        "#048ba8",
        "#0db39e",
        "#16db93",
        "#83e377",
        "#b9e769",
        "#efea5a",
        "#f1c453"
    ];

    // For Page Transition
    let screen = useRef(null);
    let body = useRef(null);

    useEffect(() => {
        setCurrentPage("project");
        pageTransition(screen, body);
        projectFadeIn();
        setDraw(false);
    });

    const projectFadeIn = () => {
        setInterval(projectShow, 170);
    };

    const projectShow = () => {
        const target = document.getElementById("p-load-fade");
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
        <div className={theme ? "p-wrapper" : "p-wrapper-dark"}>
            <div className="load-container">
                <div className={theme ? "p-load-screen" : "p-load-screen-dark"} ref={(el) => (screen = el)}>
                    <h1 className={theme ? "p-load-text" : "p-load-text-dark"} id="p-load-fade">projects</h1>
                </div>
            </div>
            <Container fluid data-barba="container" className="projects">
                <Container fluid ref={(el) => (body = el)} className="head">
                    <Row>
                        <Col>
                            <Navs theme={theme} currentPage={currentPage} />
                        </Col>
                    </Row>
                    <Row>
                        <div className="p-header">
                            <h1 style={theme ? { color: "black" } : { color: "white" }}>projects</h1>
                            <h4 style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }}>This is my portfolio of various projects I have worked on and am currently working on.</h4>
                        </div>
                    </Row>
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[0] : darkBackgroundColors[0]} data={projects[0]} num={140} />
                            </Col>
                            <Col lg={4}>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[1] : darkBackgroundColors[1]} data={projects[2]} num={140} />
                            </Col>
                            <Col lg={4}>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[2] : darkBackgroundColors[2]} data={projects[3]} num={150} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[3] : darkBackgroundColors[3]} data={projects[4]} num={120} />
                            </Col>
                            <Col lg={4}>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[4] : darkBackgroundColors[4]} data={projects[5]} num={120} />
                            </Col>
                            <Col lg={4}>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[5] : darkBackgroundColors[5]} data={projects[6]} num={120} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[6] : darkBackgroundColors[6]} data={projects[7]} num={130} />
                            </Col>
                            <Col lg={4}>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[7] : darkBackgroundColors[7]} data={projects[8]} num={145} />
                            </Col>
                            <Col lg={4}>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[8] : darkBackgroundColors[8]} data={projects[1]} num={150} />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div >
    )
}
