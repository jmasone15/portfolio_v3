import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Navs from "../../components/Navs";
import axios from "axios";
import AuthContext from "../../utils/context/AuthContext";
import UserContext from "../../utils/context/UserContext";
import SignUp from "../../components/SignUp";
import SignedIn from "../../components/SignedIn";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./userauth.css"

export default function UserAuth({ theme, setCurrentPage, setDraw }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [switcher, setSwitcher] = useState("signup");
    const { getLoggedIn } = useContext(AuthContext);
    const { loggedIn } = useContext(AuthContext);
    const { userEmail } = useContext(UserContext);

    async function signUp(e) {
        e.preventDefault();

        try {
            const signUpData = {
                email: email,
                password: password
            };

            await axios.post("https://damp-savannah-74900.herokuapp.com/auth/signup", signUpData);
            await getLoggedIn();
        } catch (err) {
            console.error(err);
            alert(err.request.response);
        }
    }

    async function login(e) {
        e.preventDefault();

        try {
            const signUpData = {
                email: email,
                password: password
            };

            await axios.post("https://damp-savannah-74900.herokuapp.com/auth/login", signUpData);
            await getLoggedIn();
        } catch (err) {
            console.error(err);
            alert(err.request.response);
        }
    }

    async function signOut(e) {
        e.preventDefault();
        setEmail("");
        setPassword("");
        await axios.get("https://damp-savannah-74900.herokuapp.com/auth/logout");
        await getLoggedIn();
    }

    const history = useHistory();

    const changePage = (e) => {
        e.preventDefault();
        history.push("/skills");
    };

    useEffect(() => {
        setCurrentPage("skills");
        setDraw(false);
    });

    return (
        <div className={theme ? "u-wrapper" : "u-wrapper-dark"}>
            <Container fluid>
                <Row>
                    <Col>
                        <Navs theme={theme} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={theme ? "u-header" : "u-header-dark"}>
                            <h1>user authentication</h1>
                            <h4 style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }}><span style={{ cursor: "pointer" }} onClick={(e) => changePage(e)}><u>back to skills page</u></span></h4>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            {loggedIn === false && (
                                <SignUp
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                    signUp={signUp}
                                    login={login}
                                    theme={theme}
                                    switcher={switcher}
                                    setSwitcher={setSwitcher}
                                />
                            )}
                            {loggedIn === true && (
                                <SignedIn
                                    signOut={signOut}
                                    email={userEmail}
                                    theme={theme}
                                    type={switcher}
                                />
                            )}
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
