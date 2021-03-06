import React, { useEffect, useState } from "react";
import axios from "axios";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import useApplicationData from "./hooks/useApplicationData";
import Plants from "./components/plants/Plants";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
// const hasToken = function() {
//   return localStorage.getItem("token") ? <Dashboard /> : <Landing />;
// };
export default function Application(props) {
  
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(token);
  
  return user ? <Dashboard  /> : <Landing setUser={setUser} />;
}