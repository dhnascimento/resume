import React, { useRef } from "react";
import { IonSlides, IonSlide, IonButton, IonIcon } from "@ionic/react";
import { caretBackOutline, caretForwardOutline } from "ionicons/icons";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  speed: 400,
  height: "100%",
  // width: "100%",
};

const Slides = () => {
  const mySlides = useRef(null);

  const getIndex = async (string) => {
    const swipe = await mySlides.current.getSwiper();
    if (string === "next") {
      swipe.slideNext();
    } else if (string === "previous") {
      swipe.slidePrev();
    }
  };

  const singleSlide = useRef(null);
  const selectSlide = async (index) => {
    const swipe = await mySlides.current.getSwiper();
    swipe.slideTo(index);
  };

  return (
    <div style={{ width: "100%" }}>
      <IonButton color="primary" onClick={() => selectSlide(0)}>
        Expertise
      </IonButton>
      <IonButton color="primary" onClick={() => selectSlide(1)}>
        Skills
      </IonButton>
      <IonButton color="primary" onClick={() => selectSlide(2)}>
        Projects
      </IonButton>
      <IonSlides options={slideOpts} ref={mySlides}>
        <IonSlide>
          <h1>Slide 1</h1>
        </IonSlide>
        <IonSlide>
          <p
            style={{
              "text-align": "justify",
              "padding-right": "10px",
              "padding-left": "10px",
            }}
          >
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
      {/* <IonButton color="primary" onClick={() => getIndex("previous")}>
        <IonIcon icon={caretBackOutline} />
      </IonButton>
      <IonButton color="primary" onClick={() => getIndex("next")}>
        <IonIcon icon={caretForwardOutline} />
      </IonButton> */}
    </div>
  );
};

export default Slides;
