import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from '../context/Context'
import Loading from './Loading';
import ShowMenu from './ShowMenu';

import {useNavigate, Link} from 'react-router-dom';


function Data() {
    
    const {data, selectDish, showLoading} = useContext(DataContext)

    const [filteredData, setFilteredData] = useState()
    const [search, setSearch] = useState("")
    const [categories, setCategories] = useState()

    console.log(filteredData)
    console.log(categories)

    

    const navigate = useNavigate()

    function sortByStock(a, b) {return (a.existencia > b.existencia) ? -1 : 1
    }


    useEffect(() => {
        const getFilteredData = () =>{
            const filteredData = data.filter(dish=>dish.plato.toLowerCase().includes(search.toLowerCase()) || dish.descripcion.toLowerCase().includes(search.toLowerCase()) || dish.categoria.toLowerCase().includes(search.toLowerCase())) 
            setFilteredData(filteredData.sort(sortByStock))
            setCategories([...new Set(filteredData.map(dish=> {return dish.categoria}))])
        }
       {data && getFilteredData()} 
    }, [data, search])



    const goToSelectedDish = (dish, stock) =>{
        if(stock==='si'){
        selectDish(dish)
        navigate('/detailedDish')
    }
    }

    const handlePrice = (string) =>{
        return '$'+Number(string).toLocaleString('de-DE')
    }

    
    

    
    
    return (

        <div className="w-full px-2 bg-gray-100 min-h-screen">
            <div>
                <input className="w-40 focus:w-full p-2 rounded-md mb-4 ease-in-out duration-700 outline-none
                border-gray-100 border bg-white text-gray-700 font-extralight" onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Buscar'/>
            </div>
            {showLoading ? 
        <Loading/>:

<section className="" >

<section className="w-full flex flex-wrap justify-evenly sm:justify-start my-2 gap-2 sm:gap-6">
            {categories?.map(cat=>{
                return(<a key={cat} href={`#${cat}`} className="px-3 py-2 shadow text-gray-600 rounded-full bg-slate-200 text-sm scroll-smooth">{cat}</a>)
            })}
            </section>

        <div className="flex  flex-row  flex-wrap gap-4">

            
        
        <div className="w-full">
        {
            
           categories?.map((cat)=>{
                
               const filtro = filteredData.filter(dish=>dish.categoria===cat)
                              
                return(<div key={cat} className="w-full flex flex-col bg-white rounded-lg shadow mb-3 p-2">

                    <div className="text-left sm:text-center text-gray-700 font-semibold text-3xl sm:text-4xl py-3" id={cat}>{cat} <small className="font-normal">({filtro.length})</small>  </div>

                    <section className="flex justify-start flex-wrap gap-4"> 
                    {
                    filtro.map((dish)=>{
                        return(
                        <div key={dish.id} className="sm:w-auto">
                        <ShowMenu dish={dish} handlePrice={handlePrice} goToSelectedDish={goToSelectedDish}/>
                        </div>
                        )})
                    }
                    
                     </section>
                    
                     </div>)
                    
                
            })
        }
        
        </div>
        
        
        </div>
        </section>        }    

        </div>

        
    )
}

export default Data
