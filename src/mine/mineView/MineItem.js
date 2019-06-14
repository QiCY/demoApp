import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native';
import Color from '../../common/Color';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class MineItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title:this.props.title,
         content:this.props.content,
         isShowArrow:this.props.showArrow,
      }
    }
    
    itemDidSelect=(title)=>{
        console.log(title);
    }
    render() {
        return (
            <TouchableHighlight onPress={()=>this.itemDidSelect(this.state.title)}>

                <View style={styles.container}>
                
                    <Text style={styles.title}> {this.state.title} </Text>
                    <Text style={styles.content}> {this.state.content} </Text>
                    <Image style={styles.arrow}
                    source={require('../../../images/arrow.png')}></Image>
                </View>
            </TouchableHighlight>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:44,
        flexDirection: 'row',
        backgroundColor: Color.COLOR_COMMON_FONT,
        borderBottomWidth: 1,
        borderBottomColor: Color.COLOR_VIEW_BAC,
        alignItems: 'center',
    },
    title:{
        marginLeft: 10,
        fontSize: 15,
        fontWeight:'600',
        
    },
    content:{
        flex: 1,
        textAlign:'right',
        fontSize: 16,
        marginRight: 10,
        color:Color.COLOR_MAIN_THEME,
    },
    imgView:{
        marginRight: 15,
    },
    arrow:{
        width:20,
        height:20,
        marginRight: 10,
        // backgroundColor: 'red',
    },
    imgViewHidden:{
        display: 'none',
    }

})
