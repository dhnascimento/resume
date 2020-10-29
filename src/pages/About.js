import { IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const About = () => {
  const SMediaQuery = useMediaQuery("(min-width: 786px)");

  const title = (
    <h3
      style={{
        "text-align": "center",
        "background-color": "#fac901",
        // color: "#ffffff",
      }}
    >
      About me
    </h3>
  );

  const text = (
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
      analysis in mind. However, the innate problem-solving nature of it, along
      with the endless possibilities of what one can accomplish with a
      programming language, ranging from a groundbreaking app to a simple tool
      to improve efficiency in a specific task, compelled me to pursue a career
      change towards a web developer role.
    </p>
  );

  const yellowColumn = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fac901",
    borderRight: "5px solid #000000",
    // borderStyle: "solid",
    // borderWidth: "5px",
  };

  const RegularGrid = (
    <IonRow
      style={{
        "border-color": "#000000",
        "border-style": "solid",
        "border-width": "5px",
      }}
    >
      <IonCol style={yellowColumn}>{title}</IonCol>
      <IonCol>{text}</IonCol>
    </IonRow>
  );

  const SmallGrid = (
    <IonCol>
      <IonCol style={yellowColumn}>{title}</IonCol>
      <IonCol
        style={{
          "border-color": "#000000",
          "border-style": "solid",
          "border-width": "5px",
        }}
      >
        {text}
      </IonCol>
    </IonCol>
  );

  return (
    <div>
      <IonGrid fixed={false}>{SMediaQuery ? RegularGrid : SmallGrid}</IonGrid>
    </div>
  );
};

export default About;
