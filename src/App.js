import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

import './App.css';

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors) 
    } catch (error) {
      setError(true)
      console.log(error)
    }
    
  }
  return (
    <>
       <section className="container">
         <h3>color generator app</h3>

         <form onSubmit={handleSubmit}>
           <input 
           type="text" 
           value={color} 
           onChange={(e) => setColor(e.target.value)}
           placeholder='#f15025'
           className={`${error ? 'error' : 'null'}`}
           />
           <button 
           className='btn' 
           type='submit'
           >
             submit
           </button>

         </form>
       </section> 
  <h4 style={{ marginLeft: '35px'}}>Please Input a valid hex-color to copy various color gradient by clicking on the color squares</h4>
       <section className="colors">
         {list.map((color, index) => {

           return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
         })}
        </section>  
    </>
  );
}

export default App;
