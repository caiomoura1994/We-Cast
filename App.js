import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import List from './src/screens/List';
import Player from './src/screens/Player';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/redux/reducers';

const store = createStore(rootReducer);
const Navigator = createStackNavigator({
  List: { screen: List },
  Player: { screen: Player },
}, {
    mode: 'modal',
    headerMode: 'none',
  },
);
const Container = createAppContainer(Navigator);

const AppRedux = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);


export default class App extends Component {
  render() {
    return <AppRedux />;
  }
}


