import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from '../context/Context'
import Loading from './Loading';
import ShowMenu from './ShowMenu';

import {useNavigate} from 'react-router-dom';


function Data() {
    
    const {data, categoriesData, selectDish, showLoading} = useContext(DataContext)


    const [filteredData, setFilteredData] = useState()
    const [search, setSearch] = useState("")
    const [categories, setCategories] = useState()
  

    const navigate = useNavigate()

    function sortByStock(a, b) {return (a.existencia > b.existencia) ? -1 : 1
    }


    useEffect(() => {
        const getFilteredData = () =>{
            const filteredData = data.filter(
                dish=>dish.plato.toLowerCase().includes(search.toLowerCase()) || dish.descripcion.toLowerCase().includes(search.toLowerCase()) || dish.categoria.toLowerCase().includes(search.toLowerCase())|| dish.tags.toLowerCase().includes(search.toLowerCase())) 
            setFilteredData(filteredData.sort(sortByStock))
            setCategories(categoriesData.map(cat=> {return cat.nueva_categoria})
                
                )
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

        <div className="w-full px-2 bg-gray-700 min-h-screen flex flex-col">
           
            {showLoading ? 
        <Loading/>:

<section className="w-11/12 m-auto" >
<div>
                <input className="sm:w-40 w-full focus:w-full p-2 px-3 rounded-full my-4 ease-in-out duration-700 outline-none
                border-gray-100 border bg-white text-gray-700 font-extralight" onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Buscar'/>
            </div>
<section className="w-full flex flex-wrap justify-evenly sm:justify-start mt-2 mb-6 gap-2 sm:gap-6">
            {categories?.map(cat=>{
                if (filteredData.map(dish=>{return (dish.categoria)}).includes(cat))
                {
                return(<a key={cat} href={`#${cat}`} className="px-3 py-2 shadow text-gray-600 rounded-full bg-slate-200 text-sm scroll-smooth">{cat}</a>)}
            })}
            </section>

        <div className="flex  flex-row  flex-wrap gap-4">

            
        
        <div className="w-full">
        {
            
           categories?.map((cat)=>{
                
               const filtro = filteredData.filter(dish=>dish.categoria===cat)

               if (filtro.length !== 0) { return(<div key={cat} id={cat} className="w-full flex flex-col bg-white rounded-lg shadow mb-3 p-2">

                    <div className="text-left sm:text-center text-gray-700 font-semibold text-3xl sm:text-4xl py-3">{cat} </div>

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
           }
                    
                
            })
        }
        
        </div>
        
        
        </div>
        </section>        }    

        </div>

        
    )
}

export default Data
