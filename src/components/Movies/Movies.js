import React from "react";
import { Card, CardContent, CardDescription, CardHeader, Container, Grid } from 'semantic-ui-react';
import './Movies.css'

export default function Movies({ data }) {

    return (
        <div>
            <h1>Movies</h1>
            <Grid collums={3}>
                {data.map((film, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Container>
                                <Card className="card">
                                    <CardContent className="container">
                                        <CardHeader>{film.title}</CardHeader>
                                        <CardDescription>
                                            <strong>Episode</strong>
                                            <p>{film.episode_id}</p>
                                            <strong>Opening crawl</strong>
                                            <p>{film.opening_crawl}</p>
                                            <strong>Director</strong>
                                            <p>{film.director}</p>
                                            <strong>Producer</strong>
                                            <p>{film.producer}</p>
                                            <strong>Release date</strong>
                                            <p>{film.release_date}</p>
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