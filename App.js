import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './app/utils/storeCreator';

import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Login from './app/containers/logIn';
import Home from './app/containers/home';
import ShopDetails from './app/containers/shopDetails';
import Profile from './app/containers/profile';


export const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Profile: Profile,
  }
);

const root = createStackNavigator(
  {
    Login: Login,
    ShopDetails: ShopDetails,
    TabNavigator: TabNavigator
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer =  createAppContainer(root);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
