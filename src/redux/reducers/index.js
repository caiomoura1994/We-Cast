import { combineReducers } from 'redux';

const navigation = (
  state = {},
  action
) => {
  switch (action.type) {
    case 'REGISTER_NAVIGATION':
      return action;
    default:
      return state
  }
}

const textTheHot = (
  state = {},
  action
) => {
  switch (action.type) {
    case 'SEARCH_THE_HOT':
      return action;
    default:
      return state
  }
}

export default combineReducers({navigation, textTheHot});
