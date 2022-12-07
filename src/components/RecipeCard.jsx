import React, { useState } from 'react'

function RecipeCard({recipe:{id,viewing,title,description,ingredients,steps},handleCall}) {
    
 
    const call=(id)=>{
      handleCall(id);
    }

    return (
    <div className='flex flex-col w-[555px] text-white  shadow-2xl p-10 rounded-xl'>
        <h2 className='text-2xl font-bold '> {title} </h2>

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
          <button className='w-[30%] p-2 bg-cyan-700 rounded-full' onClick={()=>call(id)}>View {viewing ? 'Less': 'More'} </button>  
          <button className='w-[30%] p-2 bg-red-700 rounded-full'>Remove </button>            
        </div>          
    </div>
  )
}

export default RecipeCard

/**
 *  {
          recipes.map( (recipe,i)=>(
            <div className=" flex  justify-between items-center" key={i}>

                <div className="flex flex-col justify-between items-center">
                 <h2 className=" text-white"> {recipe.title} </h2> 

                  <p>{recipe.description} </p>

                    <div>

                        <h3>Ingredients</h3>
                        <ul>
                          {
                            recipe.ingredients.map( (ingredient,i)=>(
                              <li key={i}> {ingredient} </li>
                            ))

                          }
                        </ul>

                        <h3>Steps</h3>
                        <ul>
                          {
                            recipe.steps.map((step,i)=>(
                              <li key={i}> {step} </li>
                            ))
                          }  
                        </ul>

                    </div>
                </div> 
                

            </div>
          ))
       } 
 */