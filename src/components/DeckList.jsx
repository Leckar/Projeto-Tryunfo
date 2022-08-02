import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckList extends Component {
  render() {
    const { deckData, handleDelete } = this.props;
    const cardList = deckData.map((e) => (
      <div key={ e.cardName }>
        <Card
          cardName={ e.cardName }
          cardDescription={ e.cardDescription }
          cardAttr1={ e.cardAttr1 }
          cardAttr2={ e.cardAttr2 }
          cardAttr3={ e.cardAttr3 }
          cardImage={ e.cardImage }
          cardRare={ e.cardRare }
          cardTrunfo={ e.cardTrunfo }
        />
        <button
          type="button"
          id={ e.cardName }
          data-testid="delete-button"
          onClick={ (event) => handleDelete(event) }
        >
          Excluir
        </button>
      </div>
    ));
    return cardList;
  }
}

DeckList.propTypes = {
  deckData: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })),
  handleDelete: PropTypes.func.isRequired,
};

DeckList.defaultProps = {
  deckData: [],
};

export default DeckList;
