import React, {createContext, useState, useEffect} from "react"

import {fetchData} from '../api'


export const DataContext = createContext()



export const DataProvider = ({children}) => {
    
    const [data, setData] = useState()
    const [selectedDish, setSelectedDish] = useState(null)
    const [showLoading, setShowLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
          const dataApi = await fetchData.fetch();
    
          setData(dataApi);
          setShowLoading(false)
          
        };
        getData();
      }, []);

    
    const selectDish = (dishId) =>{
        setSelectedDish(data.filter(dish=>dish.id===dishId)[0])
        }


    return (
        <DataContext.Provider value={{data, selectedDish, selectDish, showLoading, setShowLoading}}>
            {children}
        </DataContext.Provider>
    )
}
