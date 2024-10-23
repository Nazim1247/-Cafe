import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
  }

  const handleRemove = (id)=>{
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);
    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  }

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    )
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    }else{
      alert('Recipe already exist in the queue.')
    }
  }
  
  return (
    <div className="container mx-auto px-4">
      {/*  Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes */}
      <OurRecipes></OurRecipes>
      {/* Recipe Card section */}
      <section className="flex flex-col md:flex-row gap-6 w-11/12 mx-auto">
        {/* Card section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar
         totalCalories={totalCalories}
         totalTime={totalTime}
         calculateTimeAndCalories={calculateTimeAndCalories}preparedRecipe={preparedRecipe}
         handleRemove={handleRemove}
         recipeQueue={recipeQueue}>
       </Sidebar>
      </section>
    </div>
  );
};

export default App;