import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dummyFunction } from '../actions';

class DummyComponent extends Component {
    handleClick = () => {
        this.props.dummyFunction();
    }

    render() {
        return (
            <div>
                <button type="submit" onClick={this.handleClick}>
                    Click Me
                </button>
                Current value is {this.props.dummyState}
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        dummyState: reduxState.dummy.dummyState,
    };
}

export default connect(mapStateToProps, { dummyFunction })(DummyComponent);
