import React from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { animations } from "react-animation";
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
      animation: animations.popIn,
      animationDuration: "5s",
    }),
  };

  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "justify",
    paddingRight: "10px",
    paddingLeft: "10px",
    animation: animations.popIn,
    animationDuration: "4s",
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
    <div>
      <p style={textStyle}>
        Over 9 years of experience in the banking and finance industries.
        Started to learn how to code with data analysis in mind, which lead me to improve my programming
        skills and eventually switching careers to software development.
        Helpful and enthusiastic team player dedicated to efficiently resolving project issues. Ability and willingness
      to innovate and learn new technologies. 
      </p>
      <p style={textStyle}>
        Do you want to know more about me, my projects or do some networking?
        Please send me an email or add me on LinkedIn!
      </p>
    </div>
  );

  const RegularGrid = (
    <IonRow style={gridStyle}>
      <IonRow>
        <IonCol style={yellowColumn.container(SMediaQuery)} size="3">
          {title}
        </IonCol>
        <IonCol>{text}</IonCol>
      </IonRow>
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
