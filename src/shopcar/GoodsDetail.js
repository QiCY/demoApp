import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList} from 'react-native'
import GoodsHeader from './GoodsDetail/GoodsHeader';
import GoodsInfo from './GoodsDetail/GoodsInfo';
import ShopInfo from './GoodsDetail/ShopInfo';
import Color from '../common/Color';
import GoodsDetailInfo from './GoodsDetail/GoodsDetailInfo';
import GoodsCount from './GoodsDetail/GoodsCount';
import GoodsImages from './GoodsDetail/GoodsImages';

export default class GoodsDetail extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:['banner','goodsinfo','shopinfo','goodsdetail','goodscount','goodsimages'],
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
            case 1:
                return (
                    <GoodsInfo></GoodsInfo>
                )
                
                break;
            case 2:
                return (
                    <ShopInfo></ShopInfo>
                )
                break;
            case 3:
                return (
                    <GoodsDetailInfo></GoodsDetailInfo>
                )
                break;
            case 4:
                    
                    return <GoodsCount></GoodsCount>
                break;
        
            default:
                return (
                    
                    <GoodsImages></GoodsImages>
                )
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.data}
                renderItem={this.renderItem.bind(this)}></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color.COLOR_VIEW_BAC,
    }
})
