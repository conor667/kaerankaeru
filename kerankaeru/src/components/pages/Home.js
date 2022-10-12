import React from "react";
import './Home.css'

function Home(){
    return(
        <div>
            <h1 className="title">Kaerankaeru</h1>
            <img className="bandlogoglow" src={require("./logowithglow.png")}></img>
            <ul>
                <li> Aaron </li>
                <li> Frank </li>
                <li> Akane </li>
                <li> Gideon </li>
                <li> Truman </li>
            </ul>
        </div>
    );
};
export default Home;