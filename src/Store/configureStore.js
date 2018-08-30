import { createStore, combineReducers} from 'redux';
import playersReducer from '../Reducers/Players'

export default () => {
  const store = createStore(
    combineReducers({
      players: playersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};