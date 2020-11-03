import React from "react";
import { IonAvatar, IonLabel, IonList, IonItem } from "@ionic/react";

const Expertise = () => {
  return (
    <IonList inset="true" lines="full">
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://seeklogo.com/images/B/Banco_do_Brasil-logo-6C6B7F5F01-seeklogo.com.png"></img>
        </IonAvatar>
        <IonLabel>
          <div style={{ display: "flex", "justify-content": "space-between" }}>
            <h2>Banco do Brasil S.A. </h2>
            <h2>Brasilia, Brazil</h2>
          </div>
          <h3>Senior Analyst– Financial Structuring and Analysis</h3>
          <h3>January 2016 – May 2019</h3>
          <div>
            <ul style={{ "white-space": "normal" }}>
              <li>
                Assessed changes in the legal framework regarding funding
                sources that have mandatory lending conditions such as interest
                rates, maturity and segment of borrowers enforced by the
                government, assessing potential threats and opportunities while
                assuring that the company is in conformity with the most up to
                date regulation.
              </li>
              <li>
                Developed price discrimination strategies for real-estate loans
                and optimization of the sources and uses of the funding
                available, resulting in the optimization of regulatory capital
                allocated to loans, competitive lending rates and maximizing the
                expected return on equity.
              </li>
              <li>
                Evaluated impacts of the IFRS 9 frameworks at the price
                management area, identifying possible changes in the firm’s
                pricing model and reporting the potential opportunities and
                risks related to the government regulatory body and the IASB
                frameworks.
              </li>
            </ul>
          </div>
        </IonLabel>
      </IonItem>
    </IonList>
  );
};

export default Expertise;
