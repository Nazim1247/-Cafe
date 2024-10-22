import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const Recipes = ({addRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(response => response.json())
        .then(data => setRecipes(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
                {
                    recipes.map(recipe => (
                        <div key={recipe.recipe_id} className="card bg-base-100 border-2">
  <figure className="p-6">
    <img className="w-full h-52 rounded-lg"
      src={recipe.recipe_image}
      alt="image" />
  </figure>
  <div className="card-body">
    <h2 className="text-xl font-bold">{recipe.recipe_name}</h2>
    <p>{recipe.short_description}</p>
    <h3 className="text-xl font-bold">ingredients: {recipe.ingredients.length}</h3>
    <ul>
        {recipe.ingredients.map((item, index)=> <li className="list-disc ml-6" key={index}>{item}</li>)}
    </ul>
    <div className="flex gap-6">
        <div className="flex items-center gap-2">
        <i className ="fa-regular fa-clock"></i>
        <p>{recipe.preparing_time}</p>
        </div>
        <div className="flex items-center gap-2">
        <i className="fa-solid fa-fire-flame-curved"></i>
        <p>{recipe.calories}</p>
        </div>
    </div>
    <div className="card-actions">
      <button onClick={()=>addRecipeToQueue(recipe)} className="bg-green-400 py-1 px-6 rounded-full text-gray-800 font-bold mt-3">Want To Cook</button>
    </div>
  </div>
</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Recipes;