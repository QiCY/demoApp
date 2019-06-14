import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,TouchableHighlight} from 'react-native';


export default class ForgetPassword extends Component {
    static navigationOptions = {
        headerTitle:'忘记密码',
    }
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      vcode:'',
      password:'',
      confirm:'',
      codeTitle:'获取验证码',
    };
  }

  resetPasswordAction=()=>{
    console.log('重置密码')
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={[styles.username,styles.input]} 
        placeholder={'请输入手机号'}></TextInput>
        <View style={styles.codeView}>
          <TextInput style={[styles.input,styles.vcode]} 
          placeholder={'请输入验证码'}></TextInput>
          <Text style={styles.getcode}>获取验证码</Text>
        </View>
        <TextInput style={[styles.password ,styles.input]}
         placeholder={'请输入新密码'}></TextInput>
        <TextInput style={[styles.confirm,styles.input] }
         placeholder={'请再次确认密码'}></TextInput>
        <TouchableHighlight style={styles.resetpassword} 
        underlayColor={'#a3c410'}
        onPress={this.resetPasswordAction}>
          <Text style={styles.resetText}>重置密码</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
    fontWeight:'400',
    height:44,
    borderWidth: 1,
    paddingLeft:15,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 22,
  },
  username:{
    marginTop: 40,
  
  },
  codeView:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  vcode:{
    flex: 1,
    marginRight: 10,
  },
  getcode:{
    marginRight: 20,
    lineHeight:30,
    fontSize: 15,
    backgroundColor: '#24386c',
    color:'#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    
  },
  password:{
    marginTop: 20,
  },
  confirm:{
    marginTop: 20,
  },
  resetpassword:{
    margin: 20,
    backgroundColor:'#24386c',
    height:44,
    justifyContent: 'center',
    borderRadius: 22,
  },
  resetText:{
    color:'#fff',
    fontSize: 18,
    fontWeight:'600',
    textAlign:'center',
  }
})