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

  HandleSearch = ({ target }) => {
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
          <input
            type="text"
            id="title"
            value={ title }
            onChange={ this.HandleSearch }
            data-testid="title-input"
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            value={ subtitle }
            onChange={ this.HandleSearch }
            data-testid="subtitle-input"
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="imagePath"
            value={ imagePath }
            onChange={ this.HandleSearch }
            data-testid="image-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovies;
