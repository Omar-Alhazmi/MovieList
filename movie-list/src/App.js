import React from 'react';
import Searchbar from './components/Searchbar';
import MovieList from './components/MovieList';
import PaginationCo from './components/PaginationCo';
import ChosenMovie from './components/ChosenMovie';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [],
     // miancontent: content,
      userseach: '',
      totalPages: 0,
      currentPage: 1,
      currentMovie: null,


    };
    this.apiKey = process.env.REACT_APP_API
  }
  nextPage = (pageNumber) => {

    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.userseach}&page=${pageNumber}`
    })
      .then(response => {
        console.log(response)
        console.log(`tootalPage is ${response.data.total_pages}`);
        this.setState({ content: [...response.data.results], currentPageSearch: pageNumber })
      })

      .catch(err => {
        console.log(err);
      });
  }

  handleDetails = (e) => {
    e.preventDefault();
    const moviurl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.userseach}`
    axios({
      method: 'GET',
      url: moviurl
    })
      .then(response => {
        console.log(response)
        console.log(`Fetching details for ${response.data.results}`);
        console.log(response.data)
        this.setState({ content: [...response.data.results], totalPages: response.data.total_pages })
      })

      .catch(err => {
        console.log(err);
      });
  }
  handleChange = (e) => {
    this.setState({ userseach: e.target.value })
  }

  nextPageMain = (pageNumber) => {

    const topRatedMovi = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=${pageNumber}`
    axios({
      method: 'GET',
      url: topRatedMovi
    })
      .then(response => {
        console.log(response)
        console.log(`Fetching details for ${response.data.results}`);
        console.log(response.data)
        this.setState({ content: [...response.data.results], currentPage: pageNumber })
      })

      .catch(err => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({ userseach: e.target.value })
  }
  viewMovieDetails = (id) => {
    const movieDetail = this.state.content.filter(movie => movie.id === id);
    const filterdMovie = movieDetail.length > 0 ? movieDetail[0] : null;

    this.setState({ currentMovie: filterdMovie })
  }
  closeMovieDetails = () => {
    this.setState({ currentMovie: null })
  }


  render() {
    const st = this.state;
    return (
      <div className="film-library">
        {st.currentMovie == null ? <div> <Searchbar handleDetails={this.handleDetails} handleChange={this.handleChange} />
                                  <MovieList content={st.content} viewMovieDetails={this.viewMovieDetails} /> </div> : 
                                  <ChosenMovie currentMovie={st.currentMovie} closeMovieDetails={this.closeMovieDetails}/>}
        {st.totalPages >= 2 && st.currentMovie == null ? <PaginationCo currentPageSearch={st.currentPageSearch} pages={st.totalPages} totalMainPages={st.totalMainPages} totalSearchPages={st.totalSearchPages} nextPageMain={this.nextPageMain} nextPage={this.nextPage} currentPage={st.currentPage} /> : ''}

      </div>
    );
  }

  componentDidMount() {
    const topRatedMoviUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US`
    axios({
      method: 'GET',
      url: topRatedMoviUrl
    })
      .then(response => {
        console.log(response)
        console.log(`Fetching details for ${response.data.results}`);
        console.log(response.data)
        this.setState({ content: [...response.data.results], totalPages: response.data.total_pages })
      })

      .catch(err => {
        console.log(err);
      });
   
  }
}


