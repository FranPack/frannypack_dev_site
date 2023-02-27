import React from "react";
import Twemoji from "react-twemoji";
import { TypeAnimation } from "react-type-animation";
import "./components.css";

const Welcome = () => {
  return (
    <>
      <div className="frontPage">
        <h1>
          <code className="hello">
            &lt;
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
            /&gt;
          </code>
          <br />
          My name is <strong>Francisco</strong>.{" "}
          <Twemoji options={{ className: "twemoji" }} tag="span">
            👋
          </Twemoji>
          <br />I am a Front-end Web Developer.
        </h1>
      </div>
    </>
  );
};

export default Welcome;
