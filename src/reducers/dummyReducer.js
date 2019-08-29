import { ActionTypes } from '../actions';

const initialState = {
    dummyState: 'initial value',
};

const DummyReducer = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.DUMMY_ACTION:
        return { dummyState: action.payload.dummyState };
    default:
        return state;
    }
};

export default DummyReducer;
