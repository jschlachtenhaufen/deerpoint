import { combineReducers } from 'redux';
import DummyReducer from './dummyReducer';


const RootReducer = combineReducers({
    dummy: DummyReducer,
});

export default RootReducer;
