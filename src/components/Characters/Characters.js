import React from "react";
import { Card, CardContent, CardDescription, CardHeader, Container, Grid } from 'semantic-ui-react';
import { useNavigate } from "react-router";
import './Characters.css'

export default function Characters({ data }) {

    let navigate = useNavigate()

    return (
        <div>
            <h1>Characters</h1>
            <Grid collums={3}>
                {data.map((people, i) => {
                    return (
                        <Grid.Column key={i}>
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
                                            <button className="btn-secondary" onClick={() => { navigate("/character/" + (i+1)) }}>
                                                See More
                                            </button>
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <br></br>
                                <br></br>
                            </Container>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </div>
    );
}