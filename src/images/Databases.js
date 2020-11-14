import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { ReactComponent as MySQL } from "./mysql.svg";
import { ReactComponent as PostgreSQL } from "./postgres.svg";
import { ReactComponent as MongoDB } from "./mongodb.svg";
import { ReactComponent as Github } from "./github.svg";
import { svgSize, rowMainStyle } from "./styles";

const Databases = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <PostgreSQL style={svgSize} />
        <IonCardTitle>PostgreSQL</IonCardTitle>
      </IonCard>
      <IonCard>
        <MySQL style={svgSize} />
        <IonCardTitle>MySQL</IonCardTitle>
      </IonCard>
      <IonCard>
        <MongoDB style={svgSize} />
        <IonCardTitle>MongoDB</IonCardTitle>
      </IonCard>
      <IonCard>
        <Github style={svgSize} />
        <IonCardTitle>Github</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { Databases };
