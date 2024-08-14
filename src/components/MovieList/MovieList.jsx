import React from 'react'
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'

export default function MovieList({data}) {
  return (
    <div  className='movies'  >
 {data.map((el)=><MovieCard  el={el}     />) }

    </div>
  )
}
