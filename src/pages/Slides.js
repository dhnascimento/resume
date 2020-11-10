import React, { useRef } from "react";
import { IonSlides, IonSlide, IonButton } from "@ionic/react";
import Expertise from "./Slides/Expertise";
import Education from "./Slides/Education";
import Projects from "./Slides/Projects";
import Skills from "./Slides/Skills";
import { useMediaQuery } from "../hooks/useMediaQuery";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  speed: 400,
  height: "100%",
  autoHeight: true,
  // width: "100%",
};

const buttons = {
  display: "flex",
  justifyContent: "center",
  borderColor: "#000000",
  borderTop: "5px solid",
};

const slideEducation = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column wrap",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "25px",
};

const slideSkills = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "25px",
};

const Slides = () => {
  const singleSlide = useRef(null);
  const selectSlide = async (index) => {
    const swipe = await singleSlide.current.getSwiper();
    swipe.slideTo(index);
  };

  const MobileMediaQuery = useMediaQuery("(min-width: 575px)");

  const buttonSize = {
    container: (MobileMediaQuery) => ({
      width: MobileMediaQuery ? "6rem" : "5rem",
      fontSize: MobileMediaQuery ? "14px" : "12px",
    }),
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={buttons}>
        <IonButton
          color="skills"
          style={buttonSize.container(MobileMediaQuery)}
          onClick={() => selectSlide(0)}
        >
          Skills
        </IonButton>
        <IonButton
          color="projects"
          style={buttonSize.container(MobileMediaQuery)}
          onClick={() => selectSlide(1)}
        >
          Projects
        </IonButton>
        <IonButton
          color="education"
          style={buttonSize.container(MobileMediaQuery)}
          onClick={() => selectSlide(2)}
        >
          Education
        </IonButton>
        <IonButton
          color="expertise"
          style={buttonSize.container(MobileMediaQuery)}
          onClick={() => selectSlide(3)}
        >
          Expertise
        </IonButton>
      </div>
      <IonSlides options={slideOpts} ref={singleSlide}>
        <IonSlide>
          <Skills />
        </IonSlide>
        <IonSlide>
          <Projects />
        </IonSlide>
        <IonSlide style={slideEducation}>
          <Education style={slideSkills} />
        </IonSlide>
        <IonSlide>
          <Expertise />
        </IonSlide>
      </IonSlides>
    </div>
  );
};

export default Slides;
