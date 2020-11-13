import { IonImg, IonThumbnail, IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, mailOpen } from "ionicons/icons";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import "../theme/description.css";

const Profile = () => {
  const display = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#225095",
    height: "81.5%",
    color: "#FFFFFF",
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
    color: "#FFFFFF",
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
      <IonThumbnail
        style={{
          height: "100%",
          width: "25%",
          "border-right": "5px solid #000000",
        }}
      >
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
        {/* <div className="scene">
          <div className="card">
            <div className="face1 front">FRONT</div>
            <div className="face1 back">BACK</div>
          </div>
        </div> */}
        <div style={anchorDisplay.container(SMediaQuery)}>
          <a
            href="http://linkedin.com/in/danielhnascimento"
            alt="Linkedin"
            style={anchor}
          >
            <IonIcon icon={logoLinkedin} />
          </a>
          <a href="https://github.com/dhnascimento" alt="Github" style={anchor}>
            <IonIcon icon={logoGithub} />
          </a>
          <a href="malito:danielhn@gmail.com" alt="Email" style={anchor}>
            <IonIcon icon={mailOpen} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
