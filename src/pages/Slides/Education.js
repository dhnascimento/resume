import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonLabel,
  IonGrid,
  IonRow,
  IonItem,
  IonThumbnail,
  IonCardContent,
} from "@ionic/react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "../../theme/slides.css";

const Education = () => {
  const MobileMediaQuery = useMediaQuery("(min-width: 575px)");

  const labelStyle = {
    fontFamily: "'Montserrat', sans-serif",
    whiteSpace: "normal",
  };

  const cardStyle = {
    fontFamily: "'Montserrat', sans-serif",
    width: "275px",
  };

  const rowMainStyle = {
    alignItems: "center",
    justifyContent: "center",
  };

  const rowOtherStyle = {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };

  const titleStyle = {
    fontFamily: "'Kadwa', serif",
    backgroundColor: "#45454e",
    color: "#FFFFFF",
    width: "100%",
  };

  const otherCardStyle = {
    container: (MobileMediaQuery) => ({
      width: MobileMediaQuery ? "50%" : "75%",
    }),
  };

  const otherDegrees = (
    <div>
      <IonCardContent style={titleStyle}>Other Degrees</IonCardContent>
      <IonItem>
        <IonThumbnail slot="start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUtM2FoMmeNdZhP8DvcOptjZK23Lb9DhHXDw&usqp=CAU"
            alt="UCB"
          ></img>
        </IonThumbnail>
        <IonLabel style={labelStyle}>
          <p>Catholic University of Brasilia - UCB</p>
          <h3>Quantitative Finance and Econometrics</h3>
          <p>September 2013 - June 2015</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonThumbnail slot="start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg"
            alt="UNBs"
          ></img>
        </IonThumbnail>
        <IonLabel style={labelStyle}>
          <p>University of Brasilia - UnB</p>
          <h3>Bachelor's Degree in Economics</h3>
          <p>September 2004 - June 2009 </p>
        </IonLabel>
      </IonItem>
    </div>
  );

  const certificates = (
    <div>
      <IonCardContent style={titleStyle}>Certificates</IonCardContent>
      <IonItem>
        <IonThumbnail slot="start">
          <img
            src="https://coursereport-production.imgix.net/uploads/school/logo/62/original/blacksquare-logo.jpg?w=200&h=200"
            alt="BrainStation"
          ></img>
        </IonThumbnail>
        <IonLabel style={labelStyle}>
          <p>BrainStation</p>
          <h3>User Interface Design Certificate</h3>
          <p>April - June 2020</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonThumbnail slot="start">
          <img
            src="https://media.glassdoor.com/sqll/482498/woodgreen-community-services-squarelogo-1452077478449.png"
            alt="WoodGreen"
          ></img>
        </IonThumbnail>
        <IonLabel style={labelStyle}>
          <p>WoodGreen Services</p>
          <h3>English Language Training Program</h3>
          <p>April - June 2020</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonThumbnail slot="start">
          <a href="https://basno.com/0v135qmi">
            <img
              src="https://media-exp1.licdn.com/dms/image/C510BAQFnaGYkNVvCbw/company-logo_100_100/0?e=1613606400&v=beta&t=reRW5zsVpg_u6RF04wxfvMJgRZOkCt5fqZoKMLs6Sa8"
              alt="CFA"
            ></img>
          </a>
        </IonThumbnail>
        <IonLabel style={labelStyle}>
          <p>CFA</p>
          <h3>Investment Foundations Certificate</h3>
          <p>September 2019</p>
        </IonLabel>
      </IonItem>
    </div>
  );

  return (
    <IonGrid fixed={false}>
      <IonRow style={rowMainStyle}>
        <IonCard style={cardStyle}>
          <img
            src="https://avatars1.githubusercontent.com/u/5753105?s=200&v=4"
            alt="LHL"
          ></img>
          <IonCardHeader>
            <IonCardSubtitle>Lighthouse Labs</IonCardSubtitle>
            <IonCardTitle>Web Development Diploma Program</IonCardTitle>
            <IonCardContent>July - October 2020</IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard style={cardStyle}>
          <img
            src="https://coursereport-production.imgix.net/uploads/school/logo/62/original/blacksquare-logo.jpg?w=200&h=200"
            alt="BrainStation"
          ></img>
          <IonCardHeader>
            <IonCardSubtitle>BrainStation</IonCardSubtitle>
            <IonCardTitle>Data Science Diploma Program</IonCardTitle>
            <IonCardContent mode="md">October - December 2019</IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/C560BAQF8B9p8hikNZA/company-logo_200_200/0?e=2159024400&v=beta&t=gUL4Qj9wnd-czeu6bsYaFQSG56EHFDUHQd0s42ptQSo"
            alt="UCB"
          ></img>
          <IonCardHeader>
            <IonCardSubtitle>Catholic University of Brasilia</IonCardSubtitle>
            <IonCardTitle>Master's Degree in Economics</IonCardTitle>
            <IonCardContent mode="md">
              February 2015 - March 2017
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonRow>
      <IonRow style={rowOtherStyle}>
        <IonCard style={otherCardStyle.container(MobileMediaQuery)}>
          {otherDegrees}
        </IonCard>
        <IonCard style={otherCardStyle.container(MobileMediaQuery)}>
          {certificates}
        </IonCard>
      </IonRow>
    </IonGrid>
  );
};

export default Education;
