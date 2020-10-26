import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonThumbnail,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import { logoLinkedin, logoGithub } from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";
import Description from "./DescriptionFlip";

const Profile = () => {
  const display = {
    display: "flex",
    "justify-content": "space-between",
    "background-color": "#545454",
    "border-radius": "1rem",
    height: "80%",
    color: "#FFF9C0",
  };

  const mystyles = {
    "font-family": "'Kadwa', serif",
    "font-size": "7rem",
    "padding-right": "1rem",
  };

  const anchor = {
    color: "#FFF9C0",
    display: "flex",
    "align-items": "flex-end",
  };

  const anchorDisplay = {
    display: "flex",
    "flex-direction": "row-reverse",
  };

  return (
    <div style={display}>
      <IonThumbnail style={{ height: "100%", width: "25%" }}>
        <IonImg src={"https://i.imgur.com/lq1p6Ll.png?1"} />
      </IonThumbnail>
      <div style={mystyles}>
        <span>Daniel Nascimento</span>
        <div style={anchorDisplay}>
          <a href="http://linkedin.com/in/danielhnascimento" style={anchor}>
            <IonIcon icon={logoLinkedin} />
          </a>
          <a href="https://github.com/dhnascimento" style={anchor}>
            <IonIcon icon={logoGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
