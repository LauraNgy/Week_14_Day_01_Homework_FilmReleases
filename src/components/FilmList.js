import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {

  render() {
    return (
      <ol>
        <Film name="Spider-Man: Into the Spider-Verse" url="https://www.imdb.com/title/tt4633694/?ref_=rlm"/>
      </ol>
    )
  }
}

export default FilmList;
