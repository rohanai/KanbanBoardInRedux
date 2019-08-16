import { connect } from 'react-redux';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => {
    return {
        card: state.cardReducer.entities[ownProps.cardId]
    };
};

export default connect(mapStateToProps)(Card);
