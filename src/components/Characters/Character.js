import React, { useEffect, useState } from "react";
import './Characters.css'
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, Container, } from 'semantic-ui-react';
import { useNavigate } from "react-router";
import Load from "../Load/Load";


export default function Character() {

    let navigate = useNavigate()

    // Character
    const [id, setPeopleId] = useState()
    const [people, setPeople] = useState({})
    const [load, setLoad] = useState(false)
    const [loadPage, setLoadPage] = useState(false)
    let location = useLocation();

    // Movies List
    const [idMovies, setIdMovies] = useState([])
    const [moviesNames, setMoviesNames] = useState([])

    useEffect(() => {
        function getIdCharacter() {
            let path = location.pathname
            let curr_id = ""
            for (let auto of path) {
                // Check if is  a number
                if (!isNaN(auto)) {
                    curr_id = curr_id + auto
                }
            }
            setPeopleId(
                curr_id
            )

        }
        getIdCharacter()

    }, [])

    useEffect(() => {
        async function fetchDatas() {
            // variables to fetch
            let url = 'https://swapi.dev/api/people/' + id + '/?format=json'
            let rep = await fetch(url)
            let data = await rep.json()
            // varialbles to get ids of the movies 
            let flag = false
            let listOfIds = []
            let curr_id = ""
            var urlsMovies = String(data.films)
            for (let auto of urlsMovies) {
                if (!isNaN(auto)) {
                    flag = true
                } else {
                    if (curr_id != "") {
                        listOfIds.push(curr_id)
                        curr_id = ""
                    }
                    flag = false
                }

                if (flag) {
                    curr_id = curr_id + auto
                }

            }


            //variables to get the name of the movies
            let results = []
            let data2 = null
            for (var i = 0; i < listOfIds.length; i++) {
                let id = listOfIds[i]
                let rep = await fetch('https://swapi.dev/api/films/' + id + '/?format=json')
                data2 = await rep.json()
                results.push(data2.title)
            }

            setIdMovies(listOfIds)
            setPeople(data)
            setMoviesNames(results)
            setLoad(true)
            setLoadPage(true)
        }



        fetchDatas()


    }, [load])



    console.log("Movies names " + moviesNames)





    return (
        <div>
            <Container>
                {loadPage ? (
                    <Card className="card">
                        <CardContent className="container">
                            <CardHeader>{people.name}</CardHeader>
                            <CardDescription>
                                <strong>Height</strong>
                                <p>{people.height}</p>
                                <strong>Mass</strong>
                                <p>{people.mass}</p>
                                <strong>Hair Color</strong>
                                <p>{people.hair_color}</p>
                                <strong>Skin Color</strong>
                                <p>{people.skin_color}</p>
                                <strong>Eye Color</strong>
                                <p>{people.eye_color}</p>
                                <strong>Movies</strong>
                                {moviesNames.map((title, i) => {
                                    return (
                                        <div>
                                            <p>{i + 1} - {title}</p>
                                            <button className="btn-secondary" onClick={() => { navigate("/movie/" + (idMovies[i])) }}>
                                                See More
                                            </button>
                                            <br></br>
                                            <br></br>
                                        </div>
                                    )
                                })}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ) : (
                    <Load></Load>
                )}

            </Container>
        </div>
    );
}