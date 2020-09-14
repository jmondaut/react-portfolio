import React from 'react';
import { Tab, ListGroup } from "react-bootstrap";
import "../css/WorkTab.css";

class WorkTab extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        // this.setState({workId: e.target.id});
        this.props.onEventKeyChange(e.target.id);
    }

    getWorks = () => {
        const works = []
        const listItems = []
        const thisWorkList = this.props.workList

        //TODO: Make catch error on no item
        Object.keys(thisWorkList).map(function(key, index) {
            works.push([key, thisWorkList[key].desc, thisWorkList[key].completed])
        });

        for (const elt of works) {
            listItems.push(<ListGroup.Item id={elt[0]} className="listItem" eventKey={elt[0]} action onClick={this.handleChange}>{elt[1]} {elt[2]}</ListGroup.Item>)
        }
        return listItems;
    }
    render(){
        return(
            <Tab.Container  defaultActiveKey="1">
                <ListGroup>
                    {this.getWorks()}
                </ListGroup>
            </Tab.Container>
        );
}}

export default WorkTab