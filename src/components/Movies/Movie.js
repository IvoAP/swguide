import React, { useEffect, useState } from "react";
import './Movies.css'
import { useLocation } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, Container,} from 'semantic-ui-react';
import { useNavigate } from "react-router";



export default function Movie(){

    let navigate = useNavigate()

    // Movie
    const [id, setMovieId] = useState()
    const [movie, setMovie] = useState({})
    const [load, setLoad] = useState(false)
    let location = useLocation();

    // Charactert
    const [idCharacters, setIdCharacters] = useState([])
    const[charactersNames, setCharactersNames] = useState([])


    useEffect(() => {
        function getIdMovie(){
            let path = location.pathname
            let curr_id = ""
            for( let auto of path){
                // Check if is  a number
                if(!isNaN(auto)){
                    curr_id = curr_id + auto
                }
            }
            setMovieId(
                 curr_id
            )
           
        }
        getIdMovie()

      }, [])

      useEffect(() => {
        async function fetchDatas() {
            // variables to fetch
            let url = 'https://swapi.dev/api/films/'+id+'/?format=json'
            let rep = await fetch(url)
            let data = await rep.json()
            // varialbles to get ids of the characters
            let flag = false
            let listOfIds = []
            let curr_id = ""
            var urlsPeoples = String(data.characters)
            for(let auto of urlsPeoples){
                if (!isNaN(auto)){
                    flag = true
                }else{
                    if(curr_id != ""){
                        listOfIds.push(curr_id)
                        curr_id = ""
                    }
                    flag = false
                }

                if(flag){
                    curr_id  = curr_id + auto
                }

            }

           
            //variables to get the name of the charactes
            let results = []
            let data2 = null
            for (var i = 0; i<listOfIds.length; i++) {
                let id = listOfIds[i]
                let rep = await fetch('https://swapi.dev/api/people/'+id+'/?format=json')
                data2 = await rep.json()
                results.push(data2.name)
            }
            
            setIdCharacters(listOfIds)
            setMovie(data)
            setCharactersNames(results)
            setLoad(true)
        }

      
        
        fetchDatas()
        

    },[load])

    console.log("Ids :" + charactersNames)

    return (
        <div>
            <Container>
                <Card className="card">
                    <CardContent className="container">
                        <CardHeader>{movie.title}</CardHeader>
                        <CardDescription>
                            <strong>Episode</strong>
                            <p>{movie.episode_id}</p>
                            <strong>Opening crawl</strong>
                            <p>{movie.opening_crawl}</p>
                            <strong>Director</strong>
                            <p>{movie.director}</p>
                            <strong>Producer</strong>
                            <p>{movie.producer}</p>
                            <strong>Release date</strong>
                            <p>{movie.release_date}</p>
                            <strong>Characters</strong>
                            {charactersNames.map((name,i) => {
                                return(
                                    <div>
                                        <p>{i+1} - {name}</p>
                                        <button className="btn-secondary" onClick={() => { navigate("/character/" + (idCharacters[i])) }}>
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
            </Container>
        </div>
    );

}