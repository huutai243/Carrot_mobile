import React  from "react";
import {View,StyleSheet,Text, Image, TouchableOpacity} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Profile = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.view1}>
              <Image source={require('../image/ic_account.png')} style={styles.image}></Image>
                <View  style={styles.people}>
                    <Text style={styles.name}>Lê Tuấn Tài</Text>
                    <Text style={styles.botname}>Xem trang cá nhân</Text>
                </View>
                <Image source={require('../image/ic_switchaccount.png')} style={styles.change}/>
            </View>
            <View style={styles.gap1}></View>
            <View style={styles.view2}>
            <Image source={require('../image/ic_qrcode.png')} style={styles.qrcode}></Image>
                <View  style={styles.textqr}>
                    <Text style={styles.qrname}>Ví QR</Text>
                    <Text style={styles.qrnamebot}>Lưu trữ và xuất trình các mã qr quan trọng</Text>
                </View>
            </View>
            <View style={styles.view3}>
            <Image source={require('../image/ic_cloud.png')} style={styles.qrcode}></Image>
                <View  style={styles.textcloud}>
                    <Text style={styles.qrname}>Cloud của tôi</Text>
                    <Text style={styles.qrnamebot}>Lưu trữ các tin nhắn quan trọng</Text>
                </View>
            </View>
            <View style={styles.gap2}></View>
            <View style={styles.view4}>
            <Image source={require('../image/ic_protect.png')} style={styles.protect}></Image>
                <Text style={styles.protectname}>Tài khoản và bảo mật</Text>
            </View>
            <View style={styles.view5}>
            <Image source={require('../image/ic_privacy.png')} style={styles.privacy}></Image>
                <Text style={styles.privacyname}>Tài khoản và bảo mật</Text>
            </View>
            <View style={styles.view6}></View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },

    view1:{
      flex:0.6,
      paddingTop:30,
      justifyContent:"center",
      flexDirection:"row",
      
    },

    image:{
        flex:1,
        left:20,
        width:50,
         height:50,
         resizeMode:'contain'

    },

    people:{
          left:34,
          flexDirection:"column",
          flex:4
    },

    name:{
        top:4

    },
    botname:{
        top:6,
          fontSize:12,
    },

    change:{
        flex:1,
        top:0,
        width:40,
        height:40,
        right:30,
        resizeMode:'contain'
    },

    gap1:{
      top:20,
      width:420,
      height:10,
         backgroundColor:"#D9D9D9"
    },

    view2:{
      top:40,
        flex:1,
        flexDirection:"row"
      },
      qrcode:{
        
        left:30,
        width:50,
         height:50,
         resizeMode:'contain'
         
      },
      textqr:{
         flex:4,
         left:60,
        
      },

      view3:{
        top:20,
        flex:1,
        flexDirection:"row"
      },

      cloudcode:{
        left:14,
        width:50,
         height:50,
         resizeMode:'contain'
      },
      textcloud:{
         flex:4,
         left:60,
         fontWeight:'bold',
         fontSize:20,
      },

      gap2:{
        top:10,
        width:420,
        height:10,
           backgroundColor:"#D9D9D9"
      },

      view4:{
        flex:1,
        top:40,
        flexDirection:"row"
      },

      protect:{
        flex:1,
        left:14,
        width:50,
         height:50,
         resizeMode:'contain'
      },
      protectname:{
         flex:4,
         top:16,
         left:28
      },

      view5:{
        flex:1,
        top:20,
        flexDirection:"row"
      },

      privacy:{
        left:30,
        width:50,
         height:50,
         resizeMode:'contain'
      },
      privacyname:{
         flex:4,
         top:16,
         left:60
      },

      view6:{
        flex:1,
      },
});

export default Profile;