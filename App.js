/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Home from './src/home/Home';
import Mine from './src/mine/Mine';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


const HomeStack = createStackNavigator({
  Home,
  
},{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#22339b',
    },
    headerTitle:'首页',
    headerBackTitle:null,
    headerTitleStyle:{
      fontWeight: '600',
      color:'#fff',
      fontSize:18,
    }
  }
});

const MineStack = createStackNavigator({

  Mine
},{
  initialRouteName:'Mine',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#22339b',
    },
    headerTitle:'我的',
    
    headerBackTitle:null,
    headerTitleStyle:{
      fontWeight: '600',
      color:'#fff',
      fontSize:18,
    }
  }
});

const BottomNavigator = createBottomTabNavigator({
  Home:{
    screen:HomeStack,
    tabBarLabel:'首页',
  },
  Mine:{
    screen:MineStack,
    tabBarLabel:'我的',
  }
},{
 
  tabBarOptions:{
    
   
    

  }
})

const AppContainer = createAppContainer(BottomNavigator);

export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}

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
