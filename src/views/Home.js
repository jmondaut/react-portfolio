import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/Home.css';
import NeonButton from "../components/NeonButton";

function Home(){
    return(
        <Container>
        <Row className="justify-content-md-center">
            <Col>Jonathan MONDAUT (Website not responsive yet)</Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs={5} md={4}>
                <NeonButton imgLink="../img/home-page-left-button-nobg.png" routerLink="/work" alt="Work" />
            </Col>
            <Col id="v-divider" xs={1}>
            </Col>
            <Col xs={5} md={4}>
                <NeonButton imgLink="../img/home-page-right-button-nobg.png" routerLink="../MONDAUT Jonathan CV - Développeur Full Stack.pdf" isDownload="true" alt="CV"/>
            </Col>
        </Row>
        </Container>
    );
}

export default Home;