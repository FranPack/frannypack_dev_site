import React from "react";
import Twemoji from "react-twemoji";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Me from "../img/me.jpg";

const Welcome = () => {
  return (
    <div className="frontPage">
      <h1>
        <code className="hello">
          {/*{"<"}*/}
          <TypeAnimation
            sequence={[
              "Hello",
              2000,
              "Hola",
              2000,
              "Hej",
              2000,
              "Ciao",
              2000,
              "Hi",
            ]}
            wrapper="span"
            cursor={true}
            // repeat={Infinity}
            style={{ fontWeight: "bold" }}
            speed={15}
            deletionSpeed={15}
          />
          {/*{"/>"}*/}
        </code>
        {", "} 
        <strong>I&apos;m</strong>
        <br />
        <strong className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">Francisco Rivera</strong>.
      </h1>
      <div style={{
        background: `url(${Me.src}) center center/cover no-repeat`,
        width: '250px',
        height: '250px',
        borderRadius: "100%"
        
      }}></div>
    </div>
  );
};

export default Welcome;
