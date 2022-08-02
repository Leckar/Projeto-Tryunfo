import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, cardTrunfo, hasTrunfo } = this.props;
    const gotTrunfo = (
      <p data-testid="trunfo-input">Você já tem um Super Trunfo em seu baralho</p>
    );
    const noTrunfo = (
      <label htmlFor="trunfo-input">
        <input
          type="checkbox"
          id="trunfo-input"
          data-testid="trunfo-input"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>
    );
    return (
      <section>
        <h2>Adicionar nova carta</h2>
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              id="name-input"
              type="text"
              data-testid="name-input"
              name="cardName"
              placeholder="Nome"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <textarea
              name="cardDescription"
              id="description-input"
              minLength="1"
              maxLength="80"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              type="number"
              id="attr1-input"
              data-testid="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              type="number"
              id="attr2-input"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              type="number"
              id="attr3-input"
              data-testid="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              id="image-input"
              data-testid="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              id="rare-input"
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          { !hasTrunfo && noTrunfo }
          { hasTrunfo && gotTrunfo }
          <button
            type="submit"
            id="save-button"
            data-testid="save-button"
            name="saveButton"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
