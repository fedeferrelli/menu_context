import React, {useContext} from 'react'
import { DataContext } from '../context/Context'

import {useNavigate} from 'react-router-dom'

function Detalle() {

    const {selectedDish} = useContext(DataContext)

    const navigate = useNavigate()

    const handlePrice = (string) =>{
      return '$'+Number(string).toLocaleString('de-DE')
  }

    return (
      <section className="pb-4">


      <div className="w-full ">
      
      <div className="">
      <img className="" src={selectedDish?.image}
        alt={`imagen para ${selectedDish?.title}`} ></img> </div>    
      <div className="p-2 w-full">  
      <h1 className="text-2xl text-left capitalize font-semibold text-gray-600"> {selectedDish.plato}</h1>
      <div 
      className="flex justify-left"><div 
      className="rounded-full bg-gray-200 w-auto text-gray-400 px-2 py-1 text-sm"> {selectedDish.categoria} </div>  </div>    

      <h1 className="text-2xl font-bold text-left capitalize text-gray-600 mt-3"> {handlePrice(selectedDish.precio)}</h1>
         
      <p className="text-left text-gray-500 mt-2 text-md max-w-prose"> {selectedDish.descripcion}</p>
      </div>

      </div>
      <button onClick={()=>navigate(-1)} className="p-4 rounded-full bg-gray-200 shadow-xl text-center text-gray-800 right-2 bottom-2 absolute border border-gray-300/50">Go Back</button>
      </section>
  )

    /* return (
        
            
            <div className="">
        <section className="flex flex-row">
          <div className="">
            <img
              className="mt-0 my-auto w-96"
              src={selectedDish?.image}
              alt={`imagen para ${selectedDish?.title}`}
            />
          

          <h1 className="text-2xl font-semibold ml-3 sm:ml-0 text-left">
                {selectedDish?.plato}{" "}
                <span className="block text-sm font-thin">
                  {selectedDish?.precio} 
                </span>
              </h1>
            </div>

            <p className="">{selectedDish?.descripcion}</p>
          

        </section>

            <button onClick={()=>navigate(-1)} className="p-4 rounded-full bg-gray-200 shadow-xl text-center text-gray-800 font-thin border border-gray-300/50">Go Back</button>

        </div>
    ) */
}

export default Detalle
