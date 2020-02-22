import React from 'react'
import MovieDetails from './MovieDetails'
import {
   CardColumns,

} from 'react-bootstrap';

export default function MovieList(props) {
    return (
        <CardColumns>

            {
                props.content.map((movie, index) => {
                    return (
                        <MovieDetails key={index} image={movie.poster_path} alt="Card image cap" />

                    )
                })
            }
        </CardColumns>
    )
}
