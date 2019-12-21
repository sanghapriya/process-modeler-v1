import { combineReducers} from 'redux';
import  manageElementReducer from './manageElement';
import testReduxReducer from './testRedux';

const combinedReducers = combineReducers({
  manageElement: manageElementReducer,
  testRedux:   testReduxReducer
});

export default combinedReducers;
