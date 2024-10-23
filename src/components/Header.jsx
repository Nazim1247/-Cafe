

const Header = () => {
    return (
      <div>
    <div className="navbar flex flex-col md:flex-row text-center space-y-2 py-8 md:w-11/12 mx-auto">
  <div className="navbar-start w-full mx-auto">
    <h3 className="text-xl font-bold">Recipe Calories</h3>
  </div>
  <div className="navbar-center">
    <div className="flex justify-center items-center space-x-3">
        <p>Home</p>
        <p>Recipes</p>
        <p>About</p>
        <p>Search</p>
    </div>
  </div>
  <div className="navbar-end w-full">
    <div className="flex justify-center items-center space-x-3">
    <label className="px-2 py-1 border-2 rounded-full flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  <input type="text" className="grow" placeholder="Search" />
</label>
<i className="fa-regular fa-circle-user text-xl py-1 px-2 bg-green-400 rounded-3xl"></i>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Header;