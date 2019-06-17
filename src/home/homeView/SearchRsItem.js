import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableHighlight,TextInput} from 'react-native'
import Color from '../../common/Color';

export default class SearchRsItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:this.props.data,
      }
    }
    
    searchItemDidSelect=()=>{
        console.log('searchItemDidSelect');
    }
    addBntClick=()=>{
        console.log('add count');
    }
    render() {
        return (
            <TouchableHighlight onPress={()=>this.searchItemDidSelect()}
            underlayColor={'rgba(122,133,1,0.1)'}
            style={styles.item}>
                <View style={styles.container}>
                    <View style={styles.imgView}>
                        <Image style={styles.img}></Image>
                    </View>
                    <View style={styles.infoView}>
                        <View style={styles.nameView}>
                            <Text style={styles.name}>{this.state.data.code} {this.state.data.name}</Text>
                        </View>
                        <View style={styles.storeView}>
                            <Text>系统库存</Text>
                            <Text>{this.state.data.store}</Text>
                        </View>
                        <View style={styles.realStoreView}>
                            <Text>实际库存</Text>
                            <TextInput defaultValue={String(this.state.data.store) }
                            style={styles.storeInput}></TextInput>
                            <TouchableHighlight onPress={()=>this.addBntClick()}
                            underlayColor={'rgba(122,133,1,0.1)'}>
                                <Image style={styles.addBtn}
                                source={require('../../../images/addbtn.png')}></Image>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
            
        )
    }
}

const styles = StyleSheet.create({
    item:{
        borderBottomColor: Color.COLOR_VIEW_BAC,
        borderBottomWidth: 1,
    },
    container:{
        flexDirection: 'row',
    },
    imgView:{
        margin: 10,

    },
    img:{
        width:70,
        height:70,
        backgroundColor: 'red',
    },
    infoView:{
        flex: 1,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'space-between',
    },
    name:{
        fontSize: 14,
        fontWeight:'500',
    
    },
    storeView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,

    },
    realStoreView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        alignItems: 'center',
    },
    storeInput:{
        height:24,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor:Color.COLOR_VIEW_BAC,
        borderWidth: 1,
        borderRadius: 12,
    },
    addBtn:{
        width:25,
        height:25,
    }

})
