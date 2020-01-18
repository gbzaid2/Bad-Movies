import React from 'react';
import _ from 'underscore';
import Axios from 'axios';
import config from '../../../config.js'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      selected: null
    };
    this.getGenres = this.getGenres.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }

  handleOption(e) {
    this.setState({
      selected: e.target.value
    });
  }

  getMovies(){
    this.props.getMovies(this.state.selected)
  }
  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    let requestParams = {
      method: 'get',
      url: "https://api.themoviedb.org/3/genre/movie/list",
      params: {
        api_key: config.API_KEY
      }
    };
    Axios(requestParams)
    .then(data => {
      this.setState({
        genres: data.data.genres
      })
    })
    .catch(err => console.log(err));
  }
  componentDidMount(){
    this.getGenres();
  }
  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <select onChange = {this.handleOption}>
          {this.state.genres.map(genre => <option value = {genre.id}>{genre.name}</option>)}
        </select>
        <br/><br/>

        <button onClick = {this.getMovies}>Search</button>

      </div>
    );
  }
}

export default Search;