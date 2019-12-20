import { combineReducers} from 'redux';
import  createElementReducer from './createElement';
import testReduxReducer from './testRedux';

const combinedReducers = combineReducers({
  createElement: createElementReducer,
  testRedux:   testReduxReducer
});

export default combinedReducers;
