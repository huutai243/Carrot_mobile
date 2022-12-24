import React  from "react";
import { AntDesign } from '@expo/vector-icons';  
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'
import {View,StyleSheet,Text, Image, ScrollView, TextInput, Button, Touchable, TouchableOpacity} from 'react-native'

const Home = () =>{
    return(
        <ScrollView style={styles.container}>
           <View style={styles.top}>
            <Image source={require('../image/ic_account.png')} style={styles.image}></Image>
            <TextInput style={styles.textinput}  placeholder='Hôm nay bạn thế nào?' />
           </View>
           <View style={styles.more}>
                <Ionicons style={styles.videocam} name="ios-videocam" size={18} color="#F44337" ><Text  style={styles.text} >Live</Text></Ionicons> 
                <View style={styles.gap}></View>
                <Ionicons style={styles.photo} name="images-outline" size={18} color="#4CAF50" ><Text  style={styles.text}>Photo</Text></Ionicons><View style={styles.gap}></View>
                <MaterialCommunityIcons style={styles.videoplus} name="video-plus" size={18} color="#E141FC" ><Text  style={styles.text}>Room</Text></MaterialCommunityIcons>
           </View>
           <View style={styles.gap1}/>
           <View style={styles.timeline}>
           
            <View style={styles.view}>
            <Image source={require('../image/ic_account.png')} style={styles.image1}></Image>
            <View style={styles.view2} >
                <Text>Lê Tuấn Tài</Text>
                <Text style={styles.texttime}>22:03-03/08/2022</Text>
            </View>
            </View>
             <View style={styles.status}><Text>Hôm nay trời đẹp quá trời</Text></View>
             <View style={styles.imagepost}>
                    <View style={styles.imagepost1}>
                    <Image source={require('../image/ic_accountsquare.png')} style={styles.imageleft}></Image>
                    </View>
                    <View style={styles.imagepost2}>
                        <View>
                        <Image source={require('../image/ic_accountsquare.png')} style={styles.imageright1}></Image>
                        </View>

                        <View>
                        <Image source={require('../image/ic_accountsquare.png')} style={styles.imageright2}></Image>
                        </View>
                    </View>
             </View>
             <View style={styles.like}>
             <TouchableOpacity><AntDesign name="heart" size={20} color="red" /></TouchableOpacity>
             <Text>100</Text>
             <TouchableOpacity><AntDesign name="like2" size={20} color="red" style={styles.heart} /></TouchableOpacity>
             <Text style={styles.textheart}>5</Text>
             </View>
           </View>
           <View style={styles.gap1}/>
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    container:{
       flexDirection:"column",
      backgroundColor:"#ffffff"
      

    },
    top:{

        flexDirection:"row",
        height:80,
        
    },
   
    image:{
        flex:1,
        width:40,
        height:40,
        top:20,
        resizeMode:'contain'
    },

    image1:{
        flex:1,
        width:40,
        height:40,
        top:10,
        resizeMode:'contain'
    },
    textinput:{
        flex:6,
        backgroundColor:"#ffffff"
        
    },
    more :{
       flexDirection:"row",
       height:42,
       justifyContent:"center",
       left:40
     
    },
    gap:{ 
        flex:0.01,
        height:20,
        with:1,
        right:40,
        backgroundColor:"#B8AFAF"
           
    },
    gap1:{
       height:8,
       backgroundColor:"#d9d9d9"
    },
    videocam:{
        flex:1,
       
        
    },
      photo:{
        flex:1,
        
      },

      videoplus:{
        flex:1,
       
      },
       text:{
        left:4,
        fontSize:18,
        bottom:16,
        
       }
      ,
     
       
    
      
    timeline:{
        top:10,
        height:400,
        backgroundColor:"white"
    },
    view:{
        flexDirection:"row",
       height:60,
       
    },
    view2:{
        top:13,
        flex:6,
        
        
    },
    texttime:{
        fontSize:12,
    },
    status:{
        
        top:0,
        height:16,
        left:14
        
    },

    imagepost2:{
        top:10,
        flex:3,
        left:10,
        flexDirection:"column",
        height:200,
        
    },
    imagepost:{
        top:10,
        flex:1,
        flexDirection:"row",
        height:200,
       
    },
    imagepost1:{
        top:10,
        flex:7,
        left:10,
        height:200,
        
       
        
    },
    imageleft:{
        height:200,
        width:280,
        borderRadius: 20,
        resizeMode:"contain"
    },
    imageright1:{
        height:95,
        width:95,
        borderRadius: 20,
        resizeMode:"contain"
    },
    imageright2:{
        top:10,
        height:95,
        width:95,
        borderRadius: 20,
        resizeMode:"contain"
    },
     like:{
        bottom:75,
        flexDirection:"row",
        left:18
     },
     heart:{
        left:10
     },
     textheart:{
        top:2,
        left:10
     }
      
    
});

export default Home;