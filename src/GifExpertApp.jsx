import React from 'react'
import { useState } from 'react'
import {AddCategory,GifGrid} from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Valorant'])    
    
    
    const handleOnAddCategory  = (newCategory)=>{
        
        if(categories.includes(newCategory)) {
            alert('esa categoria ya existe!')
            return
        }
        setCategories(cat =>[newCategory,...cat])
        
    }
    return (
        <>
            
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                
                onNewCategory = {handleOnAddCategory} 
            />

            {/* listado de gifs */}
            {
                categories.map((cat) => 
                    <GifGrid 
                    key={cat}
                    category= {cat}
                    />
                )
            }
            
           
        </>
    )
}
