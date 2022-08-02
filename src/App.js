import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import DeckList from './components/DeckList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deckData: [],
    };
    this.clearFields = this.clearFields.bind(this);
    this.checkTrunfo = this.checkTrunfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.enableSubmit());
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prev) => ({ deckData: [...prev.deckData, {
      cardName: prev.cardName,
      cardDescription: prev.cardDescription,
      cardAttr1: prev.cardAttr1,
      cardAttr2: prev.cardAttr2,
      cardAttr3: prev.cardAttr3,
      cardImage: prev.cardImage,
      cardRare: prev.cardRare,
      cardTrunfo: prev.cardTrunfo,
    }] }), () => {
      this.checkTrunfo();
      this.clearFields();
    });
  }

  handleDelete({ target }) {
    const { deckData } = this.state;
    const { id } = target;
    const newList = deckData.filter((card) => id !== card.cardName);
    this.setState({
      deckData: newList,
    });
  }

  enableSubmit() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const maxAttr = 90;
    const maxAttrSum = 210;
    const n1 = parseInt(cardAttr1, 10);
    const n2 = parseInt(cardAttr2, 10);
    const n3 = parseInt(cardAttr3, 10);
    const attrsValidity = (n1 + n2 + n3) <= maxAttrSum
    && n1 <= maxAttr && n2 <= maxAttr && n3 <= maxAttr
    && n1 >= 0 && n2 >= 0 && n3 >= 0;
    const check = cardName.length === 0 || cardDescription.length === 0
    || attrsValidity === false || cardImage.length === 0 || cardRare.length === 0;
    this.setState({ isSaveButtonDisabled: check });
  }

  clearFields() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  checkTrunfo() {
    const { deckData } = this.state;
    if (deckData.some((card) => card.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, deckData } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSubmit }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          <DeckList deckData={ deckData } handleDelete={ this.handleDelete } />
        </div>
      </div>
    );
  }
}

export default App;
