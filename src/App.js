 import { useState } from "react";
import AddRecipe from "./components/AddRecipe";
import RecipesList from "./components/RecipesList";
 
function App() {
  const [openModel,setOpenModal]=useState(false);

  const handleOpenModal=()=>{ setOpenModal(!openModel); }  

  const handleCloseModal=()=>{ setOpenModal(!openModel);}
  
  return (
    <div className="fixed bg-[#342F4E] h-[100vh] w-[100%]">
       <h1 className="flex flex-row justify-center text-3xl text-white font-extrabold mt-20">My Recipes</h1>
       
       <div className="flex flex-row justify-center items-center">
        <button className=" bg-cyan-500 shadow-lg p-4 rounded-full my-4 items-center justify-center"
        onClick={()=>handleOpenModal()}
        > Add Recipe</button>

       </div>
        <RecipesList/>
        <AddRecipe handleCloseModal={handleCloseModal} openModel={openModel}/>
    </div>
  );
}

export default App;
