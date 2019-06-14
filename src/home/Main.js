import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableHighlight,Image} from 'react-native'
import { thisTypeAnnotation } from '@babel/types';


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
        this.props.navigation.navigate('ShopCar');
    }
    constructor(props) {
      super(props)
        
      this.state = {
         
      }
    }
    
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
