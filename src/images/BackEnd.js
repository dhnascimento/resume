import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";

import { ReactComponent as Express } from "./express.svg";

import { ReactComponent as Nodejs } from "./nodejs.svg";
import { ReactComponent as Rails } from "./rails.svg";

const rowMainStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const BackEnd = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <Nodejs height="200px" width="200px" />
        <IonCardTitle>NodeJS</IonCardTitle>
      </IonCard>
      <IonCard>
        <Express height="200px" width="200px" />
        <IonCardTitle>Express</IonCardTitle>
      </IonCard>
      <IonCard>
        <Rails height="200px" width="200px" />
        <IonCardTitle>Rails</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { BackEnd };
