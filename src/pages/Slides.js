import React, { useRef } from "react";
import {
  IonLabel,
  IonList,
  IonItem,
  IonSlides,
  IonSlide,
  IonButton,
  IonIcon,
} from "@ionic/react";
import Expertise from "./Slides/Expertise";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  speed: 400,
  height: "100%",
  // width: "100%",
};

const buttons = {
  display: "flex",
  justifyContent: "center",
  borderColor: "#000000",
  borderTop: "5px solid",
  borderBottom: "5px solid",
};

const buttonSize = {
  width: "6rem",
};

const paragraph = {
  textAlign: "justify",
  paddingRight: "10px",
  paddingLeft: "10px",
};

const Slides = () => {
  const singleSlide = useRef(null);
  const selectSlide = async (index) => {
    const swipe = await singleSlide.current.getSwiper();
    swipe.slideTo(index);
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={buttons}>
        <IonButton
          color="expertise"
          style={buttonSize}
          onClick={() => selectSlide(0)}
        >
          Expertise
        </IonButton>
        <IonButton
          color="skills"
          style={buttonSize}
          onClick={() => selectSlide(1)}
        >
          Skills
        </IonButton>
        <IonButton
          color="projects"
          style={buttonSize}
          onClick={() => selectSlide(2)}
        >
          Projects
        </IonButton>
      </div>
      <IonSlides options={slideOpts} ref={singleSlide}>
        <IonSlide>
          <Expertise />
        </IonSlide>
        <IonSlide>
          <p style={paragraph}>
            {" "}
            I have over 9 years of experience in the banking and finance
            industries. I’ve always enjoyed working in helping people finding
            the most suitable solutions for their needs. I started learning how
            to code with data analysis in mind. However, the innate
            problem-solving nature of it, along with the endless possibilities
            of what one can accomplish with a programming language, ranging from
            a groundbreaking app to a simple tool to improve efficiency in a
            specific task, compelled me to pursue a career change towards a web
            developer role.
          </p>
        </IonSlide>
        <IonSlide>
          <h1>Slide 3</h1>
        </IonSlide>
      </IonSlides>
    </div>
  );
};

export default Slides;
