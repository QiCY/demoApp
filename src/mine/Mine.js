import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import Color from '../common/Color';

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  changeSwiperIndex=(index)=>{
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.swiperView}>

        <Swiper  
          showsButtons={false}
          autoplay={true}
          height={200}
          bounces={true}
          onIndexChanged={(index)=>this.changeSwiperIndex(index)}
          >
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
        </Swiper>
        </View>

        <View style={styles.noticeView}
        >
          <Swiper horizontal={false}
          autoplay={true}
          autoplayTimeout={2}
          showsPagination={false}>
            <View style={styles.notice}>
              <Text>news1</Text>
            </View>
            <View style={styles.notice}>
              <Text>news2 </Text>
            </View>
            <View style={styles.notice}>
              <Text>news3</Text>
            </View>
          </Swiper>
        </View>
        

        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:Color.COLOR_VIEW_BAC,
  },
  swiperView:{
    height:200,
   
  },
  

  slide1: {
    height:200,
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height:200,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    height:200,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  noticeView:{
    height:60,
   

  },
  notice:{
    margin: 5,
    borderRadius: 5,
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center',
  }
})