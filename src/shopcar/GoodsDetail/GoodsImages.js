import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground } from 'react-native'

export default class GoodsImages extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:['https://img.alicdn.com/imgextra/i1/356060330/O1CN01aUJ7O21EJBDwJO13v_!!356060330.jpg',
                'https://img.alicdn.com/imgextra/i1/356060330/O1CN01ncwgv61EJBDltK5WZ_!!356060330.jpg',
            'https://img.alicdn.com/imgextra/i2/356060330/O1CN01aaQUVE1EJBDafRA98_!!356060330.jpg',
             'https://img.alicdn.com/imgextra/i4/356060330/O1CN0186fL7T1EJBE6Y0MEy_!!356060330.jpg'
            ]
      }
    }
    
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.data.map((item)=>{
                        return <ImageBackground 
                        source={{uri:item}} style={{width:'100%',height:675}}></ImageBackground>
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
