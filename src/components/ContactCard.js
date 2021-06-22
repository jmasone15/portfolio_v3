import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Submit from "./Submit";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactCard({ theme, changePage }) {

    const [state, handleSubmit] = useForm("xoqydbdj");

    if (state.succeeded) {
        return (
            <Container className="submit-container">
                <Row>
                    <Col>
                        <Submit theme={theme} changePage={changePage} />
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="contact-container">
            <Row>
                <Col>
                    <Card className={theme ? "" : "contact-card-dark"}>
                        <Card.Header className={theme ? "contact-header" : "contact-header-dark"}>Contact Me</Card.Header>
                        <Card.Body>
                            <form onSubmit={handleSubmit}>
                                <Container>
                                    <Row style={{ marginRight: "10px", marginLeft: "10px" }}>
                                        <Col style={{ marginRight: "-30px" }}>
                                            <input
                                                type="text"
                                                className={theme ? "contact-form__input name-input" : "contact-form__input-dark name-input"}
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className={theme ? "contact-form__label" : "contact-form__label-dark"}>
                                                Name
                                            </label>
                                            <ValidationError
                                                prefix="Name"
                                                field="name"
                                                errors={state.errors}
                                            />
                                        </Col>
                                        <Col>
                                            <input
                                                type="email"
                                                className={theme ? "contact-form__input email-input" : "contact-form__input-dark email-input"}
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                            />
                                            <label
                                                htmlFor="email"
                                                className={theme ? "contact-form__label" : "contact-form__label-dark"}>
                                                Email
                                            </label>
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input
                                                type="text"
                                                className={theme ? "contact-form__input" : "contact-form__input-dark"}
                                                id="subject"
                                                name="subject"
                                                placeholder="Subject"
                                                required
                                            />
                                            <label
                                                htmlFor="Subject"
                                                className={theme ? "contact-form__label" : "contact-form__label-dark"}>
                                                Subject
                                            </label>
                                            <ValidationError
                                                prefix="Subject"
                                                field="subject"
                                                errors={state.errors}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <textarea
                                                className={theme ? "contact-form__input" : "contact-form__input-dark"}
                                                id="message"
                                                name="message"
                                                placeholder="Message"
                                                required
                                            />
                                            <label
                                                htmlFor="Message"
                                                className={theme ? "contact-form__label" : "contact-form__label-dark"}>
                                                Message
                                            </label>
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                                <div className="btn-div">
                                    <button
                                        className={theme ? "contact-btn first-contact" : "contact-btn-dark first-contact-dark"}
                                        type="submit"
                                        disabled={state.submitting}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}
