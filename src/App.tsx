import React, { useState, useEffect } from "react";
import Form from "./Form";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const appID = process.env.REACT_APP_API_ID;
  const appKey = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("chcicken");

  useEffect(() => {
    const getTheRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`
      );
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };
    getTheRecipe();
  }, [query]);

  const updateSearch = (e) => {
    setText(e.target.value);
    // console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
    setText("");
  };

  return (
    <div className='App'>
      <Form
        updateSearch={updateSearch}
        handleSubmit={handleSubmit}
        text={text}
      />
      <div className='recipe'>
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
