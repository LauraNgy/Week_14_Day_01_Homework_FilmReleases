import React, {Component} from 'react';
import FilmList from '../components/FilmList';
import UpcomingReleases from '../components/UpcomingReleases';

class FilmBox extends Component {
  render() {
    return (
      <div>
        <h1>Upcoming Film Releases for UK</h1>
        <FilmList />
        <UpcomingReleases />
      </div>
    )
  }
}

export default FilmBox;
