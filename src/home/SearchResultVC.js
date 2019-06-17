import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList} from 'react-native'
import SearchHeader from './homeView/SearchHeader';
import SearchRsItem from './homeView/SearchRsItem';

export default class SearchResultVC extends Component {
    static navigationOptions = {
        headerTitle:'选择盘点商品',
    }
    constructor(props) {
      super(props)
    
      this.state = {
         data:[{name:'鲜鸡蛋',code:'98763',store:100},
         {name:'鲜鸡蛋',code:'98763',store:100},
         {name:'鲜鸡蛋',code:'98763',store:100},
         {name:'鲜鸡蛋',code:'98763',store:100},
         {name:'鲜鸡蛋',code:'98763',store:100},],
      }
    }
    
    renderItem({item,index}){
        return (
            <SearchRsItem data={item}></SearchRsItem>
        )
    }
    searchText=(text)=>{
        console.log(text);
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchHeader searchText={(text)=>this.searchText(text)}
                editable={true}></SearchHeader>
                <FlatList data={this.state.data}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={({item,index})=>index}
                extraData={this.state.data}></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
