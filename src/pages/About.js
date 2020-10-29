import { IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const About = () => {
  const SMediaQuery = useMediaQuery("(min-width: 786px)");
  const MobileMediaQuery = useMediaQuery("(min-width: 575px)");

  const title = <h3 style={{ "text-align": "center" }}>About me</h3>;

  const text = (
    <p
      style={{
        "text-align": "justify",
        "padding-right": "10px",
        "padding-left": "10px",
      }}
    >
      {" "}
      I have over 9 years of experience in the banking and finance industries.
      I’ve always enjoyed working in helping people finding the most suitable
      solutions for their needs. I started learning how to code with data
      analysis in mind. However, the innate problem-solving nature of it, along
      with the endless possibilities of what one can accomplish with a
      programming language, ranging from a groundbreaking app to a simple tool
      to improve efficiency in a specific task, compelled me to pursue a career
      change towards a web developer role.
    </p>
  );

  const RegularGrid = (
    <IonRow>
      <IonCol>{title}</IonCol>
      <IonCol>{text}</IonCol>
    </IonRow>
  );

  const SmallGrid = (
    <IonCol>
      <IonCol>{title}</IonCol>
      <IonCol>{text}</IonCol>
    </IonCol>
  );

  return (
    <div>
      <IonGrid fixed={false}>{SMediaQuery ? RegularGrid : SmallGrid}</IonGrid>
    </div>
  );
};

export default About;
