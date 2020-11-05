import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonThumbnail,
  IonCardContent,
} from "@ionic/react";
import { pin } from "ionicons/icons";
import "../../theme/slides.css";

const Education = () => {
  const labelStyle = {
    fontFamily: "'Montserrat', sans-serif",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "600",
  };

  const listStyle = {
    whiteSpace: "normal",
    padding: "1rem",
  };

  const otherCourses = (
    <div>
      <IonItem>
        <IonThumbnail slot="start">
          <img src="https://coursereport-production.imgix.net/uploads/school/logo/62/original/blacksquare-logo.jpg?w=200&h=200"></img>
        </IonThumbnail>
        <IonLabel>
          <p>BrainStation</p>
          <h3>User Interface Design Certificate</h3>
          <p>April 2020 - June 2020</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonThumbnail slot="start">
          <img src="https://media.glassdoor.com/sqll/482498/woodgreen-community-services-squarelogo-1452077478449.png"></img>
        </IonThumbnail>
        <IonLabel>
          <p>WoodGreen Services</p>
          <h3>Finance/Accounting English Language Training Program</h3>
          <p>April 2020 - June 2020</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonThumbnail slot="start">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUtM2FoMmeNdZhP8DvcOptjZK23Lb9DhHXDw&usqp=CAU"></img>
        </IonThumbnail>
        <IonLabel>
          <p>Catholic University of Brasilia - UCB</p>
          <h3>Graduate Degree in Quantitative Finance and Econometrics</h3>
          <p>September 2013 - June 2015</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonThumbnail slot="start">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg"></img>
        </IonThumbnail>
        <IonLabel>
          <p>University of Brasilia - UnB</p>
          <h3>Bachelor's Degree in Economics</h3>
          <p>September 2004 - June 2009 </p>
        </IonLabel>
      </IonItem>
    </div>
  );

  return (
    <IonGrid fixed={false}>
      <IonRow>
        <IonCard>
          <img src="https://avatars1.githubusercontent.com/u/5753105?s=200&v=4"></img>
          <IonCardHeader>
            <IonCardSubtitle>Lighthouse Labs</IonCardSubtitle>
            <IonCardTitle>Web Development Diploma Program</IonCardTitle>
            <IonCardContent>July 2020 - October 2020</IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <img src="https://coursereport-production.imgix.net/uploads/school/logo/62/original/blacksquare-logo.jpg?w=200&h=200"></img>
          <IonCardHeader>
            <IonCardSubtitle>BrainStation</IonCardSubtitle>
            <IonCardTitle>Data Science Diploma Program</IonCardTitle>
            <IonCardContent mode="md">
              October 2019 - December 2019
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUtM2FoMmeNdZhP8DvcOptjZK23Lb9DhHXDw&usqp=CAU"></img>
          <IonCardHeader>
            <IonCardSubtitle>
              Catholic University of Brasilia - UCB
            </IonCardSubtitle>
            <IonCardTitle>Master's Degree in Economics</IonCardTitle>
            <IonCardContent mode="md">
              February 2015 - March 2017
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard>{otherCourses}</IonCard>
      </IonRow>
    </IonGrid>
  );
};

export default Education;
