import React from "react";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, mailOpen } from "ionicons/icons";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { animations } from "react-animation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ReactComponent as AboutPhoto } from "../../images/AboutPhoto2.svg";

const About = () => {
  const SMediaQuery = useMediaQuery("(min-width: 786px)");
  const MobileMediaQuery = useMediaQuery("(min-width: 575px)");

  const titleStyle = {
    container: (SMediaQuery, MobileMediaQuery) => ({
      fontFamily: "'Kadwa', serif",
      fontSize: SMediaQuery
        ? "xx-large"
        : MobileMediaQuery
        ? "x-large"
        : "large",
      textAlign: "center",
      backgroundColor: "#979797",
      animation: animations.popIn,
      animationDuration: "5s",
      height: "500px",
    }),
  };

  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "justify",
    paddingRight: "10px",
    paddingLeft: "10px",
    animation: animations.popIn,
    animationDuration: "4s",
  };

  const yellowColumn = {
    container: (SMediaQuery) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fac901",
      borderRight: SMediaQuery ? "5px" : "0px",
      borderBottom: SMediaQuery ? "0px" : "5px",
      marginTop: SMediaQuery ? "0px" : "0px",
    }),
  };

  const anchor = {
    color: "#00A7AE",
    display: "flex",
    alignItems: "flex-end",
  };
  const gridBorder = {
    padding: "0px",
  };

  const text = (
    <div>
      <p style={textStyle}>
        I have over 9 years of experience in the banking and finance industries.
        I started learning how to code with data analysis in mind, which lead me
        to improve my skills and learn more about data visualization,
        manipulation and machine learning.
      </p>
      <p style={textStyle}>
        The innate problem-solving nature of coding and the almost endless
        possibilities of what one can accomplish with it, ranging from a
        groundbreaking app to a simple tool visualization tool, compelled me to
        keep on improving my skills and also dive into development.
      </p>
      <p style={textStyle}>
        Do you want to know more about me, my projects or do some networking?
        Please send me an email or add me on LinkedIn!
      </p>
      <div style={{ display: "flex" }}>
        <a
          href="http://linkedin.com/in/danielhnascimento"
          alt="Linkedin"
          style={anchor}
        >
          <IonIcon icon={logoLinkedin} />
        </a>
        <a href="https://github.com/dhnascimento" alt="Github" style={anchor}>
          <IonIcon icon={logoGithub} />
        </a>
        <a href="malito:danielhn@gmail.com" alt="Email" style={anchor}>
          <IonIcon icon={mailOpen} />
        </a>
      </div>
    </div>
  );

  const RegularGrid = (
    <IonRow>
      <IonRow>
        <AboutPhoto />
        <IonCol>{text}</IonCol>
      </IonRow>
    </IonRow>
  );

  const SmallGrid = (
    <div>
      <AboutPhoto />
      <IonCol>{text}</IonCol>
    </div>
  );

  return (
    <div style={titleStyle}>
      <h2>About me</h2>
      <IonGrid fixed={false} style={gridBorder}>
        {SMediaQuery ? RegularGrid : SmallGrid}
      </IonGrid>
    </div>
  );
};

export default About;
