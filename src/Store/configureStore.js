import { createStore, combineReducers} from 'redux';
import playersReducer from '../Reducers/Players'

export default () => {
  const store = createStore(
    combineReducers({
      players: playersReducer,
      win: false
    })
  );

  return store;
};