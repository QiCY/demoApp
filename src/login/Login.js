import React, { Component } from 'react';
import { View, Text ,TextInput,TouchableHighlight,StyleSheet,Alert} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import Loading from '../common/Loading';
import HttpAPI from '../common/HttpAPI';
import Color from '../common/Color';
import RNStorage from '../common/RNStorage';

const loginUrl = "https://program-testapi.yonghui.cn/usercenter/login?businessType=20";
export default class Login extends Component {
    static navigationOptions = {
        headerTitle:'登录',
        headerLeft:null,
        
    }
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      loginEnabled:false,
      loginState:false,
      showLoading:false,
    };
  }

  loginSuccess(response){
    this.setState({showLoading:false});
    if (response.message === 'success') {
      this.refs.toast.show('登录成功');
      RNStorage.save({
        key:'loginState',
        data:true,
      });
      this.props.navigation.navigate('Home');
      
    }else{
      this.refs.toast.show(response.message);
    }
  }

  loginAction=()=>{
    if (this.state.username.length === 0) {
      this.refs.toast.show('用户名不能为空');
      return;
    }
    if (this.state.password.length === 0) {
      this.refs.toast.show('密码不能为空');
      return;
    }

    var forge = require('node-forge');
    var md = forge.md.md5.create();
    md.update(this.state.password);
    var password = md.digest().toHex();
    let param = {username:this.state.username,password:password};
    console.log(param);
    this.setState({showLoading:true});
    HttpAPI.post(loginUrl,param,(response)=>{
      this.loginSuccess(response);

    });


  }
  forgetAction=()=>{
    console.log('forget password');
    this.props.navigation.push('ForgetPassword');
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={[styles.input,styles.username]} 
        placeholder={'请输入账号'} 
        onChangeText={(text)=>this.setState({username:text})}></TextInput>
        <TextInput style={[styles.input,styles.password]}
         placeholder={'请输入密码'} 
         secureTextEntry={true}
         onChangeText={(text)=>this.setState({password:text})}></TextInput>
        
         <TouchableHighlight onPress={this.loginAction} 
         style={styles.loginView}
         underlayColor={Color.COLOR_TOAST_BAC}>
           <Text style={styles.login}>登录</Text>
         </TouchableHighlight>
         <TouchableHighlight style={styles.forgetView}
          onPress={this.forgetAction}
          underlayColor={Color.COLOR_COMMON_FONT}>
           <Text style={styles.forget} 
           >忘记密码？</Text>
         </TouchableHighlight>

         <Toast ref='toast' style={{backgroundColor:Color.COLOR_TOAST_BAC}}
        position='center'></Toast>

        <Loading showLoading={this.state.showLoading}></Loading>
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
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 22,
    paddingLeft: 15,
  },
  username:{
    marginTop: 60,

  },
  password:{
    marginTop: 20,
  },
  login:{
    flex: 1,
    color:Color.COLOR_COMMON_FONT,
    fontSize: 18,
    fontWeight:'600',
    lineHeight:44,
  },loginView:{
    marginLeft:20,
    marginRight: 20,
    marginTop: 40,
    height:44,
    backgroundColor: Color.COLOR_MAIN_THEME,
    borderRadius: 22,
    
    alignItems: 'center',
  },
  forget:{
    color:'red',
    lineHeight:40,
  },
  forgetView:{
    marginTop:30,
    alignItems: 'center',
    height:40,
  }
})
