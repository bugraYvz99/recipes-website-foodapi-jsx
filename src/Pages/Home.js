import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch',{
        params: {
          number: 100,
          apiKey: 'd156cebea94147f08d96f96c01db24a1'
        },
        headers: {
          'Content-Type': 'application/json'
        },
        maxBodyLength: Infinity
      });

      setRecipes(response.data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
         <Link to={`recipes/${recipe.id}`}></Link>

          <h2 className=' text-2xl font-serif font-semibold'><Link to={`recipes/${recipe.id}`}>{recipe.title}</Link></h2>
          <img src={recipe.image}></img>
        </div>
      ))}
    </div>
  );
};

export default Home;
