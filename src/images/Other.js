import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { ReactComponent as Excel } from "./excel.svg";
import { ReactComponent as Figma } from "./figma.svg";
import { ReactComponent as Tableau } from "./tableau.svg";

const rowMainStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const Other = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <Excel height="200px" width="200px" />
        <IonCardTitle>Excel</IonCardTitle>
      </IonCard>
      <IonCard>
        <Figma height="200px" width="200px" />
        <IonCardTitle>Figma</IonCardTitle>
      </IonCard>
      <IonCard>
        <Tableau height="200px" width="200px" />
        <IonCardTitle>Tableau</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { Other };
