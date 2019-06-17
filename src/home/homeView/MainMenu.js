import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions,FlatList,Image,TouchableHighlight} from 'react-native'

const ScreenWidth = Dimensions.get('window').width;
const cellWidth = ScreenWidth/4;
export default class MainMenu extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:['下单','盘点','报损','销售查询'],
      }
    }

    itemDidSelected = (item,index)=>{
        console.log(item+index);
    }
    renderItem({item,index}){
        return(
            <TouchableHighlight onPress={()=>this.itemDidSelected(item,index)}
            underlayColor={'rgba(122,133,1,0.1)'}>
                <View style={styles.itemView}>
                    <Image style={styles.itemImg}
                    source={require('../../../images/submit_order.png')}></Image>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            </TouchableHighlight>
            
        )
    }
    
    render() {
        return (
            <View>
                <FlatList data={this.state.data}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={(index)=>index}
                extraData={this.state.data}
                numColumns={4}
                horizontal={false}
                scrollEnabled={false}></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemView:{
        width:cellWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemImg:{
        width:40,
        height:40,
        marginTop: 10,
        marginBottom: 10,
        // backgroundColor: 'red',
    },
    itemText:{
        marginBottom: 10,
        textAlign:'center',
    }
})
