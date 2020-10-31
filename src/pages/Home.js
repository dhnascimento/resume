import { IonContent, IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
import Profile from "./Profile";
import Description from "./DescriptionFlip";
import About from "./About";
import Slides from "./Slides";
import { useMediaQuery } from "../hooks/useMediaQuery";

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
    margin: "10px",
  };

  const colBorder = {
    padding: "0px",
  };

  const rowBorder = {
    height: "19vw",
    borderColor: "#000000",
    borderBottom: "5px solid",
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed={false} style={gridBorder}>
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
