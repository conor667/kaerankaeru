import React from "react";
import './Home.css'

function Home(){
    return(
        <div>
            <h1 className="title">Kaerankaeru</h1>
            <img className="bandlogoglow" src={require("./logowithglow.png")}></img>
        </div>
    );
};
export default Home;