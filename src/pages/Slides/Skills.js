import React from "react";
import { IonGrid, IonRow } from "@ionic/react";
import "../../theme/slides.css";
import {
  FrontEnd,
  BackEnd,
  Languages,
  ML,
  Databases,
  Other,
  SpokenLanguages,
} from "../../images/Compiler";

const Skills = () => {
  const rowMainStyle = {
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  };

  const gridStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "25px",
    backgroundColor: "#D8D8D8",
    paddingLeft: "0px",
    paddingRight: "0px",
  };

  const titleStyle = {
    fontFamily: "'Kadwa', serif",
    color: "#333333",
    width: "100%",
  };

  return (
    <IonGrid fixed={false} style={gridStyle}>
      <IonRow>
        <span style={titleStyle}>Web Front End</span>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <FrontEnd />
      </IonRow>

      <IonRow>
        <span style={titleStyle}>Web Back End</span>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <BackEnd />
      </IonRow>
      <IonRow>
        <span style={titleStyle}>Systems and Databases</span>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <Databases />
      </IonRow>
      <IonRow>
        <span style={titleStyle}>Languages</span>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <Languages />
      </IonRow>
      <IonRow>
        <span style={titleStyle}>Machine Learning Frameworks</span>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <ML />
      </IonRow>

      <IonRow style={rowMainStyle}></IonRow>
      <IonRow>
        <span style={titleStyle}>Other</span>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <Other />
      </IonRow>
      <IonRow>
        <span style={titleStyle}>Spoken Languages</span>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <SpokenLanguages />
      </IonRow>
    </IonGrid>
  );
};

export default Skills;
