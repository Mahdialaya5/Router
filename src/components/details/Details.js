import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Details({data}) {

    const params=useParams()
    const obj=data.find(el=>el.id==params.id)

    console.log(obj);
  return (
    <div>
   <iframe  src={obj.trailerSrc} >  </iframe>
   <Link to={'/'} ><button>return</button></Link>
    </div>
  )
}

export default Details