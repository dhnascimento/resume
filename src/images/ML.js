import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
// import { ReactComponent as Scikit } from "./scikit-learn-logo.svg";
import { ReactComponent as NLTK } from "./nltk.svg";

const rowMainStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const ML = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <img
          src="https://raw.githubusercontent.com/scikit-learn/scikit-learn/b3806f77895d1146e83fbfdd60c6be43d4a7c144/doc/logos/scikit-learn-logo.svg"
          style={{ height: "200px", width: "200px" }}
        ></img>
        <IonCardTitle>Scikit-Learn</IonCardTitle>
      </IonCard>
      <IonCard>
        <NLTK height="200px" width="200px" />
        <IonCardTitle>NLTK</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { ML };
