import React, { Fragment } from "react";
// import Dashboard from "../dashboard/Dashboard";
import styled from "styled-components";
import Signup from "./Signup";
import Login from "./Login";
import useApplicationData from "../../hooks/useApplicationData";
import Plants from "../plants/Plants.js";
import PlantInput from "../dashboard/PlantInput";

import landing_image from "./landing.jpg";
import cell_image from "./landing_cell.jpg";
import useVisualMode from "../../hooks/useVisualMode";
import Leading from "./Leading";
import Dashboard from "../dashboard/Dashboard";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useHistory,
//   useLocation
// } from "react-router-dom";

const LEADING = "LEADING";
const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";
const PLANT = "PLANT";
const DASHBOARD = "DASHBOARD";
const PLANTADD = "PLANTADD";
// const SENSORADD = "SENSORADD"

const Bg = styled.div`
  background-image: url(${landing_image});
  min-height: 100vh;
  max-width: 100vw;
  background-position: center top;
  backgroud-size: contain;
  background-attachment: fixed;

  @media screen and (max-width: 500px) {
    background-image: url(${cell_image});
  }
`;

export default function Landing(props) {
  const { plantAddDB, loginDBCall, userSignup } = useApplicationData();
  const { mode, transition, back } = useVisualMode(LEADING);

  function login() {
    transition(LOGIN);
  }
  function signup() {
    transition(SIGNUP);
  }

  function signupData(email, password, firstName, lastName) {
    userSignup(email, password, firstName, lastName);
    transition(PLANT);
  }

  function loginCheck(email, password) {
    // transition(CHECK);
    loginDBCall(email, password);
    transition(DASHBOARD);
  }

  // function save(name, interviewer) {
  //   const interview = {
  //     student: name,
  //     interviewer
  //   };

  //   transition(SAVING);

  //   props
  //     .bookInterview(props.id, interview)
  //     .then(() => transition(SHOW))
  //     .catch(error => transition(ERROR_SAVE, true));
  // }
  function addPlant(plantName, plantImage) {
    plantAddDB(plantName, plantImage);
  }
  function plantInputPopUp() {
    transition(PLANTADD);
  }
  // function addSensor(sensorName) {
  //   sensorAddDB(sensorName)
  // }
  // function sensorInputPopUp(){
  //   transition(SENSORADD)
  // }
  return (
    <Fragment>
      <Bg>
        {mode === LEADING && <Leading onLogin={login} onSignup={signup} />}
        {mode === LOGIN && (
          <Login
            email={props.email}
            password={props.password}
            onLogin={loginCheck}
          />
        )}
        {mode === SIGNUP && (
          <Signup
            email={props.email}
            password={props.password}
            first_name={props.firstName}
            last_name={props.lastName}
            onSignup={signupData}
          />
        )}
        {mode === PLANT && <Plants />}
        {mode === DASHBOARD && <Dashboard addPlant={plantInputPopUp} />}

        {mode === PLANTADD && (
          <PlantInput
            key={props.plantID}
            plantName={props.plantName}
            plantImage={props.plantImage}
            addP={addPlant}
          />
        )}
      </Bg>
    </Fragment>
  );
}
