import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableHighlight,Image,SectionList} from 'react-native'
import SearchHeader from './homeView/SearchHeader';
import GoodsHeader from '../shopcar/GoodsDetail/GoodsHeader';
import MainMenu from './homeView/MainMenu';
import Color from '../common/Color';
import MainWaitItem from './homeView/MainWaitItem';

export default class Main extends Component {

    static navigationOptions=({navigation})=>{
        return {
            headerTitle:'福州黎明店',
            headerRight: <TouchableHighlight 
            onPress={()=>navigation.state.params.gotoShopCar()}>
                        <Image style={{width:30,height:30}} source={require('../../images/shopcar.png')}></Image>
                    </TouchableHighlight>,
            headerRightContainerStyle:{
                paddingRight: 15,
            }  
        }
            
    }

    componentDidMount = () => {
      this.props.navigation.setParams({gotoShopCar:this.gotoShopCar});
    };
    
    gotoShopCar=()=>{
        this.props.navigation.popToTop();
        this.props.navigation.navigate('ShopCar');
    }
    constructor(props) {
      super(props)
        
      this.state = {
         data:[{title:'search',data:['search']},
         {title:'banner',data:['banner']},
         {title:'menu',data:['menu']},
         {title:'undo',data:['undo','undo']}],
      }
    }
    
    renderSectionHeader=(item)=>{
        console.log(item);
        if (item.title === 'undo') {
            return (
                <View style={styles.sectionHeader}>
                    <Text style={styles.headerTitle}>待办事项</Text>
                </View>
                
            )
        }else{
            return <View></View>
        }
    }


    
    itemCallBack=()=>{
        console.log('callback');
    }

    searchAction=()=>{
        this.props.navigation.push('SearchResultVC');
    }
    renderItem=(item,section,index)=>{
        // console.log(section);
        switch (item) {
            case 'search':
                return <SearchHeader searchAction={()=>this.searchAction()} editable={false}></SearchHeader>
                break;
            case 'banner':
                return <GoodsHeader></GoodsHeader>
                break;
            case 'menu':
                return <MainMenu></MainMenu>
                break;
        
            default:
                return <MainWaitItem callback={()=>this.itemCallBack()}></MainWaitItem>
             break;       
                 
                
        }
        
    }
    render() {
        return (
            <View style={styles.container}>

            <SectionList
            sections={this.state.data}
            renderItem={({item,section,index})=>this.renderItem(item,section,index)}
            renderSectionHeader={({section:{title}})=>this.renderSectionHeader({title})}
            ></SectionList>
            
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

        
    },
    sectionHeader:{
        height:44,
        justifyContent: 'flex-end',
        backgroundColor:Color.COLOR_VIEW_BAC,
    },
    headerTitle:{
    
        backgroundColor: '#fff',
        lineHeight:34,
        paddingLeft: 15,
        fontSize: 18,
        fontWeight:'600',
        
    },
    itemCell:{
        
        flexDirection: 'row',
    },
    
    itemTitle:{
        paddingLeft: 25,
    },
    itemContent:{
        paddingLeft:15,
    }

})
