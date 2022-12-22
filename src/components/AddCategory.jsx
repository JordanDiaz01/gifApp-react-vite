import React from 'react'
import { useState } from 'react'

export function AddCategory({onNewCategory}) {
  
    const [inputValue, setinputValue] = useState('One Punch')
    
    const handleInputonChange = ({target}) =>{
        //console.log(target.value)
        setinputValue(target.value)
    }

    const handleonSubmit = (ev) =>{
        ev.preventDefault()
        if(inputValue.trim().length <=1) return
        onNewCategory(inputValue.trim())
        setinputValue('')
    }
    
  
    return (
        <form onSubmit={handleonSubmit}>
            <input 
            type="text" 
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={handleInputonChange} 
            />
        </form>
  )
}

