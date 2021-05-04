import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  HandleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  AtribbuteTest = (name) => {
    if (name === 'title') {
      return ('title-input');
    }
    if (name === 'subtitle') {
      return ('subtitle-input');
    }
    if (name === 'imagePath') {
      return ('image-input');
    }
    if (name === 'storyline') {
      return ('storyline-input');
    }
    if (name === 'rating') {
      return ('rating-input');
    }
    if (name === 'genre') {
      return ('genre-input');
    }
  }

  AttributeTitleNew = (name, value, onChange, type) => {
    if (type !== 'textarea') {
      return (<input
        name={ name }
        value={ value }
        onChange={ onChange }
        type={ type }
        data-testid={ this.AtribbuteTest(name) }
      />);
    }

    return (<textarea
      name={ name }
      value={ value }
      onChange={ onChange }
      data-testid={ this.AtribbuteTest(name) }
    />);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          {this.AttributeTitleNew('title', title, this.HandleSearch, 'text')}
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.AttributeTitleNew('subtitle', subtitle, this.HandleSearch, 'text')}
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          {this.AttributeTitleNew('imagePath', imagePath, this.HandleSearch, 'text')}
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          {this.AttributeTitleNew('storyline', storyline, this.HandleSearch, 'textarea')}
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          {this.AttributeTitleNew('rating', rating, this.HandleSearch, 'number')}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.HandleSearch }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.HandleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovies.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovies;
