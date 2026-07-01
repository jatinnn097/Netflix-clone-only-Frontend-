import { React, useState } from "react";
import './App.css';

function SideItem(props,active=false){
    const [hovered, setHovered] = useState(false);

    return(
        <li className={`nav-item${active ? "nav-item-active" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
                <img src={props.image} />
        </li>
    )
}

export default SideItem;