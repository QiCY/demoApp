import React, { Component } from 'react';
import { View, Text ,FlatList,StyleSheet,TouchableHighlight} from 'react-native';
import Toast,{DURATION}  from 'react-native-easy-toast'
import Color from '../common/Color';


export default class LeftMenu extends Component {
  constructor(props) {
    super(props);

    var index = this.props.leftSelectIndex;
    this.state = {
        data:this.props.data,
        selectIndex:index,
    };
  }

  
  
  
  itemSelected=(item,index)=>{
    // this.refs.toast.show(item+index);
    
    var list = this.state.data;
    var select = this.state.selectIndex;
    select = index;
    this.setState({selectIndex:select},()=>{
      // console.log(this.state.selectIndex);
      this.props.callBack(item,index);
    });
    
    
  }
  render() {
    return (
      <View style={styles.container}>
          <FlatList style={styles.menuList} data={this.state.data} 
          renderItem={({item,index})=>
          
          <TouchableHighlight style={index===this.state.selectIndex? styles.itemSelecedView:styles.itemView} 
          underlayColor={'rgba(12,34,111,0.2)'}
          onPress={()=>this.itemSelected(item,index)} >
              <Text style={ index===this.state.selectIndex?styles.selecteditem:styles.item}>{item}{index}</Text>
          </TouchableHighlight>
          
      }
      extraData={this.state.selectIndex}
      >
          </FlatList>

          <Toast ref='toast' position='center' style={{backgroundColor:Color.COLOR_TOAST_BAC}}></Toast>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        width:100,
        backgroundColor:'rgb(233,233,233)',
        
    },
    itemSelecedView:{
      borderBottomColor: 'red',
      borderBottomWidth: 1,
      backgroundColor:Color.COLOR_MAIN_THEME
    },
    itemView:{
      borderBottomColor: Color.COLOR_MAIN_THEME,
      borderBottomWidth: 1,
      

    },
    item:{
        height:40,
        lineHeight:40,
        textAlign:'center',
        fontSize: 16,
        fontWeight:'400',
        color:Color.COLOR_MAIN_THEME,
        
    },
    selecteditem:{
      height:40,
        lineHeight:40,
        textAlign:'center',
        fontSize: 18,
        fontWeight:'600',
        color:'#fff',
        
    }
    
})