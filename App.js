/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Home from './src/home/Home';
import Mine from './src/mine/Mine';
import Category from './src/category/Category';
import ShopCar from './src/shopcar/ShopCar';
import Login from './src/login/Login';
import ForgetPassword from './src/login/ForgetPassword';
import Color from './src/common/Color';
import GoodsDetail from './src/shopcar/GoodsDetail';

import RNStorage from './src/common/RNStorage';
import Main from './src/home/Main';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const defaultOptions = {
  headerStyle:{
    backgroundColor:Color.COLOR_MAIN_THEME,
    
  },
  
  headerTintColor:Color.COLOR_COMMON_FONT,
  headerBackTitle:null,
  headerTitleStyle:{
    fontWeight: '600',
    color:Color.COLOR_COMMON_FONT,
    fontSize:18,
  }
}

const HomeStack = createStackNavigator({
  Home,
  Login,
  ForgetPassword,
  GoodsDetail,
  Main,
  
},{
  initialRouteName:'Home',
  defaultNavigationOptions:defaultOptions
});

const MineStack = createStackNavigator({

  Mine
},{
  initialRouteName:'Mine',
  defaultNavigationOptions:defaultOptions,
});

const CategoryStack= createStackNavigator({
  Category,

},{
  initialRouteName:'Category',
  defaultNavigationOptions:defaultOptions,
});
const ShopCarStack = createStackNavigator({
  ShopCar,
},{
  initialRouteName:'ShopCar',
  defaultNavigationOptions:defaultOptions,
});

const BottomNavigator = createBottomTabNavigator({
  Home:{
    screen:HomeStack,
    navigationOptions:{
      tabBarLabel:'首页',
      showLabel:true,
      tabBarIcon:({tintColor,focused})=>(
        <Image style={[{width: 24,height: 24},{tintColor: tintColor}]}
         source={focused?require('./images/main.png'):require('./images/main_un.png')}/> 
      )
    }
  },
  Category:{
    screen:CategoryStack,
    navigationOptions:{
      tabBarLabel:'分类',
      showLabel:true,
      tabBarIcon:({tintColor,focused})=>(
        <Image style={[{width: 24,height: 24},{tintColor: tintColor}]}
        source={focused?require('./images/category.png'):require('./images/category_un.png')}/>
      )

      
    }
  },
  ShopCar:{
    screen:ShopCarStack,
    navigationOptions:{
      tabBarLabel:'购物车',
      showLabel:true,
      tabBarIcon:({tintColor,focused})=>(
        <Image style={[{width: 24,height: 24},{tintColor: tintColor}]} 
        source={focused?require('./images/shop.png'):require('./images/shop_un.png')}/>
      )

      
    }
  },
  Mine:{
    screen:MineStack,
    navigationOptions:{
      tabBarLabel:'我的',
      showLabel:true,
      tabBarIcon:({tintColor,focused})=>(
        <Image  
        source={focused?require('./images/mine.png'):require('./images/mine_un.png')}
        style={[{width: 24,height: 24},{tintColor: tintColor}]}/> 
      )
    }
  }
},{
 
  tabBarOptions:{
    labelStyle:{
      fontSize:12,
    },
    activeTintColor:Color.COLOR_MAIN_THEME,
    inactiveTintColor:'#bfbfbf',
    iconStyle:{
      width:16,
      height:16,
    },
  }
})

HomeStack.navigationOptions = ({navigation})=>{
  return {
    tabBarVisible:navigation.state.index === 0,
  } ;
}
CategoryStack.navigationOptions = ({navigation})=>{
  return {
    tabBarVisible:navigation.state.index === 0,
  } ;
}
ShopCarStack.navigationOptions = ({navigation})=>{
  return {
    tabBarVisible:navigation.state.index === 0,
  } ;
}
MineStack.navigationOptions = ({navigation})=>{
  return {
    tabBarVisible:navigation.state.index === 0,
  } ;
}
const AppContainer = createAppContainer(BottomNavigator);

export default class App extends Component<Props> {

  constructor(props) {
    super(props)
  
    this.state = {
      //  loginState:false,
    }


    
  }
  
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
  tabBarIcon:{
    width:16,
    height:16,
  }
});
