import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

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
      <p>Hello</p>
    </div>
  );
}

export default App;
