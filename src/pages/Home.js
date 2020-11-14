import React, { useEffect, useRef, useState } from "react";
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
  IonToolbar,
} from "@ionic/react";
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

  const topRef = useRef(null);
  const focusButtons = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  const fabButton = (
    <IonFab
      vertical="bottom"
      horizontal="end"
      slot="fixed"
      style={{ "padding-right": "11px" }}
    >
      <IonFabButton color="dark" onClick={() => focusButtons()}>
        <IonIcon icon={arrowUpCircle}></IonIcon>
      </IonFabButton>
    </IonFab>
  );

  const [scroll, setScroll] = useState("");

  const handleScroll = () => {
    const positionX = window.pageXOffset;
    const positionY = window.pageYOffset;
    console.log(positionX);
    console.log(positionY);
    setScroll(positionY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    console.log(scroll);
    console.log(handleScroll());
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
