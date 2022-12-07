import React, { useState } from 'react'

const AddRecipe=({openModel,handleCloseModal})=> {

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

    
    return (
        <div id='container'  onClick={(e)=>closeModal(e)} 
        className='flex justify-center items-center fixed inset-0 h-full w-full backdrop-blur-sm  bg-black/20 '>  
    
           <div className='h-[600px] w-[700px] bg-[#342F4E] p-2 rounded-md  text-white shadow-lg'>
                <h1 className='p-2 text-2xl font-bold'> Add a new Recipe </h1>
           
                 <form className='flex flex-col '>
                    
                    <div className='flex flex-col my-2 gap-2'>
                        <label className=' text-xl font-semibold'>Title</label>
                        <input className='p-2 text-black' type='text' value={form.title} onChange={e=>setForm({...form,title: e.target.value}) }  />
                    </div>


                    <div className='flex flex-col my-2 gap-2'>
                        <label className='text-xl font-semibold'>Description</label>
                        <textarea className='p-2 text-black' type='text' value={form.description} onChange={e=>setForm({...form, description: e.target.value}) }  />
                    </div>

                 
                 </form>   
                {JSON.stringify(form)}
           </div>
    </div>
  )
}

export default AddRecipe
