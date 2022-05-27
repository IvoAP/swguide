import React from "react";
import { Card, CardContent, CardDescription, CardHeader, Container, Grid } from 'semantic-ui-react';
import './Planets.css'

export default function Planets({ data }) {

    return (
        <div>
            <h1>Planets</h1>
            <Grid collums={3}>
                {data.map((planet, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Container>
                                <Card className="card">
                                    <CardContent className="container">
                                        <CardHeader>{planet.name}</CardHeader>
                                        <CardDescription>
                                            <strong>Rotation period</strong>
                                            <p>{planet.rotation_period}</p>
                                            <strong>Orbital period</strong>
                                            <p>{planet.orbital_period}</p>
                                            <strong>Diameter</strong>
                                            <p>{planet.diameter}</p>
                                            <strong>Climate</strong>
                                            <p>{planet.climate}</p>
                                            <strong>gravity</strong>
                                            <p>{planet.gravity}</p>
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