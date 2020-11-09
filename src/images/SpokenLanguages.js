import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { ReactComponent as UK } from "./uk.svg";
import { ReactComponent as Brazil } from "./brazil.svg";

const rowMainStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const SpokenLanguages = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <Brazil height="200px" width="200px" />
        <IonCardTitle>Portuguese</IonCardTitle>
      </IonCard>
      <IonCard>
        <UK height="200px" width="200px" />
        <IonCardTitle>English</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { SpokenLanguages };
