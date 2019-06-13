import React, { Component } from 'react';
import { View, Text ,FlatList,StyleSheet,TouchableHighlight} from 'react-native';
import Toast,{DURATION} from 'react-native-easy-toast';
import Color from '../common/Color';

export default class Home extends Component {
  static navigationOptions = {
    headerTitle:'首页',
  }
  constructor(props) {
    super(props);
    this.state = {
      data:['登录','忘记密码','信控额度审核','应收账款','风控预警'],
    };
  }

  
  renderItem({item,index}){
    return (
      
        <TouchableHighlight style={styles.item} 
        onPress={()=>this._itemClick(item,index)}
        underlayColor={'rgba(23,12,122,0.1)'}>
          <Text style={styles.itmeText}>{item}</Text>
        </TouchableHighlight>
        
      
    )
  }
  _itemClick=(item,index)=>{
    console.log(item + 'index'+index);
    this.refs.toast.show(item);
    switch (index) {
      case 0:
          this.props.navigation.push('Login');
        break;
      case 1:
          this.props.navigation.push('ForgetPassword');
        break;
      case 2:
        
        break;
      case 3:
        
        break;
    
      default:
        break;
    }
  }
  render() {
    return (
      <View>
        <FlatList data={this.state.data} 
        renderItem={this.renderItem.bind(this)
          
        }
          >
        </FlatList>
        <Toast ref='toast' style={{backgroundColor:Color.COLOR_TOAST_BAC}} position='center'></Toast>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item:{
    height:80,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Color.COLOR_MAIN_THEME,
    marginBottom: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
  },
  itmeText:{
    fontSize:24,
    color:Color.COLOR_COMMON_FONT,
    fontWeight: '600',
    lineHeight:80,
  },
  itemClick:{
    flex:1,
    
  }
})
