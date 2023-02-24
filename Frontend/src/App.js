import React from "react";
import Todo_list_main from "./projects/todo_list_components/Todo_list_main.jsx";
import Weather_app_main from "./projects/weather_app_components/Weather_app_main.jsx";
import Navbar from "./Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Recipe_book_main from "./projects/recipe_book/Recipe_book_main.jsx";
import Recipe_book_categories from "./projects/recipe_book/Recipe_book_categories.jsx";

const App = () =>
{
  return (
    <div>
      <Routes>
        {/* the main route */}
        <Route path="/" element={<Navbar />} />

        {/*todo route*/}
        <Route path="/todo" element={<Todo_list_main />} />

        {/* weather_app route */}
        <Route path="/weather_app" element={<Weather_app_main />} />

        {/* recipe_book routes */}
        <Route path="/recipe_book" element={<Recipe_book_main />} />
        <Route path="/recipe_book/categories" element={<Recipe_book_categories />} />

      </Routes>
    </div>
  )
}

export default App;