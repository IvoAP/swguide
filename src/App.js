import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import { Container } from 'semantic-ui-react';
import Home from './components/Home'
import Characters from './components/Characters/Characters'
import Planets from './components/Planets/Planets'
import Movies from './components/Movies/Movies'
import Species from './components/Species/Species';
import Character from './components/Characters/Character';
import Movie from './components/Movies/Movie';

function App() {

  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])
  const [species, setSpecises] = useState([])

  // We will use this for refreshing data
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchPeople() {
      let results = []
      let data = null
      for (var i = 1; i < 10; i++) {
        let rep = await fetch(`https://swapi.dev/api/people/?format=json&page=${i}`)
        data = await rep.json()
        data.results.map(item => results.push(item));
      }
      setPeople(results)
    }

    async function fetchPlanets() {
      let results = []
      let data = null
      for(var i = 1; i<=6; i++){
        console.log(i)
        let rep = await fetch(`https://swapi.dev/api/planets/?format=json&page=${i}`)
        data = await rep.json()
        data.results.map(item => results.push(item));
        console.log(i)
        console.log(data.results)
      }
      setPlanets(results)
    }

    async function fetchFilms() {
      let rep = await fetch('https://swapi.dev/api/films/?format=json')
      let data = await rep.json()
      setFilms(data.results)
    }

    async function fetchSpecies() {
      let results = []
      let data = null
      for(var i = 1; i<=2; i++){
        let rep = await fetch(`https://swapi.dev/api/species/?format=json&page=${1}`)
        data = await rep.json()
        data.results.map(item => results.push(item));
      }
        // let data = await rep.json()
      setSpecises(results)
    }

    fetchPeople()
    fetchPlanets()
    fetchFilms()
    fetchSpecies()
  }, [])



  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters data={people} />} />
            <Route path='/movies' element={<Movies data={films} />} />
            <Route path='/planets' element={<Planets data={planets} />} />
            <Route path='/species' element={<Species data={species} />} />
            <Route path='/character/:id' element={<Character />} />
            <Route path='/movie/:id' element = {<Movie/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
