import React from 'react'
import Filter from '../components/Filter/Filter'
import MovieList from '../components/MovieList/MovieList'
import { Link } from 'react-router-dom'

function Home({filter,filterrating,movies}) {
  return (
        <>
         <Filter  filter={filter}  filterrating={filterrating} />
         <MovieList   data={movies}  />
          </>
  )
}

export default Home