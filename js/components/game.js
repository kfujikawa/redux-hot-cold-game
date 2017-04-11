import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.generateNumber = this.generateNumber.bind(this);
    }

    generateNumber() {
        this.props.dispatch(actions.generateNumber());
    }

    render() {

        return (
            <div className="number-list">
                {this.props.numbers}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    numbers: state.numbers
});

export default connect(mapStateToProps)(Game);