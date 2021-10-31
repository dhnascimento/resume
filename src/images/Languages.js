import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { ReactComponent as Python } from "./python.svg";
import { ReactComponent as Ruby } from "./ruby.svg";
import { ReactComponent as JS } from "./js.svg";
import {ReactComponent as PHP} from "./php-logo.svg";
import { svgSize, rowMainStyle } from "./styles";

const Languages = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <JS style={svgSize} />
        <IonCardTitle>JavaScript</IonCardTitle>
      </IonCard>
      <IonCard>
        <PHP style={svgSize} />
        <IonCardTitle>PHP</IonCardTitle>
      </IonCard>
      <IonCard>
        <Python style={svgSize} />
        <IonCardTitle>Python</IonCardTitle>
      </IonCard>
      <IonCard>
        <Ruby style={svgSize} />
        <IonCardTitle>Ruby</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { Languages };
