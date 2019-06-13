import React, { Component } from 'react';
import { View, Text,FlatList,StyleSheet} from 'react-native';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu';

export default class ClassDetail extends Component {
  constructor(props) {
    super(props);
    var dataList = [];
    for (let index = 0; index < 10; index++) {
     dataList.push(this.props.data);
      
    }
    var rightList = [];
    for (let index = 0; index < 10; index++) {
      
      rightList.push(dataList[0]);
      
    }
    this.state = {
        data:dataList,
        rightData:rightList,
        leftSelectIndex:0,
    };
  }

  leftItemSelect=(item,index)=>{
  //  console.log(item+index);
    var rightList = [];
    for (let i = 0; i < 10; i++) {
      rightList.push(item+index);
      
    }
    this.setState({rightData:rightList});
    
    
  }
  render() {
    return (
      <View style={styles.container}>
        <LeftMenu data={this.state.data} 
        callBack={(item,index)=>this.leftItemSelect(item,index)}
        leftSelectIndex={this.state.leftSelectIndex}/>
        <RightMenu data={this.state.rightData}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        
    }
});