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
    height: "84.5%",
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
      justifyContent: "start",
    }),
  };

  const h1Style = {
    container: (LMediaQuery, MMediaQuery, SMediaQuery, MobileMediaQuery) => ({
      fontSize: LMediaQuery
        ? "6rem"
        : MMediaQuery
        ? "4.5rem"
        : SMediaQuery
        ? "3.5rem"
        : MobileMediaQuery
        ? "1.5rem"
        : "1.0rem",
    }),
  };

  const h3Style = {
    container: (LMediaQuery, MMediaQuery, SMediaQuery, MobileMediaQuery) => ({
      fontSize: LMediaQuery
        ? "1.5rem"
        : MMediaQuery
        ? "3rem"
        : SMediaQuery
        ? "2rem"
        : MobileMediaQuery
        ? "1.0rem"
        : "0.7rem",
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
        <h1
          style={h1Style.container(
            LMediaQuery,
            MMediaQuery,
            SMediaQuery,
            MobileMediaQuery
          )}
        >
          Hi! I'm <span style={{ color: "#00A7AE" }}>Daniel</span>. <br></br>{" "}
          Great to see you!
        </h1>
        <h3
          style={h3Style.container(
            LMediaQuery,
            MMediaQuery,
            SMediaQuery,
            MobileMediaQuery
          )}
        >
          in coulis rerum est laborum et quale sit aut odit aut officis debitis
          aut fugit, .....
        </h3>
        <IonButton style={{ width: "25%", color: "#FFFFFF" }}>
          DOWNLOAD CV
        </IonButton>
      </div>

      <RectangleBack
        style={{
          alignSelf: "center",
        }}
      />
    </div>
  );
};

export default Profile;
