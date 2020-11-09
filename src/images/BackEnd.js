import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";

import { ReactComponent as Express } from "./express.svg";

import { ReactComponent as Nodejs } from "./nodejs.svg";
import { ReactComponent as Rails } from "./rails.svg";

import { svgSize, rowMainStyle } from "./styles";

const BackEnd = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <Nodejs style={svgSize} />
        <IonCardTitle>NodeJS</IonCardTitle>
      </IonCard>
      <IonCard>
        <Express style={svgSize} />
        <IonCardTitle>Express</IonCardTitle>
      </IonCard>
      <IonCard>
        <Rails style={svgSize} />
        <IonCardTitle>Rails</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { BackEnd };
