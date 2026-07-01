import React from "react";
import './App.css';
import { useRef, useState } from "react";
import ThumbnailCard from "./ThumbnailCard";

function ThumbnailRow({items}){

    const scrollRef = useRef(null);
    const [showLeft, setShoweft] = useState(false);

    return(
        <div className="row">
            <div className="row-track">
               {items.map((item, i) => (
                <ThumbnailCard src={item.src}/>
               ))}
            </div>
        </div>
    )
}

export default ThumbnailRow;
