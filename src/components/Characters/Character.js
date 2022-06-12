import React, { useEffect, useState } from "react";
import './Characters.css'
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, Container,} from 'semantic-ui-react';
import axios from "axios";


export default function Character() {

    const [id, setPeopleId] = useState()
    const [people, setPeople] = useState({})
    let location = useLocation();

    useEffect(() => {

        function getId(){
            console.log(location)
            let path = location.pathname
            let curr_id = ""
            for( let auto of path){
                // Check if is not a number
                if(!isNaN(auto)){
                    curr_id = curr_id + auto
                }
            }

            setPeopleId(
                 curr_id
            )
        }

        async function fetchPeople() {
            if(id >= 1 && id <=10){
                let url = 'https://swapi.dev/api/people/'+id+'/?format=json'
                let rep = await fetch(url)
                let data = await rep.json()
                setPeople(data)
            }
            
        }

       
    
        

        getId()
        fetchPeople()
        
      }, [])

      console.log(typeof(id))

    return (
        <div>
            <Container>
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
                            </CardDescription>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}