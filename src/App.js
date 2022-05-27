import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import { Container } from 'semantic-ui-react';
import Home from './components/Home'
import Character from './components/Characters/Characters'
import Planets from './components/Planets/Planets'
import Movies from './components/Movies/Movies'
import Species from './components/Species/Species';

function App() {

  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])
  const [species, setSpecises] = useState([])

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

    async function fetchSpecies() {
      let rep = await fetch('https://swapi.dev/api/species/?format=json')
      let data = await rep.json()
      setSpecises(data.results)
    }

    fetchPeople()
    fetchPlanets()
    fetchFilms()
    fetchSpecies()
    setLoading(false)
  }, [])


  console.log("Species: ", species)

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Container>
          {loading ? (
            <div>
              <h1 className='load'>Loading...</h1>
            </div>
          ) : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route exact path='/characters' element={<Character data={people} />} />
              <Route path='/movies' element={<Movies data={films} />} />
              <Route path='/planets' element={<Planets data={planets} />} />
              <Route path='/species' element={<Species data={species} />} />
            </Routes>
          )}

        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
