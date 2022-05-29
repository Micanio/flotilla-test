import React from "react";
import logo from './../../img/Flotilla_full_colour.png'
import "./../../styles/header.scss"

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
                            <p>81</p>
                        </div>
                    </div>
                    <div className="score">
                        <div className="title">
                            <h2>London</h2>  
                        </div>
                        <div className="cfScore">
                            <p>411</p>
                        </div>
                    </div>
                    <div className="score">
                        <div className="title">
                            <h2>Edinburgh</h2>
                        </div>
                        <div className="cfScore">
                            <p>90</p>
                        </div>
                    </div>
                    <div className="score">
                        <div className="title">
                            <h2>Total Score</h2>
                        </div>
                        <div className="cfScore">
                            <p>582</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}