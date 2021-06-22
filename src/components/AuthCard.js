import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AuthCard({ changePage, theme }) {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className={theme ? "" : "auth-card-dark"}>
                        <Card.Body>
                            <Card.Title className="auth-title" >User Authentication</Card.Title>
                            <Row className="font">
                                <Col className="auth-border">
                                    <Card.Text>
                                        One of my best skills is my ability to build out custom user authentication logic for any type of project.
                                            </Card.Text>
                                    <Card.Text>
                                        Whether it be a simple login and logout system. Or multiple complex routes for data management, I have the skills and tools necessary to build it.
                                            </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text>
                                        My user authentication uses these technologies,
                                            </Card.Text>
                                    <Card.Text>
                                        <ul>
                                            <li>Node.js</li>
                                            <li>JWT</li>
                                            <li>bcryptjs</li>
                                            <li>Cookies</li>
                                        </ul>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Button className={theme ? "auth-btn" : "auth-btn-dark"} onClick={(e) => changePage(e, "/userauth")}>Try it Out!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
