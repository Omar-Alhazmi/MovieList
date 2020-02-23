import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';


export default function MovieDetails(props) {
    return (
        <div>
            <Container>

                <Card style={{ width: '18rem' }}>
                    {
                        props.image == null ? <Card.Img variant="top" src={`https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png`} alt="Movie Image" /> : <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w780/${props.image}`} alt="Movie Image" />
                   
                    }
                          <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                        <Card.Text>
                        {props.overview}
                         </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
          </Card>
            </Container>


        </div>


    )
}
