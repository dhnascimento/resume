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
      marginTop: MobileMediaQuery ? "-0.87vw" : "-7vw",
    }),
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed={false}>
          <IonRow style={{ height: "19vw" }}>
            <IonCol>
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
