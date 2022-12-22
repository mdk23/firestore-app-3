import React, { useState } from 'react'

import { addDoc, collection } from "firebase/firestore";
import { FaRegTrashAlt } from 'react-icons/fa';
import { db } from "../firebase";

const AddRecipe=({openModel,handleCloseModal})=> {

    const recipes_Collection_ref=collection(db,'recipes');

    const [form,setForm]=useState({
        title:'',
        description:'',
        ingredients:[],
        steps: []
      });

      

    if(!openModel) return null;
    const closeModal=(e)=>{
        if(e.target.id==='container')
        {
            handleCloseModal();
        }
    }

    //Ingredients
    const handle_Ingredient = (e,i) => {
        const clone_ingredients=[...form.ingredients];
        clone_ingredients[i]=e.target.value;

        setForm({...form, ingredients:clone_ingredients})
    }

    const handle_IngredientsCount=()=>{
        setForm({...form,ingredients:[...form.ingredients,'']})
    }

    const delete_Ingredient=(e,i)=>{
        e.preventDefault();
        const clone_ingredients=[...form.ingredients];
        clone_ingredients.splice(i,1);
        setForm({...form,ingredients:clone_ingredients}) 
    }

    //Steps
    const handle_Step=(e,i)=>{
        const clone_steps=[...form.steps];
        clone_steps[i]=e.target.value;

        setForm({...form,steps:clone_steps})
    }

    const handle_StepCount=()=>{
        setForm({...form,steps:[...form.steps,'']})
    }

    const delete_Step=(e,i)=>{
        e.preventDefault();
        const clone_steps=[...form.steps];
        clone_steps.splice(i,1);
        setForm({...form,steps:clone_steps});
    }

    const handleSubmit= e=>{
        e.preventDefault();

        if(!form.title || !form.description || !form.ingredients || !form.steps )
        {
            alert('Please fill out all fields');
            return
        } 
        else if (form.ingredients.length===0) { 
            alert('Add Ingredients');
            return
        }
        else if (form.steps.length===0) { 
            alert('Add Steps');
            return
        }

        addDoc(recipes_Collection_ref,form);

           setForm({
            title:'',
            description:'',
            ingredients:[],
            steps: []
          }) 
    }
    
    return (
        <div id='container'  onClick={(e)=>closeModal(e)} 
        className='flex justify-center items-center fixed inset-0 h-[500px  ] w-full   backdrop-blur-sm  bg-black/20 '>  
    
           <div className=' w-[750px] bg-[#342F4E] p-2 rounded-md  text-white shadow-lg'>
                <h1 className='p-2 text-2xl font-bold'> Add a new Recipe </h1>
           
                 <form className='flex flex-col overflow-y-auto h-[700px]'>
                    
                    <div className='flex flex-col my-2 gap-2'>
                        <label className=' text-xl font-semibold'>Title</label>
                        <input className='p-2 text-black rounded-md m-1' type='text' value={form.title} onChange={e=>setForm({...form,title: e.target.value}) }  />
                    </div>


                    <div className='flex flex-col my-2 gap-2'>
                        <label className='text-xl font-semibold'>Description</label>
                        <textarea className='p-2 text-black rounded-md mx-2' type='text' value={form.description} onChange={e=>setForm({...form, description: e.target.value}) }  />
                    </div>

                    <div className='flex flex-col my-2 gap-2'>
                        <label className=' text-xl font-semibold'>Ingredients</label>
                        {
                            form.ingredients.map((ingredient,i)=>(
                                <div className='flex flex-row' key={i}>
                                    <input className='p-1 text-black w-full rounded-sm mx-2'
                                     type='text' value={ingredient} 
                                    onChange={e=>handle_Ingredient(e,i) }/>
                            
                                    <button  onClick={e=>delete_Ingredient(e,i)}>
                                        <FaRegTrashAlt size={20} className='items-center justify-center mx-auto mt-2'/>
                                    </button>
                                </div>
                            ))
                        }
                        
                       <button type='button' onClick={handle_IngredientsCount}
                       className=' mx-auto bg-cyan-600 p-2 rounded-md w-[40%]'>Add Ingredient</button> 
                    </div>

                    <div className='flex flex-col my-2 gap-2'>
                          <label className='text-xl font-semibold'>Steps</label>  
                          {
                            form.steps.map((step,i)=>(
                                <div className='flex flex-row' key={i}>
                                    <textarea className='text-black w-full rounded-sm mx-2' 
                                    type='text' value={step} onChange={e=>handle_Step(e,i)} />
                                    <button onClick={e=>delete_Step(e,i)}> 
                                        <FaRegTrashAlt size={20} className='items-center justify-center mx-auto mt-1'/> 
                                    </button>
                                </div>
                            ))
                          }
                          <button type='button' onClick={handle_StepCount}
                       className=' mx-auto bg-cyan-600 p-2 rounded-md w-[40%]'>Add Step</button> 

                    </div>

                    <div className='flex flex-row justify-evenly items-center my-10'>
                        <button className='w-[20%] p-2 bg-cyan-700 rounded-full' onClick={e=>handleSubmit(e)}>Submit</button>  
                        <button className='w-[20%] p-2 bg-red-700 rounded-full' onClick={(e)=>closeModal(e)}>Close </button>            
                    </div>
                 </form>   
               
           </div>
    </div>
  )
}

export default AddRecipe
