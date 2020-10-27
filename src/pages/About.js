import { IonContent, IonImg, IonTitle } from "@ionic/react";
import React from "react";

const About = () => {
  return (
    <div>
      <h3 style={{ "text-align": "center" }}>About me</h3>
      <p
        style={{
          "text-align": "justify",
          "padding-right": "10px",
          "padding-left": "10px",
        }}
      >
        {" "}
        I have over 9 years of experience in the banking and finance industries.
        I’ve always enjoyed working in helping people finding the most suitable
        solutions for their needs. I started learning how to code with data
        analysis in mind. However, the innate problem-solving nature of it,
        along with the endless possibilities of what one can accomplish with a
        programming language, ranging from a groundbreaking app to a simple tool
        to improve efficiency in a specific task, compelled me to pursue a
        career change towards a web developer role.
      </p>
    </div>
  );
};

export default About;
