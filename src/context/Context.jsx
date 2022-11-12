import React, {createContext, useState, useEffect} from "react"

import {fetchData} from '../api'


export const DataContext = createContext()



export const DataProvider = ({children}) => {
    
    const [data, setData] = useState()
    const [categoriesData, setCategoriesData] = useState()
    const [selectedDish, setSelectedDish] = useState(null)
    const [showLoading, setShowLoading] = useState(true)

    const getData = async () => {
        const dataApi = await fetchData.fetchMenuData();
  
        setData(dataApi);
        setShowLoading(false)
        
      };

      const getCategories = async () => {
        const dataApi = await fetchData.fetchCategories();
  
        setCategoriesData(dataApi.sort((a, b) => {return (+a.posicion > +b.posicion) ? 1 : -1}));
        
        
      };
    
    
    useEffect(() => {
        getCategories();
        getData();
      }, []);

    
    const selectDish = (dishId) =>{
        setSelectedDish(data.filter(dish=>dish.id===dishId)[0])
        }


    return (
        <DataContext.Provider value={{data, categoriesData, selectedDish, selectDish, showLoading, setShowLoading}}>
            {children}
        </DataContext.Provider>
    )
}
