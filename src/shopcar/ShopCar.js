import React, { Component } from 'react'
import { Text, StyleSheet, View ,FlatList,SwipeableFlatList, TouchableHighlight,Image} from 'react-native'
import Color from '../common/Color';
import Swipeout from 'react-native-swipeout';

export default class ShopCar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[{name:'苹果1',count:1,selected:false,price:12},
         {name:'苹果2',count:1,selected:false,price:12},
         {name:'苹果3',count:1,selected:false,price:12},
         {name:'苹果4',count:1,selected:false,price:12},
         {name:'苹果5',count:1,selected:false,price:12},
         {name:'苹果6',count:1,selected:false,price:12},
         {name:'苹果7',count:1,selected:false,price:12}],
      }
    }
    static navigationOptions={
        headerTitle:'购物车',
    }

    renderItem({item,index}){
        var swipeoutBtns = [
            {
                text:'删除',
                backgroundColor:Color.COLOR_PRICE,
                onPress:(()=>this.deleteItem(item,index)),
            }
        ];
        return (
            <Swipeout right={swipeoutBtns} autoClose={true} 
            >
                <TouchableHighlight style={styles.itemContent} 
            onPress={()=>this.itemDidSelected(item,index)}
            underlayColor={'rgb(255,255,255)'}>
                <View style={styles.contentView}>
                    <View style={styles.imgView}>
                        <Image style={styles.img} ></Image>
                    </View>
                    
                    <View style={styles.subView}>
                        <Text style={styles.name}>{item.name} </Text>
                        <Text >价格：<Text style={styles.price}>￥{item.price}</Text></Text>
                        <Text style={styles.count}>数量:{item.count}</Text>
                    </View>
                </View>
            </TouchableHighlight>
            </Swipeout>

            
        )
    }

    itemDidSelected=(item,index)=>{
        console.log('item didselected');
    }
    deleteItem=(item ,index)=>{
        console.log(item);
        var list = this.state.data;
        list.splice(index,1);
        this.setState({data:list});
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList data = {this.state.data}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={(item,index)=>index}
                extraData={this.state.data}
                ></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color.COLOR_VIEW_BAC,
    },
    itemContent:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        backgroundColor: Color.COLOR_COMMON_FONT,
        borderRadius: 3,
        height:80,
    },
    contentView:{
        flex: 1,
        flexDirection: 'row',
    },
    imgView:{
        margin: 10,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width:60,
        height:60,
        backgroundColor:Color.COLOR_MAIN_THEME,
    },
    subView:{
        flex: 1,
        marginRight: 10,
    },
    name:{
        fontSize: 16,
        color:Color.COLOR_MAIN_THEME,
        marginTop: 10,
    },
    price:{
        color:Color.COLOR_PRICE,
        fontSize: 15,
        fontWeight:'600',
        marginTop: 10,
    },
    count:{
        marginTop: 5,
    },
    swipper:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent:'center',
        marginLeft: 10,
        marginRight: 10,
    },
    deleteView:{
        padding: 10,
        width:100,
        height:80,
        flex: 1,
        marginTop: 5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:Color.COLOR_PRICE,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    deleteText:{
        fontSize: 18,
        color:Color.COLOR_COMMON_FONT,
    }

    

})
