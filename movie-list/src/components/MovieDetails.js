import React from 'react';
import './moviedetail.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//this component take the movie information from the MovieList component
//and handle display  in the page
export default function MovieDetails(props) {
    return (

        <div className="card__collection clear-fix" onClick={() => { props.viewMovieDetails(props.movieId) }}>
            <div className="cards cards--three">
                {
                    props.image == null ? <img className="img-responsive" variant="top" src={`https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png`} alt="Movie Image" /> : <img className="img-responsive" variant="top" src={`https://image.tmdb.org/t/p/w780/${props.image}`} alt="Movie Image" />
                }
                <span className="cards--three__rect-1">
                    <span className="shadow-1"></span>
                    <p>{props.title}</p>
                </span>
                <span className="cards--three__rect-2">
                    <span className="shadow-2"></span>
                </span>
                <span className="cards--three__circle"></span>
                <ul className="cards--three__list">
                    <li class="w3-xxxlarge"><CircularProgressbar value={props.voteAverage} maxValue={10} text={`${props.voteAverage === 0 ? 'NR' : props.voteAverage * 10}%`} /> </li>
                </ul>


            </div>
        </div>



    )
}
