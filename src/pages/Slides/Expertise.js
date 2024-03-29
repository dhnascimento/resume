import React from "react";
import { IonAvatar, IonLabel, IonList, IonItem } from "@ionic/react";
import "../../theme/slides.css";

const Expertise = () => {
  const labelStyle = {
    fontFamily: "'Montserrat', sans-serif",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontWeight: "600",
  };

  const listStyle = {
    whiteSpace: "normal",
    padding: "1rem",
  };

  return (
    <IonList inset="true" lines="full">
      <IonItem>
        <IonAvatar slot="start">
          <img
            src="https://svgshare.com/i/be7.svg"
            alt="Boss Insights"
          ></img>
        </IonAvatar>
        <IonLabel style={labelStyle}>
          <div style={headerStyle}>
            <span>Boss Insights</span>
            <span>Toronto, Ontario</span>
          </div>
          <h3>Software Developer</h3>
          <p>January 2021 – present</p>
          <div>
            <ul style={listStyle}>
              <li>
                Create new features and functionalities on the company's software.
              </li>
              <li>
                Improve software usability by identifying and fixing bugs and implementing enhancements,
                reducing the number of weekly customer support tickets by 15%.
              </li>
              <li>
                Built features to improve user’s experience such as search box, table filters and messaging application.
              </li>
              <li>
                Collaborated with the development of browser extension for document upload.
              </li>
              <li>
                Design and built dashboard widgets to display data from accounting software API.
              </li>
            </ul>
          </div>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img
            src="https://svgshare.com/i/bdm.svg"
            alt="Mortgage Broker Store"
          ></img>
        </IonAvatar>
        <IonLabel style={labelStyle}>
          <div style={headerStyle}>
            <span>Mortgage Broker Store</span>
            <span>Toronto, Ontario</span>
          </div>
          <h3>Front-End Developer (Part time)</h3>
          <p>December 2020 – January 2021</p>
          <div>
            <ul style={listStyle}>
              <li>
                Developed mortgage-based calculator in JavaScript following MVC pattern.
              </li>
            </ul>
          </div>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img
            src="https://seeklogo.com/images/B/Banco_do_Brasil-logo-6C6B7F5F01-seeklogo.com.png"
            alt="BB"
          ></img>
        </IonAvatar>
        <IonLabel style={labelStyle}>
          <div style={headerStyle}>
            <span>Banco do Brasil S.A.</span>
            <span>Brasilia, Brazil</span>
          </div>
          <h3>Senior Analyst– Financial Structuring and Analysis</h3>
          <p>January 2016 – May 2019</p>
          <div>
            <ul style={listStyle}>
              <li>
                Assessed changes in the legal framework regarding funding
                sources that have mandatory lending conditions such as interest
                rates, maturity and segment of borrowers enforced by the
                government, assessing potential threats and opportunities while
                assuring that the company is in conformity with the most up to
                date regulation.
              </li>
              <li>
                Developed price discrimination strategies for mortgages loans
                and optimization of the funding, resulting in the optimization
                of available resources, competitive lending rates and
                improvements in profitability and efficiency.
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
      <IonItem>
        <IonAvatar slot="start">
          <img
            src="https://seeklogo.com/images/B/Banco_do_Brasil-logo-6C6B7F5F01-seeklogo.com.png"
            alt="BB"
          ></img>
        </IonAvatar>
        <IonLabel style={labelStyle}>
          <div style={headerStyle}>
            <span>Banco do Brasil S.A.</span>
            <span>Brasilia, Brazil</span>
          </div>
          <h3>Junior Analyst– Financial Structuring and Analysis</h3>
          <p>June 2013 – December 2015</p>
          <div>
            <ul style={listStyle}>
              <li>
                Analysed payroll-secured loans portfolio according to maturity
                and average interest rates, developed a strategy in order to
                renew loans close to their maturity with interest rates suitable
                to current market forecasts and retain market-share.
              </li>
              <li>
                Appraised purchases of vehicle financing and payroll-secured
                loans from other Brazilian financial institutions, optimizing
                the company’s revenues and the desired increase in market share.
              </li>
              <li>
                Developed a pricing strategy of vehicle financing according to
                the characteristics of collateral and borrower’s profile,
                leading to efficiency gains for the company and making the
                lending process easier for account managers.
              </li>
            </ul>
          </div>
        </IonLabel>
      </IonItem>
    </IonList>
  );
};

export default Expertise;
