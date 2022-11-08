import React, {useContext} from 'react'
import { DataContext } from '../context/Context'

import {useNavigate} from 'react-router-dom'

function Detalle() {

    const {selectedDish} = useContext(DataContext)

    const navigate = useNavigate()


    return (
        
            
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
    )
}

export default Detalle
