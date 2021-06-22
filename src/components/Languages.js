import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Languages({ theme }) {
    return (
        <Container>
            <Row>
                <Col>
                    <div className={theme ? "l-body" : "l-body-dark"}>
                        <h1 style={theme ? { color: "black" } : { color: "white" }}>Languages and Technologies</h1>
                        <h5>These are some of the languages and technologies I use in all of my projects.</h5>
                        <h5> I make sure to stay up to date with the latest advancements in web devevlopment technologies.</h5>
                    </div>
                </Col>
            </Row>
            <Row className="tech-row-first">
                <Col>
                    <i className={theme ? "devicon-html5-plain-wordmark colored" : "devicon-html5-plain-wordmark"} ></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-css3-plain-wordmark colored" : "devicon-css3-plain-wordmark"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-javascript-plain colored" : "devicon-javascript-plain"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-mysql-plain-wordmark colored" : "devicon-mysql-plain-wordmark"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-mongodb-plain-wordmark colored" : "devicon-mongodb-plain-wordmark"}></i>
                </Col>
            </Row>
            <Row className="tech-row">
                <Col>
                    <i className={theme ? "devicon-bootstrap-plain-wordmark colored" : "devicon-bootstrap-plain-wordmark"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-python-plain-wordmark colored" : "devicon-python-plain-wordmark"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-materialui-plain colored" : "devicon-materialui-plain"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-php-plain colored" : "devicon-php-plain"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-handlebars-plain-wordmark colored" : "devicon-handlebars-plain-wordmark"}></i>
                </Col>
            </Row>
            <Row className="tech-row-last">
                <Col>
                    <i className={theme ? "devicon-express-original-wordmark colored" : "devicon-express-original-wordmark"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-nodejs-plain-wordmark colored" : "devicon-nodejs-plain-wordmark"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-react-original-wordmark colored" : "devicon-react-original-wordmark"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-github-original-wordmark colored" : "devicon-github-original-wordmark"}></i>
                </Col>
                <Col>
                    <i className={theme ? "devicon-jquery-plain-wordmark colored" : "devicon-jquery-plain-wordmark"}></i>
                </Col>
            </Row>
        </Container>
    )
}
