import React, { useRef, useState } from "react";
import { IonSlides, IonSlide, IonButton, IonContent } from "@ionic/react";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  speed: 400,
  height: "100%",
  // width: "100%",
};

const Slides = () => {
  const mySlides = useRef(null);
  // const [index, setIndex] = useState(0);
  const getIndex = async () => {
    const swipe = await mySlides.current.getSwiper();
    swipe.slideNext();
  };

  return (
    <div style={{ width: "100%" }}>
      <IonSlides options={slideOpts} ref={mySlides}>
        <IonSlide>
          <h1>Slide 1</h1>
        </IonSlide>
        <IonSlide>
          <h1>Slide 2</h1>
        </IonSlide>
        <IonSlide>
          <h1>Slide 3</h1>
        </IonSlide>
      </IonSlides>
      <IonButton color="primary" onClick={getIndex}>
        Next
      </IonButton>
    </div>
  );
};

export default Slides;
