import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import Swiper from 'react-native-swiper';

export default class GoodsHeader extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:['https://img.alicdn.com/imgextra/i1/356060330/O1CN01hVthqQ1EJBDq6qcQQ_!!0-item_pic.jpg_60x60q90.jpg',
         'https://img.alicdn.com/imgextra/i3/356060330/O1CN01C6pruS1EJBEoVbxOt_!!356060330.jpg_60x60q90.jpg',
         'https://img.alicdn.com/imgextra/i1/356060330/O1CN01mSycjI1EJBEnpYRr2_!!0-item_pic.jpg_430x430q90.jpg'],
      }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Swiper autoplay={true}>

                    {
                        this.state.data.map((item,index)=>{
                            return <View style={styles.itemView}>
                                        <Image style={{backgroundColor: '#333',flex: 1,}} 
                                        source={{uri:item}}></Image>
                                    </View>
                        })
                    }
                    
                    
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
