import React, { Component } from 'react';

class AddMovies extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  HandleTitle = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input id="title" value={ title } onChange={ this.HandleTitle } data-testid="title-input" />
        </label>
      </form>
    );
  }
}

export default AddMovies;
