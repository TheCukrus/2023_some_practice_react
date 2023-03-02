import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faCloudSun, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Main_page = () => {
  return (
    <div className="main-page-container">
      <h1>Welcome to my App</h1>
      <div className="app-links-container">
        <div className="app-link">
          <Link to="/todo">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faListAlt} size="2x" />
            </div>
            <div className="name-wrapper">
              <p>Todo App</p>
            </div>
          </Link>
        </div>
        <div className="app-link">
          <Link to="/weather_app">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faCloudSun} size="2x" />
            </div>
            <div className="name-wrapper">
              <p>Weather App</p>
            </div>
          </Link>
        </div>
        <div className="app-link">
          <Link to="/recipe_book">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faBookOpen} size="2x" />
            </div>
            <div className="name-wrapper">
              <p>Recipe Book</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main_page;