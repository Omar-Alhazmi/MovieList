import React  from 'react';
import Searchbar from './components/Searchbar';
import MovieList from './components/MovieList';
import PaginationCo from './components/PaginationCo'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [],
      userseach:'',
      totalPage:0,
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
    const PageUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.userseach}&page=${pageNumber}`
    axios({
      method: 'GET',
      url: PageUrl
    })
    .then(response => {
      console.log(response) 
      console.log(`tootalPage is ${response.data.results.total_pages}`);
      console.log(response.data.results.total_pages);
      this.setState({ content:[...response.data.results],currentPage: pageNumber})
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
          {st.totalPage >= 2 ?  <PaginationCo pages = {st.totalPage} nextPage = {this.nextPage} currentPage = {st.currentPage}/> :''}
        
        </div>
    );
  }
}

