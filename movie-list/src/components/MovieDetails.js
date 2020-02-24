import React from 'react';
import './moviedetail.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Card} from 'react-bootstrap';


export default function MovieDetails(props) {
    return (
        <div>
            
                <Card style={{ width:'25rem'}}  onClick={()=> props.viewMovieDetails(props.movieId)}>
                    <div  className="cip" >     <CircularProgressbar value={props.voteAverage} maxValue={10} text={`${props.voteAverage === 0 ? 'NR' : props.voteAverage * 10 }%`} />
</div>
                    {
                        props.image == null ? <Card.Img variant="top" src={`https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png`} alt="Movie Image" /> : <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w780/${props.image}`} alt="Movie Image" />
                    }
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className="textf">
                {props.overview}
                </Card.Text>
                    </Card.Body>
                    </Card>



        </div>


    )
}
