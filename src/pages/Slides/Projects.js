import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import { logoGithub, logoFigma, globe, logoTableau } from "ionicons/icons";
import "../../theme/projects.css";

const Projects = () => {
  const cardStyle = {
    fontFamily: "'Montserrat', sans-serif",
    width: "300px",
    height: "415px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const cardHeader = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  };

  const rowMainStyle = {
    alignItems: "center",
    justifyContent: "center",
  };

  const cardContent = {
    display: "flex",
    flexDirection: "column",
  };

  const anchor = {
    fontSize: "3rem",
    color: "darkgray",
  };

  const icons = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  return (
    <IonGrid fixed={false}>
      <IonRow style={rowMainStyle}>
        <IonCard style={cardStyle}>
          <img
            src="https://github.com/barbmich/luckypot/raw/master/app/doc/Dashboard.png"
            alt="Luckypot"
          ></img>
          <IonCardHeader style={cardHeader}>
            <IonCardTitle>Luckypot</IonCardTitle>
            <IonCardSubtitle>
              Nodejs, Reactjs, Ajax, Express, PostgreSQL
            </IonCardSubtitle>
            <IonCardContent style={cardContent}>
              A solution for organizing potlucks. It allows users to create
              their own events, invite guests, search for recipes and send
              messages to other participants.
            </IonCardContent>
          </IonCardHeader>
          <div style={icons}>
            <a style={anchor} href="https://github.com/barbmich/luckypot">
              <IonIcon icon={logoGithub} />
            </a>
            <a style={anchor} href="https://luckypot-app.herokuapp.com/home">
              <IonIcon icon={globe} />
            </a>
          </div>
        </IonCard>

        <IonCard style={cardStyle}>
          <img
            src="https://github.com/dhnascimento/scheduler/raw/master/docs/scheduler2.png"
            alt="Interview Scheduler"
          ></img>
          <IonCardHeader style={cardHeader}>
            <IonCardTitle>Interview Scheduler</IonCardTitle>
            <IonCardSubtitle>
              Nodejs, Reactjs, Express, Jest, Ajax
            </IonCardSubtitle>
            <IonCardContent>
              A scheduler that allows the user to create, edit and delete
              interviews.
            </IonCardContent>
          </IonCardHeader>
          <div style={icons}>
            <a style={anchor} href="https://github.com/dhnascimento/scheduler">
              <IonIcon icon={logoGithub} />
            </a>
          </div>
        </IonCard>

        <IonCard style={cardStyle}>
          <img
            src="https://github.com/dcoughlin12/buyandsell/raw/master/doc/goodbuy1.png"
            alt="GoodBuy"
          ></img>
          <IonCardHeader style={cardHeader}>
            <IonCardTitle>GoodBuy</IonCardTitle>
            <IonCardSubtitle>
              Nodejs, CSS, EJS, Bootstrap, PostgreSQL
            </IonCardSubtitle>
            <IonCardContent>
              A full-stack web application that acts as a middleman between
              buyers and sellers of any kind of product.
            </IonCardContent>
          </IonCardHeader>
          <div style={icons}>
            <a style={anchor} href="https://github.com/dcoughlin12/buyandsell">
              <IonIcon icon={logoGithub} />
            </a>
            <a style={anchor} href="https://goodbuy-app.herokuapp.com/">
              <IonIcon icon={globe} />
            </a>
          </div>
        </IonCard>
      </IonRow>

      <IonRow style={rowMainStyle}>
        <IonCard style={cardStyle}>
          <img
            src="https://github.com/dhnascimento/tweeter/raw/master/docs/tweets.png"
            alt="Tweeter"
          ></img>
          <IonCardHeader>
            <IonCardTitle>Tweeter</IonCardTitle>
            <IonCardSubtitle>
              Nodejs, CSS, EJS, jQuery, Mocha, Chai
            </IonCardSubtitle>
            <IonCardContent>A single-page Twitter clone.</IonCardContent>
          </IonCardHeader>
          <div style={icons}>
            <a style={anchor} href="https://github.com/dhnascimento/tweeter">
              <IonIcon icon={logoGithub} />
            </a>
          </div>
        </IonCard>

        <IonCard style={cardStyle}>
          <img
            src="https://github.com/dhnascimento/tinyapp/raw/master/docs/url1.png"
            alt="TinyApp"
          ></img>
          <IonCardHeader>
            <IonCardTitle>TinyApp</IonCardTitle>
            <IonCardSubtitle>
              Nodejs, Express, EJS, bcrypt, cookie-session
            </IonCardSubtitle>
            <IonCardContent>
              A full-stack web application that allows users to shorten long
              URLs.
            </IonCardContent>
          </IonCardHeader>
          <div style={icons}>
            <a style={anchor} href="https://github.com/dhnascimento/tinyapp">
              <IonIcon icon={logoGithub} />
            </a>
          </div>
        </IonCard>

        <IonCard style={cardStyle}>
          <img src="https://i.imgur.com/CLNblhK.png" alt="Will be Fired?"></img>
          <IonCardHeader>
            <IonCardTitle>Will the Manager be Fired?</IonCardTitle>
            <IonCardSubtitle>
              Python, Jupyter Notebook, NLTK, Scikit-Learn
            </IonCardSubtitle>
            <IonCardContent>
              Supervised machine learning NLP text classification model.
            </IonCardContent>
          </IonCardHeader>
          <div style={icons}>
            <a
              style={anchor}
              href="https://github.com/dhnascimento/Predicting-Management-Firings-for-the-EPL-Based-on-News-Articles"
            >
              <IonIcon icon={logoGithub} />
            </a>
            <a style={anchor} href="https://willbefired.herokuapp.com/">
              <IonIcon icon={globe} />
            </a>
          </div>
        </IonCard>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <IonCard style={cardStyle}>
          <img src="https://i.imgur.com/BKqiSFd.png" alt="Scattergories"></img>
          <IonCardHeader>
            <IonCardTitle>Scattergories</IonCardTitle>
            <IonCardSubtitle>Figma</IonCardSubtitle>
            <IonCardContent>
              Re-Design of{" "}
              <a href="https://scattergoriesonline.net/">Scattergories.net</a>.
            </IonCardContent>
          </IonCardHeader>
          <div style={icons}>
            <a
              style={anchor}
              href="https://www.figma.com/proto/omfpl9ZmN574LdIwaxJMoP/Scattergories_05_27?node-id=151%3A2883&scaling=min-zoom"
            >
              <IonIcon icon={logoFigma} />
            </a>
          </div>
        </IonCard>
        <IonCard style={cardStyle}>
          <img
            style={{ height: "39%" }}
            src="https://i.imgur.com/BBuWakK.png"
            alt="Average Attendances"
          ></img>
          <IonCardHeader>
            <IonCardTitle>Average Attendences in Football Leagues</IonCardTitle>
            <IonCardSubtitle>Tableau</IonCardSubtitle>
            <IonCardContent>
              Interactive map visualization made with data from
              <a href="http://www.european-football-statistics.co.uk/attn.htm">
                European Football Statistics
              </a>
              .
            </IonCardContent>
          </IonCardHeader>
          <div style={icons}>
            <a
              style={anchor}
              href="https://public.tableau.com/profile/daniel.h.nascimento#!/vizhome/AverageAttendencesinEuropeanFootballLeagues201718/AverageAttendencesinEurope-201718"
            >
              <IonIcon icon={logoTableau} />
            </a>
          </div>
        </IonCard>
      </IonRow>
    </IonGrid>
  );
};

export default Projects;
