import { deleteDoc, doc } from 'firebase/firestore';
import { db } from "../firebase";
import React from 'react'

function RecipeCard({recipe:{id,viewing,title,description,ingredients,steps},handleCall}) {
    
 
    const call=(id)=>{
      handleCall(id);
    }

    const handle_Delete=(id)=>{
      deleteDoc( doc(db,'recipes',id) )
    }  
    return (
    <div className='flex flex-col w-full sm:mr-4 md:mr-0  text-white shadow-2xl shadow-[#734f83] p-10 rounded-xl mx-6'>
        <h2 className='text-2xl font-bold'> {title} </h2>

         <p className='py-6'>{description} </p>

                { viewing &&  (

                    <div className='py-2'>
                    <h3 className=' italic text-lg font-semibold'>Ingredients</h3>
                    <ul>
                        {ingredients.map( (ingredient,i)=>(
                            <li key={i}> {ingredient} </li>
                        ))}
                    </ul>
                    </div>
                  )
                }
                
                { viewing && (
                      <div className='py-2'>
                      <h3 className=' italic text-lg font-semibold'>Steps</h3>
                      <ul>
                          {steps.map((step,i)=>(
                              <li key={i}> {step} </li>
                          ))}  
                      </ul>
                      </div>
                  )
                }

        <div className='flex flex-row justify-evenly items-center'>
          <button className=' p-3 bg-cyan-700 rounded-xl' onClick={()=>call(id)}>View {viewing ? 'Less': 'More'} </button>  
          <button className=' p-3 bg-red-700 rounded-xl' onClick={()=>handle_Delete(id)}>Remove </button>            
        </div>          
    </div>
  )
}

export default RecipeCard

