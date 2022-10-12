import React from "react";
import './Home.css';
import {FontAwesomeIcon} from '@fortawesome/fontawesome-free';

function Home(){
    return(
        <div className="homepage">
            <h1 className="title">Kaerankaeru</h1>
            <img className="bandlogoglow" src={require("./logowithglow.png")}></img>
            <ul className="bandmembernames">
                <ol> Aaron </ol>
                <ol> Frank </ol>
                <ol> Akane </ol>
                <ol> Gideon </ol>
                <ol> Truman </ol>
            </ul>
        </div>
    );
};
export default Home;