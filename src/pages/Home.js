import { IonContent, IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
import Profile from "./Profile";
import Description from "./DescriptionFlip";
import About from "./About";
import Slides from "./Slides";

const Home = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed={false}>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <Profile />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Description />
            </IonCol>
          </IonRow>
          <IonRow>
            <About />
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <Slides />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
