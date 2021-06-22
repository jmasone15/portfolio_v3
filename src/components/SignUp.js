import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function SignUp({ email, password, signUp, login, setEmail, setPassword, theme, switcher, setSwitcher }) {

    return (
        <Container className="login-container">
            <Row>
                <Col>
                    {switcher === "signup" && (
                        <Card className={theme ? "" : "signup-card-dark"}>
                            <Card.Header className={theme ? "login-header" : "login-header-dark"}>Sign Up</Card.Header>
                            <Card.Body>
                                <form onSubmit={(e) => signUp(e)}>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        className={theme ? "form__input" : "form__input-dark"}
                                        id="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <label
                                        for="name"
                                        className={theme ? "form__label" : "form__label-dark"}>
                                        Email
                                    </label>
                                    <br />
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        className={theme ? "form__input" : "form__input-dark"}
                                        id="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <label
                                        for="password"
                                        className={theme ? "form__label" : "form__label-dark"}>
                                        Password
                                    </label>
                                    <div className="btn-div">
                                        <button
                                            className={theme ? "login-btn first-login" : "login-btn-dark first-login-dark"}
                                            type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </Card.Body>
                            <Card.Footer className={theme ? "login-card-footer" : "login-card-footer-dark"}>
                                <p>Already have an account? <span className="login-switcher" onClick={(e) => setSwitcher("login")}><u>Login</u></span></p>
                            </Card.Footer>
                        </Card>
                    )}
                    {switcher === "login" && (
                        <Card className={theme ? "" : "signup-card-dark"}>
                            <Card.Header className={theme ? "login-header" : "login-header-dark"}>Login</Card.Header>
                            <Card.Body>
                                <form onSubmit={(e) => login(e)}>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        className={theme ? "form__input" : "form__input-dark"}
                                        id="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <label
                                        for="name"
                                        className={theme ? "form__label" : "form__label-dark"}>
                                        Email
                                    </label>
                                    <br />
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        className={theme ? "form__input" : "form__input-dark"}
                                        id="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <label
                                        for="password"
                                        className={theme ? "form__label" : "form__label-dark"}>
                                        Password
                                    </label>
                                    <div className="btn-div">
                                        <button
                                            className={theme ? "login-btn first-login" : "login-btn-dark first-login-dark"}
                                            type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </Card.Body>
                            <Card.Footer className={theme ? "login-card-footer" : "login-card-footer-dark"}>
                                <p>Don't have an account? <span className="login-switcher" onClick={(e) => setSwitcher("signup")}><u>Signup</u></span></p>
                            </Card.Footer>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container >
    )
}
