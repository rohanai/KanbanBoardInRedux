import React, { Component } from 'react';

class Card extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState((prevState) => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  handleChange = (event) => {
    const newListId = event.target.value;
    const { card } = this.props;

    this.props.onListChange(card, newListId);
  };

  render() {
    const {
      card = {},
      lists = [],
      list = {},
      onRemoveCard = () => {},
    } = this.props;
    const { showOptions } = this.state;
    const removeCard = () => onRemoveCard(list, card);

    return (
      <article className="Card">
        <h3>{card.title}</h3>
        <div className="Card-description">{card.description}</div>
      </article>
    );
  }
}

export default Card;
