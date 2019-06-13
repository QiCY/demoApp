import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ScrollbaleTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ClassDetail from './ClassDetail';
import Toast,{DURATION} from 'react-native-easy-toast';
import Color from '../common/Color';

export default class Category extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:['水果','蔬菜','米面','零食','饮料','鱼肉','洗护'],
         
      }
    }
    static navigationOptions={
        headerTitle:'分类',
    }
    
    changeTab=(object)=>{
       
        this.refs.toast.show(object.ref.props.tabLabel);
    }

    leftMenuSelect=(item,index)=>{
        this.refs.toast.show(item+index);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollbaleTabView style={{marginTop: 0}} 
          initialPage={0}
          tabBarActiveTextColor={Color.COLOR_MAIN_THEME}
          tabBarUnderlineStyle={{backgroundColor:Color.COLOR_MAIN_THEME}}
          renderTabBar={()=><ScrollableTabBar /> }
          onChangeTab={(object)=>this.changeTab(object)}>
             
        {
            this.state.data.map((item, index) => {          
            return (
                    <ClassDetail tabLabel={item} key={index} data={item}
                    leftCallBack={(item,index)=>this.leftMenuSelect(item,index)}/>
                )
                                
             })
         }
          </ScrollbaleTabView>
        
        <Toast ref='toast' position='center' style={{backgroundColor:'#a3c410'}} ></Toast>
          
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
