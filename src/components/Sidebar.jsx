/* eslint-disable react/prop-types */


const Sidebar = ({recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {
    return (
        <div className="md:w-1/3 border-2 p-2 rounded-lg bg-base-100">
            {/* want to cook table */}
    <div className="overflow-x-auto">
        <h3 className="text-xl font-bold text-center p-2 border-b-2">Want To Cook: {recipeQueue.length}</h3>
    <table className="table">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        recipeQueue.map((recipe, indx)=> (
        <tr className="hover" key={indx}>
        <th>{indx + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td><button onClick={()=> {handleRemove(recipe.recipe_id),calculateTimeAndCalories(recipe.preparing_time, recipe.calories)}} className="bg-green-400 py-1 px-2 rounded-full text-gray-800 font-bold">Preparing</button></td>
      </tr>
        ))
      }
      
    </tbody>
    </table>
    </div>
    {/* currently cooking table */}
    <div className="overflow-x-auto mt-8">
        <h3 className="text-xl font-bold text-center p-2 border-b-2">Currently Cooking: {preparedRecipe.length}</h3>
    <table className="table">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        
      </tr>
    </thead>
    <tbody>
      {
        preparedRecipe.map((recipe, indx)=> (
        <tr className="hover" key={indx}>
        <th>{indx + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        
      </tr>
        ))
      }
      <tr className="border-t-2">
        <th></th>
        <td></td>
        <td>Total Time : {totalTime} min</td>
        <td>Total Calories : {totalCalories} calories</td>
      </tr>
    </tbody>
    </table>
    </div>
    </div>
    );
};

export default Sidebar;