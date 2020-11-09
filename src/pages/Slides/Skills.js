import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonLabel,
  IonGrid,
  IonRow,
  IonItem,
  IonThumbnail,
  IonCardContent,
  IonTitle,
} from "@ionic/react";
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

  return (
    <IonGrid fixed={false} style={gridStyle}>
      <IonRow>
        <IonTitle>Web Front End</IonTitle>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <FrontEnd />
      </IonRow>

      <IonRow>
        <IonTitle>Web Back End</IonTitle>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <BackEnd />
      </IonRow>
      <IonRow>
        <IonTitle>Systems and Databases</IonTitle>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <Databases />
      </IonRow>
      <IonRow>
        <IonTitle>Languages</IonTitle>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <Languages />
      </IonRow>
      <IonRow>
        <IonTitle>Machine Learning Frameworks</IonTitle>
      </IonRow>

      <IonRow style={rowMainStyle}></IonRow>
      <IonRow>
        <IonTitle>Other</IonTitle>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <Other />
      </IonRow>
      <IonRow>
        <IonTitle>Spoken Languages</IonTitle>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <SpokenLanguages />
      </IonRow>
    </IonGrid>
  );
};

export default Skills;
