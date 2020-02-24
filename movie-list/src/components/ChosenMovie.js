import React from 'react'
import {
    Card,  Button,
} from 'react-bootstrap';

export default function ChosenMovie(props) {
    return (

        <Card style={{ width:'25rem'}} >

            <Button variant="primary" onClick={props.closeMovieDetails}>Go somewhere</Button>
          
                    {
                     props.currentMovie.poster_path == null ? <Card.Img  className="card-img" alt="..." src={`https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png`} alt="Movie Image" /> 
                     : <Card.Img  className="card-img" alt="..." src={`https://image.tmdb.org/t/p/w780/${props.currentMovie.poster_path}`} alt="Movie Image" />
                    }
                <Card.Body>
                <Card.Title>{props.currentMovie.title}</Card.Title>
                <Card.Text className="textf">
                {props.currentMovie.overview}
                </Card.Text>
                </Card.Body>
                    </Card>
    )
}
