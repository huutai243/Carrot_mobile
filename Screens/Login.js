import React  , {useState } from 'react';
import {View, StyleSheet,Text ,TouchableOpacity,TextInput,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config/firebaseSDK';
import Signup from '../Screens/SignUp';
import AppNavigator from '../navigation/AppNavigator';
import imgcarrot from '../assets/carrot.png'
import {useFonts} from 'expo-font'
import  '../assets/google-logo-9824.png'


const Login = ({navigation}) => {
  // const navigation = useNavigation()   
  
  const [email,setEmail] = useState(' ')
  const [password,setPassword] = useState(' ')
   

  const loginUser = async(email,password) =>{
    try {
      await firebase.auth().signInWithEmailAndPassword(email,password) 
            
        .then(()=>navigation.navigate(AppNavigator))      
    } catch (error){
      alert('Tài khoản chưa được đăng kí')
    }
  } 
  
  return (
    <View style={styles.container}>
  
        <View style={styles.navtop}>
     <Text style={styles.textlogin}>CAROT</Text>
     <Image style={styles.img} source={imgcarrot}/>
     </View>
        <View style={{marginTop:40}}>
        <Text style={styles.textnoti}>Email</Text> 
             <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(email)=>setEmail(email)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
              <Text style={styles.textnoti}>Mật khẩu</Text> 
              <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={(password)=>setPassword(password)}   
              autoCapitalize="none"
              autoCorrect={false}
              />
        </View>

        <TouchableOpacity
        onPress={()=>loginUser(email,password)}
        style={styles.button}>
          <Text style={{fontWeight:"bold",fontSize:21}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
           onPress={()=>navigation.navigate({name:'SignUp'})}
           style={{marginTop:20}}>
             <Text style={{fontWeight:"bold",fontSize:16}}>   
              Don't have an accout?Registry Now
             </Text>
        </TouchableOpacity>           

    </View>
  );
}

const styles = StyleSheet.create({
     container : {
      flex:1,
      alignItems:'center',
      marginTop:40,
     },
     textInput:{
      paddingTop:20,
      paddingBottom:10,
      fontSize:20,
      borderBottomWidth:1,
      marginBottom:10,
      textAlign:'center',
      flexDirection:'row',
      borderColor:'#ff4c00',
      borderWidth:1, 
      borderRadius:10, 
      height:50,
      width:300,
      justifyContent:'space-around',
      marginTop:10
     },
     button :{
      marginTop:50,
      height:70,
      width:250,
      backgroundColor:'#ff4c00',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:50
     },
     navtop:{
      alignItems:'center'
    },
    img:{
      height:130,
      width:130,
      rotation:30,
      marginTop:-20,
      marginBottom:-50

    },
    textlogin:{
      fontSize:70,
      color:'red',
    },
    textnoti:{
     fontSize:20,
   },
})

export default Login;
