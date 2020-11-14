import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCardContent,
} from "@ionic/react";
import "../../theme/projects.css";

const Projects = () => {
  const cardStyle = {
    fontFamily: "'Montserrat', sans-serif",
    width: "300px",
    height: "380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };

  const rowMainStyle = {
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <IonGrid fixed={false}>
      <IonRow style={rowMainStyle}>
        <IonCard style={cardStyle}>
          <a href="https://github.com/barbmich/luckypot">
            <img src="https://github.com/barbmich/luckypot/raw/master/app/doc/Dashboard.png"></img>
          </a>
          <IonCardHeader>
            <IonCardTitle>Luckypot</IonCardTitle>
            <IonCardSubtitle>
              Nodejs, Reactjs, Ajax, Express, PostgreSQL
            </IonCardSubtitle>
            <IonCardContent>
              An innovative solution for organizing potlucks. It allows users to
              create their own events, invite guests, search for recipes and
              send messages to other participants.
            </IonCardContent>
          </IonCardHeader>
        </IonCard>

        <IonCard style={cardStyle}>
          <a href="https://github.com/dhnascimento/scheduler">
            <img src="https://github.com/dhnascimento/scheduler/raw/master/docs/scheduler2.png"></img>
          </a>
          <IonCardHeader>
            <IonCardTitle>Interview Scheduler</IonCardTitle>
            <IonCardSubtitle>
              Nodejs, Reactjs, Express, Jest, Ajax
            </IonCardSubtitle>
            <IonCardContent>
              A scheduler that allows the user to create, edit and delete
              interviews.
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard style={cardStyle}>
          <a href="https://github.com/dcoughlin12/buyandsell">
            <img src="https://github.com/dcoughlin12/buyandsell/raw/master/doc/goodbuy1.png"></img>
          </a>
          <IonCardHeader>
            <IonCardTitle>GoodBuy</IonCardTitle>
            <IonCardSubtitle>
              Nodejs, CSS, EJS, Bootstrap, PostgreSQL
            </IonCardSubtitle>
            <IonCardContent>
              A full-stack web application that acts as a middleman between
              buyers and sellers of any kind of product.
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonRow>
      <IonRow style={rowMainStyle}>
        <IonCard style={cardStyle}>
          <a href="https://github.com/dhnascimento/tweeter">
            <img src="https://github.com/dhnascimento/tweeter/raw/master/docs/tweets.png"></img>
          </a>
          <IonCardHeader>
            <IonCardTitle>Tweeter</IonCardTitle>
            <IonCardSubtitle>
              Nodejs, CSS, EJS, jQuery, Mocha, Chai
            </IonCardSubtitle>
            <IonCardContent>A single-page Twitter clone.</IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard style={cardStyle}>
          <a href="https://github.com/dhnascimento/tinyapp">
            <img src="https://github.com/dhnascimento/tinyapp/raw/master/docs/url1.png"></img>
          </a>
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
        </IonCard>
        <IonCard style={cardStyle}>
          <a href="https://github.com/dhnascimento/Predicting-Management-Firings-for-the-EPL-Based-on-News-Articles">
            <img src="https://i.imgur.com/CLNblhK.png"></img>
          </a>
          <IonCardHeader>
            <IonCardTitle>
              Management Firings in the EPL Based on News Articles
            </IonCardTitle>
            <IonCardSubtitle>
              Python Jupyter Notebook, NLTK, Scikit-Learn
            </IonCardSubtitle>
            <IonCardContent>
              Supervised machine learning NLP text classification model.
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonRow>
    </IonGrid>
  );
};

export default Projects;
