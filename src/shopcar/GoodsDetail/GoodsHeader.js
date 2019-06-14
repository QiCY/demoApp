import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import Swiper from 'react-native-swiper';

export default class GoodsHeader extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Swiper autoplay={true}>
                    <View style={styles.itemView}>
                        <Image style={{backgroundColor: '#333',flex: 1,}}></Image>
                    </View>
                    <View style={styles.itemView}>
                        <Image style={{backgroundColor: '#744',flex: 1,}}></Image>
                    </View>
                    <View style={styles.itemView}>
                        <Image style={{backgroundColor: '#858',flex: 1,}}></Image>
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:200,
    },
    itemView:{
        flex: 1,
    }
})
