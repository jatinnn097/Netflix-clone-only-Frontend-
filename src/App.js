import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import ThumbnailRow from "./ThumbnailRow";

import card1 from './assets/card1.png';
import card2 from './assets/card2.png';

const trending_now = [
    { src: card1 },
    { src: card2 },
    { src: card1 },
    { src: card1 }
]

function App(){
  return(
    <div className="app">
      <Sidebar/>
      <main className="app-main">
        <Hero />
        <h2 className="heading">New this week</h2>
        <div className="thumb-row">
          <ThumbnailRow items={trending_now}/>
        </div>
        
      </main>
    </div>
  )
}

export default App;
