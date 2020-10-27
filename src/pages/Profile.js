import { IonImg, IonThumbnail, IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub } from "ionicons/icons";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Profile = () => {
  const display = {
    display: "flex",
    "justify-content": "space-between",
    "background-color": "#545454",
    "border-radius": "1rem",
    height: "77%",
    color: "#FFF9C0",
  };

  const GFontSize = useMediaQuery("(min-width: 1550px)");
  const MFontSize = useMediaQuery("(min-width: 1200px)");
  const SFontSize = useMediaQuery("(min-width: 770px)");

  const mystyles = {
    container: (GFontSize, MFontSize, SFontSize) => ({
      fontFamily: "'Kadwa', serif",
      fontSize: GFontSize
        ? "7rem"
        : MFontSize
        ? "4rem"
        : SFontSize
        ? "3rem"
        : "1.21rem",
      paddingRight: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    }),
  };

  const anchor = {
    color: "#FFF9C0",
    display: "flex",
    alignItems: "flex-end",
  };

  const anchorDisplay = {
    container: (SFontSize) => ({
      display: "flex",
      flexDirection: "row-reverse",
      fontSize: SFontSize ? "3rem" : "1.3rem",
    }),
  };

  return (
    <div style={display}>
      <IonThumbnail style={{ height: "100%", width: "25%" }}>
        <IonImg src={"https://i.imgur.com/lq1p6Ll.png?1"} />
      </IonThumbnail>
      <div style={mystyles.container(GFontSize, MFontSize, SFontSize)}>
        <span>Daniel Nascimento</span>
        <div style={anchorDisplay.container(SFontSize)}>
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
