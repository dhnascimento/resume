import React from "react";
import { IonGrid, IonRow, IonTitle } from "@ionic/react";
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
  };

  const titleStyle = {
    backgroundColor: "#45454e",
    color: "#FFFFFF",
  };

  return (
    <IonGrid fixed={false} style={gridStyle}>
      <IonRow>
        <IonTitle style={titleStyle}>Web Front End</IonTitle>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <FrontEnd />
      </IonRow>

      <IonRow>
        <IonTitle style={titleStyle}>Web Back End</IonTitle>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <BackEnd />
      </IonRow>
      <IonRow>
        <IonTitle style={titleStyle}>Systems and Databases</IonTitle>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <Databases />
      </IonRow>
      <IonRow>
        <IonTitle style={titleStyle}>Languages</IonTitle>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <Languages />
      </IonRow>
      <IonRow>
        <IonTitle style={titleStyle}>Machine Learning Frameworks</IonTitle>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <ML />
      </IonRow>

      <IonRow style={rowMainStyle}></IonRow>
      <IonRow>
        <IonTitle style={titleStyle}>Other</IonTitle>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <Other />
      </IonRow>
      <IonRow>
        <IonTitle style={titleStyle}>Spoken Languages</IonTitle>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <SpokenLanguages />
      </IonRow>
    </IonGrid>
  );
};

export default Skills;
