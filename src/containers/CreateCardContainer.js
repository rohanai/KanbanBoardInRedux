import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';

const defaultCardData = {
    title: '',
    despcription: '',
    assignedTo: ''
};

const mapDispatchToState = (dispatch) => {
    return {
        createCard(listId, cardData) {
            const cardId = Date.now().toString();
            const  card = {
                id: cardId,
                ...defaultCardData,
                ...cardData
            };
            dispatch({
                type: 'CREATE_CARD',
                payload: { card, listId, cardId}
            });
        }
    }
}

export default connect(null, mapDispatchToState)(CreateCard);