import React from "react";
import './App.css';
import SideItem from "./SideItem";
import search from './assets/search.png';

function Sidebar(){
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <span className="text">N</span>
            </div>
            <ul className="sidebar-nav">
                <li><SideItem image={search}/></li>
                <li><SideItem image={search}/></li>
                <li><SideItem image={search}/></li>
                <li><SideItem image={search}/></li>
            </ul>
        </aside>
    )
}

export default Sidebar;
