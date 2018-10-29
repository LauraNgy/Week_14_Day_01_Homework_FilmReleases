import React, {Component} from 'react';

class UpcomingReleases extends Component {
  render() {
    return(
      <h2><a href={this.props.calendar}>View More Upcoming Releases >> </a></h2>
    )
  }
}

export default UpcomingReleases;
