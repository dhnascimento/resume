import { IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const About = () => {
  const SMediaQuery = useMediaQuery("(min-width: 786px)");

  const titleStyle = {
    textAlign: "center",
    backgroundColor: "#fac901",
  };

  const textStyle = {
    textAlign: "justify",
    paddingRight: "10px",
    paddingLeft: "10px",
  };

  const yellowColumn = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fac901",
    borderRight: "5px solid #000000",
    // borderStyle: "solid",
    // borderWidth: "5px",
  };

  const GridStyle = {
    borderColor: "#000000",
    borderRight: "5px solid",
    borderLeft: "5px solid",
  };

  const title = <h3 style={titleStyle}>About me</h3>;

  const text = (
    <p style={textStyle}>
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

  const RegularGrid = (
    <IonRow style={GridStyle}>
      <IonCol style={yellowColumn}>{title}</IonCol>
      <IonCol>{text}</IonCol>
    </IonRow>
  );

  const SmallGrid = (
    <IonCol>
      <IonCol style={yellowColumn}>{title}</IonCol>
      <IonCol style={GridStyle}>{text}</IonCol>
    </IonCol>
  );

  return (
    <div>
      <IonGrid fixed={false}>{SMediaQuery ? RegularGrid : SmallGrid}</IonGrid>
    </div>
  );
};

export default About;
