
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { connect } from 'react-redux';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import magnifyingGlass from './src/img/magnifyingGlass.png';
import listIcon from './src/img/listIcon.png';
import star from './src/img/star.png';
import gear from './src/img/gear.png';

import Content from './src/components/Content';
import Trainer from './src/components/Trainer';
import PokeList from './src/components/PokeList';
import FavsList from './src/components/FavsList';



const AppNavigator = createBottomTabNavigator ({
  Home: Content,
  List: PokeList,
  Favorites: FavsList,
  Settings: Trainer
}, {
  initialRoute: 'Content',
  tabBarOptions: {
    activeBackgroundColor: 'lightgreen',
    inactiveBackgroundColor: 'lightgray',
    showLabel: false,
    labelStyle: {
      fontSize: 15
    }
  },
  defaultNavigationOptions: ({navigation})=> ({
    tabBarIcon: () => {
      const { routeName } = navigation.state;
      if(routeName === 'Home'){
        return <Image source={magnifyingGlass} style={{width:30, height:30}}/>
      }
      if(routeName === 'List'){
        return <Image source={listIcon} style={{width:30, height:30}} />
      }
      if(routeName === 'Favorites'){
        return <Image source={star} style={{width:30, height:30}} />
      }
      if(routeName === 'Settings'){
        return <Image source={gear} style={{width:30, height:30}} />
      }
    }
  })
})


const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps, null)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
