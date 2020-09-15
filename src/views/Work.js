import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/Work.css';
import NeonButton from "../components/NeonButton";
import WorkTab from "../components/WorkTab"
import WorkDisplay from "../components/WorkDisplay"

function Work(){
    const [workId, setWorkId] = useState("1");
    const setActiveWork = (child_workId) => {
        setWorkId(child_workId);
    }

    const workList = {
        "1": {link: "https://codesandbox.io/embed/charming-rosalind-xp14j/?codemirror=1&view=split",
                desc: "This Portfolio",
                completed: "(Under Construction)"},
        "2": {link: "https://codesandbox.io/embed/musing-benz-yfqel?codemirror=1&view=split",
                desc: "Kébarbe",
                completed: "(Under Construction)"}
    };

    let workLink = workList[workId]
    return(
        <Container>
        <Row className="justify-content-md-center">
            <Col>Jonathan MONDAUT Work</Col>
        </Row>
        <Row className="">
            <Col id="work-list" xs={12} lg={2}>
                <WorkTab onEventKeyChange={setActiveWork} workList={workList} />
            </Col>
            <Col id="v-divider" xs={12} lg={8}>
                <WorkDisplay workLink={workLink} />
            </Col>
            <Col id="home" xs={12} lg={2}>
                <NeonButton imgLink="../img/work-page-home-button.png" routerLink="/" />
            </Col>
        </Row>
        </Container>
    );
}

export default Work;