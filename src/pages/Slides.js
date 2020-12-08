import React, { useRef, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { IonSlides, IonSlide, IonButton } from "@ionic/react";
import { animations } from "react-animation";
import About from "./Slides/About";
import Expertise from "./Slides/Expertise";
import Education from "./Slides/Education";
import Projects from "./Slides/Projects";
import Skills from "./Slides/Skills";

const Slides = () => {
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
    borderTop: "5px",
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

  const slidesMain = {
    animation: animations.fadeInUp,
    animationDuration: "2s",
    width: "100%",
  };

  const singleSlide = useRef(null);
  const [selected, setSelected] = useState(0);

  const selectSlide = async (index) => {
    const swipe = await singleSlide.current.getSwiper();
    singleSlide.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
    swipe.slideTo(index, 1000);
    setSelected(index);
  };

  const MobileMediaQuery = useMediaQuery("(min-width: 575px)");

  const buttonSize = {
    container: (MobileMediaQuery) => ({
      width: MobileMediaQuery ? "6.5rem" : "5rem",
      fontSize: MobileMediaQuery ? "14px" : "11px",
    }),
  };

  return (
    <div style={slidesMain}>
      <div style={buttons}>
        <IonButton
          color="buttons"
          style={buttonSize.container(MobileMediaQuery)}
          onClick={() => selectSlide(0)}
        >
          About
        </IonButton>
        <IonButton
          color="buttons"
          style={buttonSize.container(MobileMediaQuery)}
          onClick={() => selectSlide(1)}
        >
          Skills
        </IonButton>
        <IonButton
          color="buttons"
          style={buttonSize.container(MobileMediaQuery)}
          onClick={() => selectSlide(2)}
        >
          Projects
        </IonButton>
        <IonButton
          color="buttons"
          style={buttonSize.container(MobileMediaQuery)}
          onClick={() => selectSlide(3)}
        >
          Education
        </IonButton>
        <IonButton
          color="buttons"
          style={buttonSize.container(MobileMediaQuery)}
          onClick={() => selectSlide(4)}
        >
          Experience
        </IonButton>
      </div>

      <IonSlides options={slideOpts} ref={singleSlide}>
        <IonSlide>
          <About />
        </IonSlide>
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
