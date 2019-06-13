import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,TouchableHighlight } from 'react-native';

export default class RightMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:this.props.data,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({data:nextProps.data});
  };
  
  
  itemDidSelected=(item)=>{
    console.log(item);
  }
  renderItem=({item})=>{
    return (
      <TouchableHighlight onPress={()=>this.itemDidSelected(item)} style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={(item,index)=>index}
        contentContainerStyle={styles.listMenu} 
        numColumns={3}
        horizontal={false}
        ></FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    listMenu:{
      // flexDirection: 'row',
      justifyContent:'space-between',
      // flexWrap: 'wrap',
      // alignItems: 'center',
     
    },
    item:{
      
      margin: 5,
      width:80,
      height:80,
      backgroundColor: '#24386c',
      borderRadius: 10,
      justifyContent:'center',
      alignItems: 'center',
    },
    itemText:{
      color:'#fff',
      fontSize: 20,
      fontWeight:'600',
    }
});