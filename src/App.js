import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {movies} from './data'
import Addmovie from './components/Addmovie/Addmovie';
import { Link, Route, Routes } from 'react-router-dom';
import Details from './components/details/Details';
import Home from './Pages/Home';

function App() {
   
  const [datamovies, setmovies] = useState(movies)

  function filter(title){
    setmovies(datamovies.filter(el=>el.title.toLowerCase().includes(title.toLowerCase())))
  }
  function filterrating(rating){
    setmovies(datamovies.filter(el=>el.rating>=rating))
  }
 function addmovie(newtitle,newdesc,newurl,newrating){

  setmovies([...datamovies,{title:newtitle,description:newdesc,posterUrl:newurl,rating:newrating}])
}

  return (<>
    <nav>
      <Link to={'/add'} >  <button>add movie</button></Link>
      <Link to={'/'} >  <button>home</button></Link>
    </nav>
    <Routes>
      
      <Route path='/' element={ <Home  filter={filter} filterrating={filterrating} movies={datamovies} />  } />
       <Route path='/add' element={  <Addmovie  addmovie={addmovie} />} />
      <Route  path='/details/:id' element={<Details  data={datamovies} />} />

   </Routes>
   </>
  )
}

export default App




