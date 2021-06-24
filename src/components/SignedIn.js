import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function SignedIn({ signOut, email, type, theme }) {
    return (
        <Container className="login-container">
            <Row>
                <Col>
                    <Card className={theme ? "" : "signup-card-dark"}>
                        {type === "signup" && (<Card.Header className="login-header">Signed Up: <b>{email}</b></Card.Header>)}
                        {type === "login" && (<Card.Header className="login-header">Logged In: <b>{email}</b></Card.Header>)}
                        <Card.Body className={theme ? "font" : "font-dark"}>
                            <div>
                                <p>You are now considered "logged in" to the webpage.</p>
                                <p>If you were to look in the dev tools (F12) and check the Application tab, you can see a JSON Web Token in the cookie storage. The application checks to see if there is a token in storage and then verifies that it originated from this webpage.</p>
                                <p>The information you used to login is now securely stored in my personal MongoDB database, although your password is fully encrypted using bcryptjs. Using that information you could now log back in securely.</p>
                                <p>When you click the Logout button, the application deletes the token which resets the page.</p>
                            </div>
                            <form onSubmit={(e) => signOut(e)} className="form__group">
                                <div className="btn-div">
                                    <button className={theme ? "login-btn first-login" : "login-btn-dark first-login-dark"} type="submit">Logout</button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}
