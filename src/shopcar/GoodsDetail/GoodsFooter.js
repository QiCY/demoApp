import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableHighlight,Platform,Dimensions} from 'react-native'
import Color from '../../common/Color';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPX = 
    Platform.OS === 'ios' &&  
    ((SCREEN_HEIGHT === 812 && SCREEN_WIDTH === 375) ||  
    (SCREEN_HEIGHT === 375 && SCREEN_WIDTH === 812)); 


export default class GoodsFooter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    addToCar=()=>{
        console.log(0);
        this.props.callBack(0);
    }
    rightBuy=()=>{
        console.log(1);
        this.props.callBack(1);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.total}>合计:￥100</Text>
                <TouchableHighlight onPress={this.addToCar}>
                    <Text style={styles.addtocar}>加入购物车</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.rightBuy}>
                    <Text style={styles.rightbuy}>立即购买</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:50,
        backgroundColor: Color.COLOR_COMMON_FONT,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end',
        marginBottom: IS_IPX?20:0,
    },
    total:{
        fontSize: 16,
        color:'red',
        marginRight: 20,
    },
    addtocar:{
        fontSize: 14,
        color:Color.COLOR_COMMON_FONT,
        fontWeight:'500',
        backgroundColor:Color.COLOR_MAIN_THEME,
        lineHeight:50,
        paddingLeft: 10,
        paddingRight: 10,
         
    },
    rightbuy:{
        fontSize: 14,
        color:Color.COLOR_COMMON_FONT,
        fontWeight:'500',
        backgroundColor:'red',
        lineHeight:50,
        paddingLeft: 10,
        paddingRight: 10,
    }

    
})
