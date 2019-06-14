import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import Color from '../../common/Color';
export default class ShopInfo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.shopimg}></Image>
                <View style={styles.shopname}>
                    <Text style={styles.shopnameText}>北京彩食鲜生鲜工厂</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
        flex: 1,
        backgroundColor: Color.COLOR_COMMON_FONT,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Color.COLOR_VIEW_BAC,
    },
    shopimg:{
        width:60,
        height:60,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: '#da2',
    },
    shopname:{
        flex: 1,
        // justifyContent:'center',
        // alignItems: 'center',
       
    },
    shopnameText:{
        marginTop: 10,
        fontSize: 18,
        fontWeight:'400',
        color:Color.COLOR_MAIN_THEME,
    }


})
