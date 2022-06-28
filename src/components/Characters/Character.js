import React, { useEffect, useState } from "react";
import './Characters.css'
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, Container,} from 'semantic-ui-react';


export default function Character() {

    const [id, setPeopleId] = useState()
    const [people, setPeople] = useState({})
    const [loadPeople, setLoadPeople] = useState(false)
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
        getId()

      }, [])

    useEffect(() => {
        async function fetchPeople() {
            let url = 'https://swapi.dev/api/people/'+id+'/?format=json'
            let rep = await fetch(url)
            let data = await rep.json()
            /* TODO: Pode lançar um erro caso o usuário tente acessar um pessoal que não existe */
            // if(data && data.detail === 'Not found') {
            //     throw new Error('Personagem não encontrado')
            // }
            setPeople(data)
            setLoadPeople(true)
        }
        fetchPeople()

    },[loadPeople])

    

    console.log(people)

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