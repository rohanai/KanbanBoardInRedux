import { cards as defaultCard } from '../normalized-state';

const cardReducer = (cards = defaultCard, action) => {
    if (action.type === 'CREATE_CARD') {
        const { card, cardId } = action.payload;
        return {
            entities: {
                ...cards.entities,
                [cardId]: card,
            },
            ids: [...cards.ids, cardId]
        };
    }
    return cards;
}

export default cardReducer;
