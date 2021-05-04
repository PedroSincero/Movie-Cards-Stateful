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
          <input id="title" value={title} onChange={this.HandleSearch} data-testid="title-input" />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input id="subtitle" value={subtitle} onChange={this.HandleSearch} data-testid="subtitle-input" />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input type="text" id="imagePath" value={imagePath} onChange={this.HandleSearch} data-testid="image-input" />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input id="storyline" value={storyline} onChange={this.HandleSearch} data-testid="storyline-input" />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input id="rating" type="number" value={rating} onChange={this.HandleSearch} data-testid="rating-input" />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select id="genre" value={genre} onChange={this.HandleSearch} data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovies;
