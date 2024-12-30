import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Form from "./Form";
import Recipe from "./Recipe";
import "./App.css";

interface RecipeData {
  recipe: {
    label: string;
    calories: number;
    image: string;
    ingredients: {
      text: string;
    }[];
  };
}

function App() {
  const appID = process.env.REACT_APP_API_ID;
  const appKey = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState<RecipeData[]>([]);
  const [text, setText] = useState<string>("");
  const [query, setQuery] = useState<string>("chicken");

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
  }, [query, appID, appKey]);

  const updateSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
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
