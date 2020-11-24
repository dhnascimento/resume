import React from "react";
import { IonThumbnail, IonButton } from "@ionic/react";
import { animations } from "react-animation";
import { useMediaQuery } from "../hooks/useMediaQuery";
import "../theme/description.css";
import { ReactComponent as RectangleBack } from "../images/BackgroundPhoto.svg";

const Profile = () => {
  const display = {
    animation: animations.fadeIn,
    animationDuration: "3.5s",
    display: "flex",
    justifyContent: "space-between",
    height: "81.5%",
    color: "#333333",
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

  return (
    <div style={display}>
      <div
        style={mystyles.container(
          LMediaQuery,
          MMediaQuery,
          SMediaQuery,
          MobileMediaQuery
        )}
      >
        <div>
          <h1>Hi! I'm Daniel</h1>
          <h1>Great to see you!</h1>
          <h3>
            in coulis rerum est laborum et quale sit aut odit aut officis
            debitis aut fugit, .....
          </h3>
        </div>
      </div>
      <IonThumbnail
        style={{
          height: "100%",
          width: "100%",
          "border-right": "5px",
        }}
      >
        <RectangleBack
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </IonThumbnail>
    </div>
  );
};

export default Profile;
