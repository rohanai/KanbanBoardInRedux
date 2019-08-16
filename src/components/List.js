import React, { Component } from 'react';

import CardContainer from '../containers/CardContainer';
import CreateCardContainer from '../containers/CreateCardContainer';
class List extends Component {
  state = { showOptions: false };

  toggleOptions = () => {};

  createCard = () => {};

  removeList = () => {};

  render() {
    const { list = {} } = this.props;
    const { showOptions } = this.state;

    return (
      <article className="List">
        <h2>{list.title}</h2>
        <CreateCardContainer listId={list.id}/>
        <div>
          {/* Iterate over cards here. */}
          {list.cards.map(cardId => (
            <CardContainer key={cardId} cardId={cardId} />
          ))}
          
        </div>
      </article>
    );
  }
}

export default List;
