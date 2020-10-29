import { IonImg, IonThumbnail, IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub } from "ionicons/icons";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Description from "./DescriptionFlip";

const Profile = () => {
  const display = {
    display: "flex",
    "justify-content": "space-between",
    "background-color": "#545454",
    "border-radius": "1rem",
    height: "77%",
    color: "#FFF9C0",
  };

  const LMediaQuery = useMediaQuery("(min-width: 1551px)");
  const MMediaQuery = useMediaQuery("(min-width: 1201px)");
  const SMediaQuery = useMediaQuery("(min-width: 786px)");
  const MobileMediaQuery = useMediaQuery("(min-width: 575px)");

  const mystyles = {
    container: (LMediaQuery, MMediaQuery, SMediaQuery, MobileMediaQuery) => ({
      fontFamily: "'Kadwa', serif",
      fontSize: LMediaQuery
        ? "7rem"
        : MMediaQuery
        ? "5rem"
        : SMediaQuery
        ? "3.5rem"
        : MobileMediaQuery
        ? "1.9rem"
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
      fontSize: SMediaQuery ? "3rem" : "1.2rem",
    }),
  };

  return (
    <div style={display}>
      <IonThumbnail style={{ height: "100%", width: "25%" }}>
        <IonImg src={"https://i.imgur.com/lq1p6Ll.png?1"} />
      </IonThumbnail>
      <div
        style={mystyles.container(
          LMediaQuery,
          MMediaQuery,
          SMediaQuery,
          MobileMediaQuery
        )}
      >
        <span>Daniel Nascimento</span>
        <div style={anchorDisplay.container(SMediaQuery)}>
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
