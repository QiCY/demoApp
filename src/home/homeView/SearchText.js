import React, { Component } from 'react'
import { Text, StyleSheet, View ,TextInput} from 'react-native'

export default class SearchText extends Component {
    constructor(props) {
      super(props)
    
      console.log('search enable is ' + this.props.editable);
      this.state = {
         editable:this.props.editable,
      }
    }
    
    searchAction=()=>{
        this.props.searchAction && this.props.searchAction();
    }
    searchText=(text)=>{
        this.props.searchText && this.props.searchText(text);
    }
    render() {
        if (this.state.editable) {
            return (
                <TextInput style={styles.searchText}
                placeholder={'搜索商品编码/名称/条码'}
                onChangeText={(text)=>this.searchText(text)}>

                </TextInput>
            )
        }else{
            return (
                <Text style={styles.searchText}
                onPress={()=>this.searchAction()}>搜索商品编码/名称/条码</Text>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    searchText:{
        marginLeft: 10,
        color:'gray',
        lineHeight:36,
    },
})
