import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableHighlight} from 'react-native'
import Color from '../../common/Color';

export default class GoodsDetailInfo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:['5kg','10kg','20kg','50kg','80kg','100kg'],
         selectedIndex:0,
      }
    }
    
    normalSelected = (item,index)=>{
        console.log(item+index);
        this.setState({selectedIndex:index});
    }
    render() {
        let normalList = this.state.data;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}> 商品规格 </Text>
                    <Text style={styles.content}></Text>
                </View>
                <View style={styles.normal}>
                    {
                        normalList.map((item,index)=>{
                            return <TouchableHighlight style={(this.state.selectedIndex===index)?styles.normalSelectedView: styles.normalTextView}
                             onPress={()=>this.normalSelected(item,index)}>
                                <Text style={styles.normalText}>{item}</Text>
                            </TouchableHighlight> 
                        })
                    }
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
        backgroundColor: Color.COLOR_COMMON_FONT,
        borderBottomColor: Color.COLOR_VIEW_BAC,
        borderBottomWidth: 1,
    },
    header:{
        height:44,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    title:{
        marginLeft: 5,
        fontSize: 16,
        fontWeight:'400',

    },
    content:{
        flex: 1,
        marginRight: 10,
        fontSize: 16,
        fontWeight:'400',
    },
    normal:{
        marginLeft: 5,
        marginRight: 5,
       
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'flex-start',
    },
    normalText:{
        
        fontSize: 15,
        fontWeight:'500',
        lineHeight:30,
        paddingLeft: 15,
        paddingRight: 15,
        
        color:Color.COLOR_COMMON_FONT,
        
    },
    normalTextView:{
        margin: 5,
        backgroundColor: Color.COLOR_MAIN_THEME,
        borderRadius: 5,
    },
    normalSelectedView:{
        backgroundColor:'red',
        borderRadius: 5,
        margin: 5,
    }


    
})
