import React from "react";
import './App.css';
import logo from './assets/logo.png';
import banner from './assets/banner.png';

function Hero(){
    return(
        <section className="hero">
            <div className="left">
                <div className="first">
                    <img src={logo}/>
                    <p>SERIES</p>
                </div>
                <h1 className="second">MONEY <span className="hst">HEIST</span></h1>
                <h2 className="third">PART 4</h2>
                <h1 className="fourth"><span className="btn">IMDb</span> 8.5/10</h1>
                <h1 className="fifth"><span className="btn">2B+</span> Streams</h1>

                <div className="btns">
                    <button className="first-btn">play</button>
                    <button className="second-btn">watch trailer</button>
                </div>
            </div>
            <div className="right">
                <img src={banner}/>
            </div>

        </section>
    )
}

export default Hero;
