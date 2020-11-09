import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { svgSize, rowMainStyle } from "./styles";
import { ReactComponent as NLTK } from "./nltk.svg";

const ML = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <img
          src="https://raw.githubusercontent.com/scikit-learn/scikit-learn/b3806f77895d1146e83fbfdd60c6be43d4a7c144/doc/logos/scikit-learn-logo.svg"
          style={svgSize}
          alt="Scikit-Learn"
        ></img>
        <IonCardTitle>Scikit-Learn</IonCardTitle>
      </IonCard>
      <IonCard>
        <NLTK style={svgSize} />
        <IonCardTitle>NLTK</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { ML };
