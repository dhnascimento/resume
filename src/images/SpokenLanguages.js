import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { ReactComponent as UK } from "./uk.svg";
import { ReactComponent as Brazil } from "./brazil.svg";
import { svgSize, rowMainStyle } from "./styles";

const SpokenLanguages = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <Brazil style={svgSize} />
        <IonCardTitle>Portuguese</IonCardTitle>
      </IonCard>
      <IonCard>
        <UK style={svgSize} />
        <IonCardTitle>English</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { SpokenLanguages };
