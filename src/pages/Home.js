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
import TopNav from "./TopNav";
import Profile from "./Profile";
import Slides from "./Slides";

const Home = () => {
  const MobileMediaQuery = useMediaQuery("(min-width: 575px)");

  const rowStyle = {
    container: (MobileMediaQuery) => ({
      // marginTop: MobileMediaQuery ? "-0.87vw" : "-7vw",
    }),
  };

  const gridBorder = {
    borderWidth: "5px",
    padding: "0px",
    marginLeft: "1.5px",
    marginRight: "1.5px",
    marginTop: "5px",
    marginBottom: "5px",
  };

  const colBorder = {
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "50px",
    paddingRight: "50px",
    width: "90%",
  };

  const rowBorder = {
    container: (MobileMediaQuery) => ({
      height: "31vw",
      marginTop: MobileMediaQuery ? "" : "20px",
    }),
  };

  const rowNav = {
    height: "5vw",
    borderBottom: "5px",
    display: "flex",
    flexDirection: "column",
    padding: "10x",
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
          <IonRow style={rowNav}>
            <TopNav />
          </IonRow>
          <IonRow style={rowBorder.container(MobileMediaQuery)}>
            <IonCol style={colBorder}>
              <Profile />
            </IonCol>
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
