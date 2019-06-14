import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableHighlight,Image} from 'react-native'
import Color from '../../common/Color';
export default class GoodsCount extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.countdes}> 商品数量 </Text>
                <View style={styles.countView}>
                    <TouchableHighlight style={[styles.btn]}>
                        <Image style={styles.countImg}></Image>
                    </TouchableHighlight>
                    <Text style={styles.count}>4</Text>
                    <TouchableHighlight style={[styles.btn]}>
                        <Image style={styles.countImg}></Image>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
        height:44,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.COLOR_COMMON_FONT,
        borderBottomColor: Color.COLOR_VIEW_BAC,
        borderBottomWidth: 1,
    },
    countdes:{
        marginLeft: 5,
        fontSize: 16,
        fontWeight:'400',
    },
    countView:{
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    countImg:{
        width:34,
        height:34,
        backgroundColor: Color.COLOR_MAIN_THEME,
    },
    count:{
        margin: 5,
        paddingLeft:15,
        paddingRight: 15,
        lineHeight:34,
        borderWidth: 1,
        borderColor: Color.COLOR_MAIN_THEME ,

    }
})
