import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,TextInput,TouchableHighlight,Keyboard} from 'react-native'
import Color from '../../common/Color';
import SearchText from './SearchText';

export default class SearchHeader extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
         editable:this.props.editable,
      }
    }

    

    searchAction=()=>{
        console.log('start search');
        Keyboard.dismiss();
        this.props.searchAction && this.props.searchAction();
    }
    scanAction=()=>{
        console.log('start scan');
    }
    searchText=(text)=>{
        console.log('search text ' + text);
        this.props.searchText && this.props.searchText(text);
    }
    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight onPress={()=>this.searchAction()} 
                style={styles.searchView}
                underlayColor={'rgba(122,133,1,0.1)'}>
                    <View style={styles.searchSubView}>
                        <Image style={styles.searchImg}
                        source={require('../../../images/search_gray.png')}>

                        </Image>
                        <SearchText editable={this.state.editable}
                        searchAction={()=>this.searchAction()}
                        searchText={(text)=>this.searchText(text)}>

                        </SearchText>
                       
                    </View>
                </TouchableHighlight>
                

                <TouchableHighlight onPress={()=>this.scanAction()}
                style={styles.scanView}>
                    <View >
                        <Image style={styles.scanImg}
                        source={require('../../../images/scan.png')}></Image>
                    </View>
                </TouchableHighlight>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 5,
        height:36,
        backgroundColor: Color.COLOR_VIEW_BAC,
        flexDirection: 'row',
        
        alignItems: 'center',
    },
    searchView:{
        
        flexDirection: 'row',
        flex: 1,
        height:36,
        alignItems: 'center',
        
    },
    searchSubView:{
        marginLeft: 10,
        flexDirection: 'row',
        flex: 1,
        height:36,
        alignItems: 'center',
    },
    searchImg:{
        width:30,
        height:30,

        // backgroundColor: Color.COLOR_TOAST_BAC,
        
    },
   
    scanView:{
       
        width:36,
        height:36,
        marginRight: 10,
        // backgroundColor: Color.COLOR_MAIN_THEME,
        justifyContent: 'center',
    },
    
    scanImg:{
        width:30,
        height:30,
    }
})
