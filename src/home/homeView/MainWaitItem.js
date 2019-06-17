import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableHighlight } from 'react-native';
import Color from '../../common/Color';

export default class MainWaitItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={()=>this.props.callback()}
            style={styles.container}
                underlayColor={'rgba(122,133,1,0.1)'}>
                <View style={styles.contentView}>
                
                
                    <Text style={{marginLeft: 15,fontSize: 18,marginRight: 10,}}>kkkkk</Text>
                        
               
                    <Text style={{marginLeft: 20,fontSize: 18,fontWeight:'500'}}>ffff</Text>
                
                </View>

            </TouchableHighlight>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderBottomColor: Color.COLOR_VIEW_BAC,
        borderBottomWidth: 1,
    },
    contentView:{flexDirection: 'row',
    alignItems:'center',
    marginTop: 15,
    marginBottom: 15,
    },

})
