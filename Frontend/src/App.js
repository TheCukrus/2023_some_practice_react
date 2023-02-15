import React from "react";
import Todo_list_main from "./projects/todo_list_components/Todo_list_main.jsx";
import Weather_app_main from "./projects/weather_app_components/Weather_app_main.jsx";
import Navbar from "./Navbar.jsx";
import { Route, Routes } from "react-router-dom"

const App = () =>
{
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/todo" element={<Todo_list_main />} />
        <Route path="weather_app" element={<Weather_app_main />} />
      </Routes>
    </div>
  )
}

export default App;