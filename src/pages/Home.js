import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import Profile from "./Profile";
import Description from "./DescriptionFlip";
import About from "./About";

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
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
