import React from 'react'
import './chosenMovie.css';
import * as firebase from 'firebase';
import 'firebase/database';
import { CircularProgressbar } from 'react-circular-progressbar';
import Drawer from 'react-drag-drawer'
import { Form, Button } from 'reactstrap';
export default class ChosenMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      toggle: false,
      hide: true,
      reviews: [],
      name: "",
      review: "",
      isFave: false,
      currentID: '',
    }
    this.createreviews = this.createreviews.bind(this);
  }

  componentDidMount() {
    this.db = firebase.database();
    this.listenForChange();
  }
// this function responsible for  connection with the database 
  listenForChange() {
    this.db.ref('reviews').on('child_added', snapshot => {
      let review = {
        id: snapshot.key,
        name: snapshot.val().name,
        review: snapshot.val().review,
      }
  let reviews = this.state.reviews;
      reviews.push(review);

      this.setState({
        reviews: reviews
      });
    });
  }
// this function responsible for handle user input 
  onChangeHandler(evt, key) {
    this.setState({
      [key]: evt.target.value
    });
  }
// this function responsible for push user input to the database
  createreviews() {

    firebase.database().ref('reviews').push({
      name: this.state.name,
      review: this.state.review
    })
  }

// this function responsible for view the input for user review and track the id of the review
  toggle = (id) => {
    let { toggle } = this.state
    let { open } = this.state
    this.setState({ toggle: !toggle, open: !open, currentID: id })
  }
// this function responsible to hide all reviews
  dell = () => {

    let { hide } = this.state
    this.setState({ hide: !hide })
  }
// this function responsible for update the review
  updatereview = (id) => {
    console.log(id)
    var updates = {};
    updates['/name'] = this.state.name;
    updates['/review'] = this.state.review;
    firebase.database().ref('reviews').child(id).update(updates);
    this.db.ref('reviews').on('child_changed', snapshot => {
      console.log(snapshot)

    });
  }
// this function responsible for remove the review
  removereview = (id) => {
    firebase.database().ref('reviews').child(id).remove();
    this.db.ref('reviews').on('child_removed', snapshot => {
      let reviews = this.state.reviews;
      reviews = reviews.filter(review => review.id !== snapshot.key);
      this.setState({
        reviews: reviews
      });
    }
    );
  };
// this function responsible for add movie to favorit
  hndClick = () => {
    let { isFave } = this.state
    this.setState({ isFave: !isFave })
  }

  render() {
    const fave = this.state.isFave;
    const { open } = this.state
    const crm = this.props.currentMovie
    const background = `https://image.tmdb.org/t/p/w780/${crm.poster_path}`
    return (

      <div>

        <div class="movie_card" id="bright" style={{ backgroundImage: `url(${background})` }} >
          <div class="info_section">
            <div class="movie_header">

              {
                crm.poster_path == null ? <img className="locandina" alt="..." src={`https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png`} alt="Movie Image" /> : <img className="locandina" alt="..." src={`https://image.tmdb.org/t/p/w780/${crm.poster_path}`} alt="Movie Image" />
              }  <h1>{crm.title}</h1>
              <h4></h4>
              <span class="minutes"><div className="cl"><CircularProgressbar value={crm.vote_average} maxValue={10} text={`${crm.vote_average === 0 ? 'NR' : crm.vote_average * 10}%`} /></div></span>
              <p class="type"></p>
            </div>
            <div class="movie_desc">
              <p class="text">
                {crm.overview}
              </p>
            </div>
            <div class="movie_social">
              <ul>
                <li><i className="material-icons" onClick={this.props.closeMovieDetails}>arrow_back</i></li>
                <li><i className="material-icons" onClick={this.hndClick} style={fave ? { color: 'red' } : { color: '' }} ></i></li>
                <li><i className="material-icons" onClick={this.toggle}>chat_bubble</i></li>
                <li><i className="material-icons" onClick={this.dell}>delete</i></li>
              </ul>
            </div>
          </div>
          <div class="blur_back bright_back"></div>
        </div>
        {this.state.hide === true ? this.state.reviews.map(revie => (
          <div class="movie_card" id="tomb" key={revie.id} style={{
            backgroundImage: `url(${background})`
          }} >
            <div class="info_section">
              <div class="movie_header">
                {
                  crm.poster_path == null ? <img className="locandina" alt="..." src={`https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png`} alt="Movie Image" /> : <img className="locandina" alt="..." src={`https://image.tmdb.org/t/p/w780/${crm.poster_path}`} alt="Movie Image" />
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
                  <li><i class="material-icons" onClick={() => this.removereview(revie.id)}>delete</i></li>
                  <li><i class="material-icons" onClick={() => this.toggle(revie.id)}>edit</i></li>
                </ul>
              </div>
            </div>
            <div class="blur_back tomb_back"></div>

          </div>

        )) : ''
        }
        <Drawer
          open={open}
          onRequestClose={this.toggle}>
          <div>           
             <Form controlId="formBasicEmail" onSubmit={this.createreviews}>
              <input
              style={{display: "block" , margin: "10px 0"}}
              type="text"
                name="name"
                placeholder="Name"
                onChange={(evt) => this.onChangeHandler(evt, 'name')}
                value={this.state.name}
              />    
              <input
                style={{display: "block"}}
                type="textarea"
                name="review"
                placeholder="review"
                onChange={(evt) => this.onChangeHandler(evt, 'review')}
                value={this.state.review}
              />
              <Button               style={{margin: "10px 19px 10px 0"}}
 outline color="secondary" onClick={this.createreviews}>Submit</Button>
              <Button outline color="secondary" onClick={() => this.updatereview(this.state.currentID)}>update</Button>
            </Form>
          </div>
        </Drawer>
      </div>


    )
  }
}

