import { IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

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
      backgroundColor: "#fac901",
    }),
  };

  const titleStyle2 = {
    container: (SMediaQuery, MobileMediaQuery) => ({
      fontFamily: "'Kadwa', serif",
      fontSize: SMediaQuery
        ? "xx-large"
        : MobileMediaQuery
        ? "x-large"
        : "large",
      textAlign: "center",
      backgroundColor: "#dd0100",
    }),
  };

  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "justify",
    paddingRight: "10px",
    paddingLeft: "10px",
  };

  const yellowColumn = {
    container: (SMediaQuery) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fac901",
      borderRight: SMediaQuery ? "5px solid #000000" : "0px solid #000000",
      borderBottom: SMediaQuery ? "0px solid #000000" : "5px solid #000000",
      marginTop: SMediaQuery ? "0px" : "0px",
    }),
  };

  const redColumn = {
    container: (SMediaQuery) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#FFFFFF",
      backgroundColor: "#dd0100",
      borderLeft: SMediaQuery ? "5px solid #000000" : "0px solid #000000",
      borderBottom: SMediaQuery ? "0px solid #000000" : "5px solid #000000",
      borderTop: "5px solid #000000",
      marginTop: SMediaQuery ? "0px" : "0px",
    }),
  };

  const gridStyle = {
    borderColor: "#000000",
    // height: "500250px",
  };

  const gridBorder = {
    padding: "0px",
  };

  const colBottom = {
    borderTop: "5px solid #000000",
  };

  const listStyle = {
    whiteSpace: "normal",
    fontFamily: "'Montserrat', sans-serif",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const title = (
    <div style={titleStyle.container(SMediaQuery, MobileMediaQuery)}>
      About me
    </div>
  );

  const title2 = (
    <div style={titleStyle2.container(SMediaQuery, MobileMediaQuery)}>
      Achievements
    </div>
  );

  const text = (
    <div>
      <p style={textStyle}>
        I have over 9 years of experience in the banking and finance industries.
        I started learning how to code with data analysis in mind, which lead me
        to improve my skills and learn more about data visualization,
        manipulation and machine learning. The innate problem-solving nature of
        coding and the almost endless possibilities of what one can accomplish
        with it, ranging from a groundbreaking app to a simple tool
        visualization tool, compelled me to keep on improving my skills and also
        dive into development.
      </p>
      <p style={textStyle}>
        Do you want to know more about me, my projects or do some networking?
        Please send me an email or add me on LinkedIn!
      </p>
    </div>
  );

  const RegularGrid = (
    <IonRow style={gridStyle}>
      <IonRow>
        <IonCol style={yellowColumn.container(SMediaQuery)} size="3">
          {title}
        </IonCol>
        <IonCol>{text}</IonCol>
      </IonRow>
    </IonRow>
  );

  const SmallGrid = (
    <div>
      <IonCol style={yellowColumn.container(SMediaQuery)}>{title}</IonCol>
      <IonCol style={gridStyle}>{text}</IonCol>
    </div>
  );

  return (
    <div>
      <IonGrid fixed={false} style={gridBorder}>
        {SMediaQuery ? RegularGrid : SmallGrid}
      </IonGrid>
    </div>
  );
};

export default About;
