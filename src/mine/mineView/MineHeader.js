import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableHighlight,Alert} from 'react-native';
import Color from '../../common/Color';
import RNStorage from '../../common/RNStorage';


export default class MineHeader extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         loginState:false
      }

      RNStorage.load({
          key:'loginState',
      }).then(ret=>{
          this.setState({loginState:ret});
      })
    }
    
    loginAction(){
        var state = this.state.loginState;
        if (state) {

            Alert.alert('提示', '您确定要退出吗？',[
                
                {
                    text:'暂不退出',
                    onPress:()=>{

                    }
                },
                {text:'确定退出',onPress:()=>{
                    RNStorage.save({
                        key:'loginState',
                        data:false,
                    });

                    this.props.callback('logout');
                }}
            ],{
                cancelable:true,
            }

            )
            
        }

        
        
        
    }

    render() {
        if (this.state.loginState) {
            return (
                <View style={styles.container}>
                    <View style={styles.headerImgView}>
                        <Image style={styles.headerImg}
                        source={{uri:'http://cdn.duitang.com/uploads/item/201610/03/20161003000301_Wfm5X.jpeg'}}></Image>
                    </View>
                    <View style={styles.headerContent}>
                        <Text style={styles.username}>张三丰</Text>
                        <Text style={styles.phone}>18770093038</Text>

                    </View>
                    <TouchableHighlight style={{alignSelf: 'center',marginRight: 10,}}
                    onPress={this.loginAction.bind(this)}>
                        <Image style={{width:30,height:30}} 
                        source={require('../../../images/logout.png')}></Image>
                    </TouchableHighlight>
                </View>
            )
        }else{
            return (
                <View style={styles.container}>
                <View style={styles.headerImgView}>
                    <Image style={styles.headerImg} 
                    source={{uri:'http://img.52z.com/upload/news/image/20181108/20181108204521_83402.jpg'}}></Image>
                </View>
                <View style={styles.headerContent}>
                    <TouchableHighlight onPress={this.loginAction.bind(this)}>
                        <Text style={styles.username}>点击登录</Text>
                    </TouchableHighlight>
                    
                    
                </View>
            </View>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.COLOR_MAIN_THEME,
        flexDirection: 'row',
    },
    headerImgView:{
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    headerImg:{
        width:70,
        height:70,
        borderRadius: 35,
        backgroundColor:'orange',
    },
    headerContent:{
        flex: 1,
        marginTop: 20,
    },
    username:{
        fontSize: 20,
        fontWeight:'600',
        marginLeft: 10,
        lineHeight:40,
        color:Color.COLOR_COMMON_FONT,
    },
    phone:{
        fontSize:18,
        fontWeight:'400',
        color:Color.COLOR_COMMON_FONT,
        lineHeight:30,
        marginLeft: 10,
    }
})
