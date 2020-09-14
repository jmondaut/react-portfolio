import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import '../css/NeonButton.css';

const NeonButton = (props) => {
    if(props.isDownload === "true"){
        return(
            <Link className="w-100" to={props.routerLink} download target={props.routerLink}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={props.imgLink} alt={props.alt} />
            </Link>
            );
    }else{
        return(
            <Link className="w-100" to={props.routerLink}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={props.imgLink} alt={props.alt} />
            </Link>
        );
    }
}

export default NeonButton;