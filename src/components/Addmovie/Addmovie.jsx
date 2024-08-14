import React, { useState } from 'react'
import './addmovie.css'
import { Link, useNavigate } from 'react-router-dom'

function Addmovie({addmovie}) {

    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [url, seturl] = useState('')
    const [rating, setrating] = useState(0)
    const navigate=useNavigate()

    const handlesubmit=(e)=>{
      e.preventDefault()
        addmovie(title,desc,url,rating)
       navigate('/')
    }

  return (
    <form    onSubmit={handlesubmit}   >
        <label>title:</label>
        <input   className='input' onChange={(e)=>settitle(e.target.value)}/>
        <label>description:</label>
        <input  className='input'  onChange={(e)=>setdesc(e.target.value)} />
        <label>url:</label>
        <input className='input' type='text'  onChange={(e)=>seturl(e.target.value)}  />
        <label>rating:</label>
        <input className='input'   type='number'  min={0} max={5} onChange={(e)=>setrating(e.target.value)}/>
        <button>save</button>
 
    </form>
  )
}

export default Addmovie