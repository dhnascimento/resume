import React from "react";
import { IonCard, IonCardTitle, IonRow, IonTitle } from "@ionic/react";
import { ReactComponent as Bootstrap } from "./bootstrap.svg";
import { ReactComponent as CSS } from "./css.svg";
import { ReactComponent as HTML } from "./html.svg";
import { ReactComponent as ReactIcon } from "./react.svg";
import { ReactComponent as Sass } from "./sass.svg";
import { svgSize, rowMainStyle } from "./styles";

const FrontEnd = () => {
  const titleStyle = {
    backgroundColor: "#45454e",
    color: "#FFFFFF",
  };
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <HTML style={svgSize} />
        <IonCardTitle>HTML</IonCardTitle>
      </IonCard>
      <IonCard>
        <CSS style={svgSize} />
        <IonCardTitle>CSS</IonCardTitle>
      </IonCard>
      <IonCard>
        <ReactIcon style={svgSize} />
        <IonCardTitle>React</IonCardTitle>
      </IonCard>
      <IonCard>
        <Bootstrap style={svgSize} />
        <IonCardTitle>Bootstrap</IonCardTitle>
      </IonCard>
      <IonCard>
        <Sass style={svgSize} />
        <IonCardTitle>Sass</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { FrontEnd };
