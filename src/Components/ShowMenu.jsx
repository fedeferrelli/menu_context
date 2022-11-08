import React from 'react'

function ShowMenu({dish, handlePrice, goToSelectedDish}) {
    return (
        <section className="">


        <div className="w-full sm:w-[250px] bg-white rounded-t-md shadow-xl hover:shadow-gray-500 hover:shadow-lg border border-slate-500/25 ease-in-out duration-500 cursor-pointer overflow-hidden relative" onClick={()=>goToSelectedDish(dish.id, dish.existencia)} key={dish.id}>
        <img className="m-auto" src={dish?.image}
          alt={`imagen para ${dish?.title}`} ></img>    
        <div className="p-2">  
        <h1 className="text-xl text-left capitalize text-gray-600"> {dish.plato}</h1>
        <div 
        className="flex justify-left"><div 
        className="rounded-full bg-gray-200 w-auto text-gray-400 px-2 py-1 text-xs"> {dish.categoria} </div>  </div>    


        <h1 className="text-xl font-bold text-left capitalize text-gray-600"> {handlePrice(dish.precio)}</h1>
           
        <p className="text-left text-gray-500 mt-4 text-sm max-w-prose"> {dish.descripcion.substring(0,30)}...</p> 
        {dish.existencia==='no' && <div className="absolute top-0 left-0 bottom-0 right-0 bg-gray-800/75 flex ">
            <div className="w-48 p-2 m-auto rounded-full  bg-gray-100/50 text-gray-800 text-center rotate-0">Sin Stock</div>
            </div>}   
        </div>

        </div></section>
    )
}

export default ShowMenu
