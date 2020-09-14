import React from 'react'
import { Tab } from "react-bootstrap"
import Iframe from 'react-iframe'
import "../css/WorkDisplay.css"
function WorkDisplay(props){        
        return(
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Tab.Content>
                <Tab.Pane eventKey="#link1">
                    <Iframe url={props.workLink.link}
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    width="100%"
                    height="500px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
        );
}

export default WorkDisplay