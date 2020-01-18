import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'


class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{
        "popularity": 191.335,
        "vote_count": 2498,
        "video": false,
        "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
        "id": 181812,
        "adult": false,
        "backdrop_path": "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
        "original_language": "en",
        "original_title": "Star Wars: The Rise of Skywalker",
        "genre_ids": [
          28,
          12,
          878
        ],
        "title": "Star Wars: The Rise of Skywalker",
        "vote_average": 6.6,
        "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
        "release_date": "2019-12-18"
      }],
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };
    
    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(genreID) {
    // make an axios request to your server on the GET SEARCH endpoint
    
    Axios.get(`/movies/search`, {params: {id: genreID}})
    .then(data => {
      console.log("hello", data.data);
      this.setState({
        movies: data.data.results
      })
      
    })
    .catch(err => console.log("omg"))
  }
  componentDidMount(){
    
    this.getMovies(28);
  }
  getFavorites() {
    Axios.get('movies/favorites')

  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies = {this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));