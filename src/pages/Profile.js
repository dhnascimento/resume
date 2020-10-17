import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonThumbnail,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Profile = () => {
  const display = {
    display: "flex",
    "justify-content": "space-between",
  };

  const mystyles = {
    "font-family": "'Kadwa', serif",
    "font-size": "7rem",
  };

  return (
    <div style={display}>
      <IonThumbnail style={{ height: "25%", width: "25%" }}>
        <IonImg
          src={"https://i.imgur.com/lq1p6Ll.png?1"}
          style={{ "border-radius": "1rem" }}
        />
      </IonThumbnail>
      <div style={mystyles}>Daniel Nascimento</div>
      {/* <p>
        I have over 9 years of experience in the banking and finance industries.
        I’ve always enjoyed working in helping people finding the most suitable
        solutions for their needs. I started learning how to code with data
        analysis in mind. However, the innate problem-solving nature of it,
        along with the endless possibilities of what one can accomplish with a
        programming language, ranging from a groundbreaking app to a simple tool
        to improve efficiency in a specific task, compelled me to pursue a
        career change towards a web developer role.
      </p> */}
    </div>
  );
};

export default Profile;
