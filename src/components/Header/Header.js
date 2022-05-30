import React from "react";
import logo from './../../img/Flotilla_full_colour.png'
import "./../../styles/header.scss"

const leeds2019 = 281;
const london2019 = 908;
const edin2019 = 514;
const total2019 = 1703;
const leeds2020 = 81;
const london2020 = 411;
const edin2020 = 90;
const total2020 = 582;

export default class Header extends React.Component {
    render() {
        return (
            <div className="topSection">
                <div className="logo">
                    <img src={logo} alt={"logo"}/>
                </div>
                <h1>Your Carbon Footprint Score, y/e 2020</h1>
                <div className="scores">                    
                    <div className="score">
                        <div className="title">
                            <h2>Leeds</h2>
                        </div>
                        <div className="cfScore">
                            <p className={"twenty" + (leeds2020 < leeds2019 ? " green" : " red" )}>{leeds2020}</p>
                            <p className="nineteen">2019: <span>{leeds2019}</span></p>                        
                        </div>
                    </div>
                    <div className="score">
                        <div className="title">
                            <h2>London</h2>  
                        </div>
                        <div className="cfScore">
                            <p className={"twenty" + (london2020 < london2019 ? " green" : " red" )}>{london2020}</p>
                            <p className="nineteen">2019: <span>{london2019}</span></p>
                        </div>
                    </div>
                    <div className="score">
                        <div className="title">
                            <h2>Edinburgh</h2>
                        </div>
                        <div className="cfScore">
                            <p className={"twenty" + (edin2020 < edin2019 ? " green" : " red" )}>{edin2020}</p>
                            <p className="nineteen">2019: <span>{edin2019}</span></p>                        
                        </div>
                    </div>
                    <div className="score">
                        <div className="title">
                            <h2>Total Score</h2>
                        </div>
                        <div className="cfScore">
                            <p className={"twenty" + (total2020 < total2019 ? " green" : " red" )}>{total2020}</p>
                            <p className="nineteen">2019: <span>{total2019}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}