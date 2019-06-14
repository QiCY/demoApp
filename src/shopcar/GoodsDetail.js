import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList} from 'react-native'
import GoodsHeader from './GoodsDetail/GoodsHeader';

export default class GoodsDetail extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:['banner','goodsinfo','shopinfo','goodsdetail'],
      }
    }
    static navigationOptions={
        headerTitle:'商品详情',
    }
    renderItem({item,index}){
        switch (index) {
            case 0:
                return (
                    <GoodsHeader></GoodsHeader>
                )
                break;
            // case 1:
                
            //     break;
            // case 2:
                
            //     break;
            // case 3:
                
            //     break;
        
            default:
                return (
                    <View>
                        <Text>{item}{index}</Text>
                    </View>
                    
                )
                break;
        }
    }
    render() {
        return (
            <View>
                <FlatList data={this.state.data}
                renderItem={this.renderItem.bind(this)}></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
