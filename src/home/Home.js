import React, { Component } from 'react';
import { View, Text ,FlatList,StyleSheet,TouchableHighlight} from 'react-native';



export default class Home extends Component {
  static navigationOptions = {
    headerTitle:'首页',
  }
  constructor(props) {
    super(props);
    this.state = {
      data:['待审核客户','信控审核','信控额度审核','应收账款','风控预警'],
    };
  }

  itemClick=()=>{
    console.log('kkkk');
    
  }
  renderItem({item}){
    return (
      
        <TouchableHighlight style={styles.item} onPress={()=>this.itemClick}>
          <Text style={styles.itmeText}>{item}</Text>
        </TouchableHighlight>
        
      
    )
  }
  
  render() {
    return (
      <View>
        <FlatList data={this.state.data} 
        renderItem={this.renderItem}></FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item:{
    height:80,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#48d1cc',
    marginBottom: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
  },
  itmeText:{
    fontSize:24,
    color:'#fffafa',
    fontWeight: '600',
    lineHeight:80,
  },
  itemClick:{
    flex:1,
    
  }
})
