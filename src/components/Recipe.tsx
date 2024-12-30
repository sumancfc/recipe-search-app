import React from "react";

interface RecipeProps {
  title: string;
  calories: number;
  image: string;
  ingredients: {
    text: string;
  }[];
}

const Recipe: React.FC<RecipeProps> = ({
  title,
  calories,
  image,
  ingredients,
}) => {
  return (
    <div className='Recipe'>
      <h1 className='title'>{title}</h1>
      <p>Calories: {calories}</p>
      <img src={image} alt='Food' />
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default Recipe;
