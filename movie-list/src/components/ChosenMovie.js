import React from 'react'
import './chosenMovie.css';
import * as firebase from 'firebase';
import 'firebase/database';
import Drawer from 'react-drag-drawer'
import { Form, Button } from 'reactstrap';
export default class ChosenMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      toggle: false,
      reviews: [],
      name: "",
      review: ""
    }
    this.createreviews = this.createreviews.bind(this);
  }

  componentDidMount() {
    this.db = firebase.database();

    this.listenForChange();
  }

  listenForChange() {
    this.db.ref('reviews').on('child_added', snapshot => {
      let review = {
        id: snapshot.key,
        name: snapshot.val().name,
        review: snapshot.val().review
      }

      let reviews = this.state.reviews;
      reviews.push(review);

      this.setState({
        reviews: reviews
      });
    });

}
  onChangeHandler(evt, key) {
    this.setState({
      [key]: evt.target.value
    });
  }

  createreviews() {

    firebase.database().ref('reviews').push({
      name: this.state.name,
      review: this.state.review
    })
  }


  toggle = () => {
    let { toggle } = this.state
    let { open } = this.state
    this.setState({ toggle: !toggle, open: !open })
  }

  logState = () => {
    console.log(`Drawer now ${this.state.open ? 'open' : 'closed'}`)
  }
  removereview(id) {
    firebase.database().ref('reviews').child(id).remove();
  this.db.ref('reviews').on('child_removed', snapshot => {
    let reviews = this.state.reviews;
    reviews = reviews.filter(review => reviews.id !== snapshot.key);
    this.setState({
      reviews: reviews
    });
  });
};
  render() {
    const { open } = this.state

    const background = `https://image.tmdb.org/t/p/w780/${this.props.currentMovie.poster_path}`
    return (

      <div>
        
        <div class="movie_card" id="bright" style={{backgroundImage: `url(${background})`}} >
            <div class="info_section">
              <div class="movie_header">

              {
                        this.props.currentMovie.poster_path == null ? <img className="locandina" alt="..." src={`https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png`} alt="Movie Image" /> : <img className="locandina" alt="..." src={`https://image.tmdb.org/t/p/w780/${this.props.currentMovie.poster_path}`} alt="Movie Image" />
                      }                <h1>{this.props.currentMovie.title}</h1>
                <h4></h4>
                <span class="minutes"></span>
                <p class="type"></p>
              </div>
              <div class="movie_desc">
                <p class="text">
                  {this.props.currentMovie.overview}
                </p>
              </div>
              <div class="movie_social">
                <ul>
                  <li><i class="material-icons">share</i></li>
                  <li><i className="material-icons" onClick={this.getSales}></i></li>
                  <li><i className="material-icons" onClick={this.toggle}>chat_bubble</i></li>
                </ul>
              </div>
            </div>
            
            <div class="blur_back bright_back"></div> 
            </div>
              {this.state.reviews.map(revie => (
              <div class="movie_card" id="tomb" key={revie.id} style={{
                backgroundImage: `url(${background})`}} >
                  <div class="info_section">
                    <div class="movie_header">
                      {
                        this.props.currentMovie.poster_path == null ? <img className="locandina" alt="..." src={`https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png`} alt="Movie Image" /> : <img className="locandina" alt="..." src={`https://image.tmdb.org/t/p/w780/${this.props.currentMovie.poster_path}`} alt="Movie Image" />
                      }
                      <h1>{revie.name}</h1>

                      <h4></h4>
                      <span class="minutes"></span>
                      <p class="type"></p>
                    </div>
                    <div class="movie_desc">
                      <p class="text">
                        {revie.review}     </p>
                    </div>
                    <div class="movie_social">
                      <ul>
                        <li><i class="material-icons">share</i></li>
                        <li><i class="material-icons"  onClick={() => this.removereview(revie.id)}></i></li>
                        <li><i class="material-icons">chat_bubble</i></li>
                      </ul>
                    </div>
                  </div>
                  <div class="blur_back tomb_back"></div>
                    </div>

    ))
  }
            <Drawer
  open={open}
  onRequestClose={this.toggle}>
  <div>
    <Form onSubmit={this.createreviews}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(evt) => this.onChangeHandler(evt, 'name')}
        value={this.state.name}
      />
      <input
        type="textarea"
        name="review"
        placeholder="review"
        onChange={(evt) => this.onChangeHandler(evt, 'review')}
        value={this.state.review}
      />
      <Button outline color="secondary" onClick={this.createreviews}>Submit</Button>
    </Form>
  </div>

</Drawer>
          </div >


        )
  }
              }

