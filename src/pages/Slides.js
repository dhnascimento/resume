import React, { useRef } from "react";
import { IonSlides, IonSlide, IonButton } from "@ionic/react";
import Expertise from "./Slides/Expertise";
import Education from "./Slides/Education";
import Projects from "./Slides/Projects";

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

const slideEducation = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column wrap",
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
        <IonButton
          color="education"
          style={buttonSize}
          onClick={() => selectSlide(3)}
        >
          Education
        </IonButton>
      </div>
      <IonSlides options={slideOpts} ref={singleSlide}>
        <IonSlide>
          <Expertise />
        </IonSlide>
        <IonSlide>
          <hi>Slide 2</hi>
        </IonSlide>
        <IonSlide>
          <Projects />
        </IonSlide>
        <IonSlide style={slideEducation}>
          <Education />
        </IonSlide>
      </IonSlides>
    </div>
  );
};

export default Slides;
