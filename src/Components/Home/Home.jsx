import React,{useState} from "react";
import '../../main.css'

import video from '../../Assets/clouds-45150.mp4'
import takeOff from '../../Assets/takeOff.png'

function Home() {
    return ( 
        <div className="home flex container">

            <div className="mainText">
                <h1>Create Ever-lasting Memories With US</h1>
            </div>

            <div className="homeImages flex">

                <div className="videoDiv">
                    <video src={video} loop muted autoPlay className="video"></video>
                </div>

                <img src={takeOff} alt="" className="plane" />
            </div>
        </div>
     );
}

export default Home;