import React from 'react';
import Container from 'react-bootstrap/esm/Container';

export default function ProjectCard({ color, data, num, theme }) {

    const changePage = (e, link) => {
        e.preventDefault();
        window.location.replace(link)
    };

    return (
        <Container>
            <div className="p-card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon" style={{ backgroundColor: color }}>
                            <i className="fa fa-linkedin-square" style={{ backgroundColor: color, position: "absolute", left: num }} aria-hidden="true">
                                <h2 style={{ backgroundColor: color, color: theme ? "black" : "white" }}>{data.name}</h2>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="face face2" style={theme ? { backgroundColor: "#8d99ae" } : { backgroundColor: "#bfc0c0" }}>
                    <div className="content" style={theme ? { backgroundColor: "#8d99ae" } : { backgroundColor: "#bfc0c0" }}>
                        <p style={theme ? { color: "white", backgroundColor: "#8d99ae" } : { backgroundColor: "#bfc0c0" }}><b>{data.description}</b></p>
                        <br />
                        <button
                            onClick={(e) => changePage(e, data.github)}
                            className={theme ? "p-btn p-btn-first" : "p-btn-dark p-btn-first-dark"}
                            style={{ backgroundColor: color, border: `2px solid ${color}` }}
                        >Github
                        </button>
                        <button
                            onClick={(e) => changePage(e, data.deploy)}
                            className={theme ? "p-btn p-btn-first" : "p-btn-dark p-btn-first-dark"}
                            style={{ backgroundColor: color, border: `2px solid ${color}` }}
                        >Deployed
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
