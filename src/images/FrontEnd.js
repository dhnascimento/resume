import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { ReactComponent as Bootstrap } from "./bootstrap.svg";
import { ReactComponent as CSS } from "./css.svg";
import { ReactComponent as HTML } from "./html.svg";
import { ReactComponent as JS } from "./js.svg";
import { ReactComponent as ReactIcon } from "./react.svg";
import { ReactComponent as Sass } from "./sass.svg";

const rowMainStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const FrontEnd = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <HTML height="200px" width="200px" />
        <IonCardTitle>HTML</IonCardTitle>
      </IonCard>
      <IonCard>
        <CSS height="200px" width="200px" />
        <IonCardTitle>CSS</IonCardTitle>
      </IonCard>
      <IonCard>
        <ReactIcon height="200px" width="200px" />
        <IonCardTitle>React</IonCardTitle>
      </IonCard>
      <IonCard>
        <Bootstrap height="200px" width="200px" />
        <IonCardTitle>Bootstrap</IonCardTitle>
      </IonCard>
      <IonCard>
        <Sass height="200px" width="200px" />
        <IonCardTitle>Sass</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { FrontEnd };
