import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonThumbnail,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "../theme/description.css";

const Description = () => {
  return (
    <div className="scene">
      <div className="card">
        <div className="face front">FRONT</div>
        <div className="face back">BACK</div>
      </div>
    </div>
  );
};

export default Description;
