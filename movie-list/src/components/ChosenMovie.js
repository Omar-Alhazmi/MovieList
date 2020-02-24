import React from 'react'
import './chosenMovie.css';



export default function ChosenMovie(props) {
  const background = `https://image.tmdb.org/t/p/w780/${props.currentMovie.poster_path}`
    return (

<div className="movie_card" id="bright" style={{backgroundImage:`url(${background})`}}>
  <div className="info_section">
    <div className="movie_header">
    {
                     props.currentMovie.poster_path == null ? <img className="locandina" alt="..." src={`https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png`} alt="Movie Image" /> : <img className="locandina" alt="..." src={`https://image.tmdb.org/t/p/w780/${props.currentMovie.poster_path}`} alt="Movie Image" />
                    }
      <h1>{props.currentMovie.title}</h1>
      <h4>{props.currentMovie.release_date}</h4>
      <p className="type">Action, Crime, Fantasy</p>
    </div>
    <div className="movie_desc">
      <p className="text">
      {props.currentMovie.overview}
      </p>
    </div>
    <div className="movie_social">
      <ul>
      <li><i className="material-icons" onClick={props.closeMovieDetails}>arrow_back</i></li>
        <li><i className="material-icons">share</i></li>
        <li><i className="material-icons"></i></li>
        <li><i className="material-icons">chat_bubble</i></li>
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back" ></div>
</div>


    )
}
