import React from "react";
import { IonIcon } from "@ionic/react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { logoLinkedin, logoGithub, mailOpen } from "ionicons/icons";

const TopNav = () => {
  const SMediaQuery = useMediaQuery("(min-width: 786px)");

  const anchor = {
    color: "#000000",
    display: "flex",
    alignItems: "flex-end",
  };

  const anchorDisplay = {
    container: (SFontSize) => ({
      display: "flex",
      flexDirection: "row",
      fontSize: SMediaQuery ? "3rem" : "1.2rem",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      padding: "30px",
    }),
  };

  return (
    <div style={anchorDisplay.container(SMediaQuery)}>
      <span>Daniel Nascimento</span>
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
};

export default TopNav;
