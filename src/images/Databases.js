import React from "react";
import { IonCard, IonCardTitle, IonRow } from "@ionic/react";
import { ReactComponent as MySQL } from "./mysql.svg";
import { ReactComponent as PostgreSQL } from "./postgres.svg";
import { ReactComponent as MongoDB } from "./mongodb.svg";
import { ReactComponent as Git } from "./git.svg";
import { ReactComponent as Github } from "./github.svg";

const rowMainStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const Databases = () => {
  return (
    <IonRow style={rowMainStyle}>
      <IonCard>
        <PostgreSQL height="200px" width="200px" />
        <IonCardTitle>PostgreSQL</IonCardTitle>
      </IonCard>
      <IonCard>
        <MySQL height="200px" width="200px" />
        <IonCardTitle>MySQL</IonCardTitle>
      </IonCard>
      <IonCard>
        <MongoDB height="200px" width="200px" />
        <IonCardTitle>MongoDB</IonCardTitle>
      </IonCard>
      <IonCard>
        <Git height="200px" width="200px" />
        <IonCardTitle>Git</IonCardTitle>
      </IonCard>
      <IonCard>
        <Github height="200px" width="200px" />
        <IonCardTitle>Git</IonCardTitle>
      </IonCard>
    </IonRow>
  );
};

export { Databases };
