import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import RecipeCard from './RecipeCard';

function RecipesList() {
    
    const [recipes,setRecipes]=useState([]);
    const [form,setForm]=useState({
      title:'',
      description:'',
      ingredients:[],
      steps: []
    });
    
   
    const [view,setView]=useState('');

    const recipes_Collection_ref=collection(db,'recipes');
    
    useEffect( ()=>{
        onSnapshot(recipes_Collection_ref,snapshot=>{
        setRecipes(
          snapshot.docs.map(doc=> ({
            id:doc.id,
            viewing:false,
            ...doc.data()
          }))
        ) 
           
      } )
    },[])
    
    
    const handleCall = (id) => {
      console.log(id);
      setView(id);
      const recipesClone=[...recipes];

      recipesClone.forEach(recipe=>{
        if(recipe.id===id){recipe.viewing=!recipe.viewing }
        else{recipe.viewing=false }
      })
      
      setRecipes(recipesClone);
    }
    

    return (
    <div className='flex flex-row justify-evenly mt-10' >
        {
            recipes.map((recipe,i)=>(                 
                <RecipeCard key={recipe.id} recipe={recipe}  handleCall={handleCall}/>
            ))
        }
         
    </div>
  )
}

export default RecipesList

