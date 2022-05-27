import React from "react";
import { Card, CardContent, CardDescription, CardHeader, Container, Grid } from 'semantic-ui-react';
import "./Species.css"

export default function Species({ data }) {

    return (
        <div>
            <h1>Species</h1>
            <Grid collums={3}>
                {data.map((specie, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Container>
                                <Card className="card">
                                    <CardContent className="container">
                                        <CardHeader>{specie.name}</CardHeader>
                                        <CardDescription>
                                            <strong>Classification</strong>
                                            <p>{specie.classification}</p>
                                            <strong>Designation</strong>
                                            <p>{specie.designation}</p>
                                            <strong>Average height</strong>
                                            <p>{specie.average_height}</p>
                                            <strong>Skin colors</strong>
                                            <p>{specie.skin_colors}</p>
                                            <strong>Hair colors</strong>
                                            <p>{specie.hair_colors}</p>
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