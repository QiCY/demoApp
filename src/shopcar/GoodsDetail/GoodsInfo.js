import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Color from '../../common/Color';
export default class GoodsInfo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.goodsname}>新鲜苹果上市</Text>
                <Text style={styles.goodsprice}>￥15</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
        marginTop: 10,
        backgroundColor: Color.COLOR_COMMON_FONT,
        borderBottomWidth: 1,
        borderBottomColor: Color.COLOR_VIEW_BAC,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    goodsname:{
        marginLeft: 5,
        marginTop: 10,
        fontSize: 18,
        fontWeight:'600',

    },
    goodsprice:{
        marginLeft: 5,
        marginTop: 10,
        fontSize: 20,
        fontWeight:'500',
        color:'red',
        marginBottom: 10,
    }
})
