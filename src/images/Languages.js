import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { ReactComponent as Python } from "./python.svg";
import { ReactComponent as Ruby } from "./ruby.svg";
import { ReactComponent as JS } from "./js.svg";

const rowMainStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const Languages = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <JS height="200px" width="200px" />
        <IonCardTitle>JavaScript</IonCardTitle>
      </IonCard>
      <IonCard>
        <Ruby height="200px" width="200px" />
        <IonCardTitle>Ruby</IonCardTitle>
      </IonCard>
      <IonCard>
        <Python height="200px" width="200px" />
        <IonCardTitle>Python</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { Languages };
