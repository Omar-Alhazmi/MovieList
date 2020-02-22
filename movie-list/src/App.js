import React  from 'react';
import Searchbar from './components/Searchbar';
import MovieList from './components/MovieList';
import PaginationCo from './components/PaginationCo';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [],
      userseach:'',
      totalPages:0,
      currentPage: 1,

    };
    this.apiKey = process.env.REACT_APP_API
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
      console.log(response.data.total_pages);
      this.setState({ content:[...response.data.results], totalPages: response.data.total_pages})
     })
      
    .catch(err => {
      console.log(err);
    });
  }
  handleChange = (e) =>{
      this.setState({userseach: e.target.value})
  }

  nextPage = (pageNumber) => {

    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.userseach}&page=${pageNumber}`
    })
    .then(response => {
      console.log(response) 
      console.log(`tootalPage is ${response.data.total_pages}`);
      this.setState({ totalPage:[...response.data.results], currentPage: pageNumber})
     })
      
    .catch(err => {
      console.log(err);
    });
  }


  render() {
    const st = this.state;
    return (
        <div className="film-library">

          <Searchbar handleDetails={this.handleDetails} handleChange = {this.handleChange} />
          <MovieList content={st.content}/>
          {st.totalPages >= 2 ?  <PaginationCo pages = {st.totalPages} nextPage = {this.nextPage} currentPage = {st.currentPage}/> :''}
        
        </div>
    );
  }
}

