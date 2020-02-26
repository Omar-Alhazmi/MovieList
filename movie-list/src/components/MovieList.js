import React from 'react'
import './Movielist.css'
import MovieDetails from './MovieDetails'
import {
   CardGroup

} from 'react-bootstrap';

export default class MovieList extends React.Component {

  
     

    render() {

    return (

   
        <CardGroup className="cardg">

            {
                this.props.content.map((movie, index) => {
                    return (
                        <MovieDetails key={index} image={movie.poster_path} alt="Card image cap" 
                        movieId = {movie.id}
                        title={movie.title}
                        overview={movie.overview}
                        voteAverage={movie.vote_average}
                        viewMovieDetails = {this.props.viewMovieDetails}
                        />

                    )
                })
            }
</CardGroup>






    )
}}

