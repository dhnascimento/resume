import React, { useRef } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { animations } from "react-animation";
import { arrowUpCircle } from "ionicons/icons";
import Profile from "./Profile";
import About from "./About";
import Slides from "./Slides";

const Home = () => {
  const MobileMediaQuery = useMediaQuery("(min-width: 575px)");

  const rowStyle = {
    container: (MobileMediaQuery) => ({
      // marginTop: MobileMediaQuery ? "-0.87vw" : "-7vw",
    }),
  };

  const gridBorder = {
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: "5px",
    padding: "0px",
    marginLeft: "1.5px",
    marginRight: "1.5px",
    marginTop: "5px",
    marginBottom: "5px",
  };

  const colBorder = {
    padding: "0px",
  };

  const rowBorder = {
    height: "19vw",
    borderColor: "#000000",
    borderBottom: "5px solid",
  };

  const buttonStyle = {
    paddingRight: "11px",
    animation: animations.fadeIn,
    animationDuration: "4s",
  };

  const topRef = useRef(null);

  const focusButtons = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  const fabButton = (
    <IonFab vertical="bottom" horizontal="end" slot="fixed" style={buttonStyle}>
      <IonFabButton color="dark" onClick={() => focusButtons()}>
        <IonIcon icon={arrowUpCircle}></IonIcon>
      </IonFabButton>
    </IonFab>
  );

  return (
    <IonPage>
      <IonContent>
        {fabButton}
        <IonGrid fixed={false} style={gridBorder} ref={topRef}>
          <IonRow style={rowBorder}>
            <IonCol style={colBorder}>
              <Profile />
            </IonCol>
          </IonRow>
          <IonRow style={rowStyle.container(MobileMediaQuery)}>
            <About />
          </IonRow>
          <IonRow>
            <Slides />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
