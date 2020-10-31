import { IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const About = () => {
  const SMediaQuery = useMediaQuery("(min-width: 786px)");
  const MobileMediaQuery = useMediaQuery("(min-width: 575px)");

  const titleStyle = {
    container: (SMediaQuery, MobileMediaQuery) => ({
      fontFamily: "'Kadwa', serif",
      fontSize: SMediaQuery
        ? "xx-large"
        : MobileMediaQuery
        ? "x-large"
        : "large",
      textAlign: "center",
      backgroundColor: "#fac901",
    }),
  };

  const textStyle = {
    textAlign: "justify",
    paddingRight: "10px",
    paddingLeft: "10px",
  };

  const yellowColumn = {
    container: (SMediaQuery) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fac901",
      borderRight: SMediaQuery ? "5px solid #000000" : "0px solid #000000",
      borderBottom: SMediaQuery ? "0px solid #000000" : "5px solid #000000",
      marginTop: SMediaQuery ? "0px" : "0px",
    }),
  };

  const gridStyle = {
    borderColor: "#000000",
  };

  const gridBorder = {
    padding: "0px",
  };

  const title = (
    <div style={titleStyle.container(SMediaQuery, MobileMediaQuery)}>
      About me
    </div>
  );

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
    <IonRow style={gridStyle}>
      <IonCol style={yellowColumn.container(SMediaQuery)}>{title}</IonCol>
      <IonCol offset="2 ">{text}</IonCol>
    </IonRow>
  );

  const SmallGrid = (
    <div>
      <IonCol style={yellowColumn.container(SMediaQuery)}>{title}</IonCol>
      <IonCol style={gridStyle}>{text}</IonCol>
    </div>
  );

  return (
    <div>
      <IonGrid fixed={false} style={gridBorder}>
        {SMediaQuery ? RegularGrid : SmallGrid}
      </IonGrid>
    </div>
  );
};

export default About;
