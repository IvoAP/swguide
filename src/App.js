import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import { Container } from 'semantic-ui-react';
import Home from './components/Home'
import Character from './components/Character'
import Planets from './components/Planets'
import Movies from './components/Movies'

function App() {

  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])

  // We will use this for refreshing data
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchPeople() {
      let rep = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await rep.json()
      setPeople(data.results)
    }

    async function fetchPlanets() {
      let rep = await fetch('https://swapi.dev/api/planets/?format=json')
      let data = await rep.json()
      setPlanets(data.results)
    }

    async function fetchFilms() {
      let rep = await fetch('https://swapi.dev/api/films/?format=json')
      let data = await rep.json()
      setFilms(data.results)
    }

    fetchPeople()
    fetchPlanets()
    fetchFilms()
  }, [])



  return (
    <div>
      <BrowserRouter>
        <div className='Container'>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Character />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/planets' element={<Planets />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
