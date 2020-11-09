import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { ReactComponent as Excel } from "./excel.svg";
import { ReactComponent as Figma } from "./figma.svg";
import { ReactComponent as Tableau } from "./tableau.svg";
import { svgSize, rowMainStyle } from "./styles";

const Other = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <Excel style={svgSize} />
        <IonCardTitle>Excel</IonCardTitle>
      </IonCard>
      <IonCard>
        <Figma style={svgSize} />
        <IonCardTitle>Figma</IonCardTitle>
      </IonCard>
      <IonCard>
        <Tableau style={svgSize} />
        <IonCardTitle>Tableau</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { Other };
