import React  from "react";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {View,StyleSheet,Text, Image} from 'react-native'

const Notifications = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.top} >
              <Text style={styles.topleft}>Thông báo</Text>
              <Image source={require('../image/ic_find.png')} style={styles.topright}/>
           </View>
            <View style={styles.top2}><Text>Trước đó</Text></View>
            
            <View style={styles.notification1}><Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
            <Text style={styles.text1}>Lê Tuấn Tài đã bình luận trong IUH Confession:"Bạn nữ xinh đẹp giúp mình giải tích phân với" </Text><FontAwesomeIcon name="ellipsis-h" style={styles.font1}></FontAwesomeIcon></View>
            <View style={styles.notification2}><Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
            <Text style={styles.text2}>Lê Tuấn Tài đã bình luận trong IUH Confession:"Bạn nữ xinh đẹp giúp mình giải tích phân với" </Text><FontAwesomeIcon name="ellipsis-h" style={styles.font1}></FontAwesomeIcon></View>
            <View style={styles.notification3}><Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
            <Text style={styles.text3}>Lê Tuấn Tài đã bình luận trong IUH Confession:"Bạn nữ xinh đẹp giúp mình giải tích phân với" </Text><FontAwesomeIcon name="ellipsis-h" style={styles.font1}></FontAwesomeIcon></View>
            <View style={styles.notification4}><Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
            <Text style={styles.text4}>Lê Tuấn Tài đã bình luận trong IUH Confession:"Bạn nữ xinh đẹp giúp mình giải tích phân với" </Text><FontAwesomeIcon name="ellipsis-h" style={styles.font1}></FontAwesomeIcon></View>
            <View style={styles.notification5}><Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
            <Text style={styles.text5}>Lê Tuấn Tài đã bình luận trong IUH Confession:"Bạn nữ xinh đẹp giúp mình giải tích phân với" </Text><FontAwesomeIcon name="ellipsis-h" style={styles.font1}></FontAwesomeIcon></View>
            <View style={styles.notification6}><Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
            <Text style={styles.text6}>Lê Tuấn Tài đã bình luận trong IUH Confession:"Bạn nữ xinh đẹp giúp mình giải tích phân với" </Text><FontAwesomeIcon name="ellipsis-h" style={styles.font1}></FontAwesomeIcon></View>
            <View style={styles.notification7}><Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
            <Text style={styles.text7}>Lê Tuấn Tài đã bình luận trong IUH Confession:"Bạn nữ xinh đẹp giúp mình giải tích phân với" </Text><FontAwesomeIcon name="ellipsis-h" style={styles.font1}></FontAwesomeIcon></View>

        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    top:{
        flex:1,
        flexDirection:"row"
    },

    topleft:{
        flex:1,
        left:30,
        top:25,
        fontWeight:'bold',
        fontSize:24,
        
    },
    topright:{
        top:25,
        right:30
    },

    top2:{
      flex:0.8,
      left:30,
      fontWeight:'bold',
      fontSize:20,
    },
    notification1:{
      flex:1,
      flexDirection:"row"
      
      
    },
    people1Image:{
        flex:2,
        top:4,
        left:2,
         width:45,
         height:45,
         resizeMode:'contain'
    },

    text1:{
        left:6,
       flex:9,
       top:8,
       fontSize:13
    },

    font1:{
        flex:1,
      top:20,
      left:4
    },

    notification2:{
        flex:1,
        flexDirection:"row"
      },

      people2Image:{
        flex:2,
        top:4,
        left:2,
         width:45,
         height:45,
         resizeMode:'contain'
      },
      text2:{
        left:6,
        flex:9,
        top:8,
        fontSize:13
     },

     notification3:{
        flex:1,
        flexDirection:"row"
      },

      people3Image:{
        flex:2,
        top:4,
        left:2,
         width:45,
         height:45,
         resizeMode:'contain'
      },
      text3:{
        left:6,
        flex:9,
        top:8,
        fontSize:13
     },

     notification4:{
        flex:1,
        flexDirection:"row"
      },

      people4Image:{
        flex:2,
        top:4,
        left:2,
         width:45,
         height:45,
         resizeMode:'contain'
      },
      text4:{
        left:6,
        flex:9,
        top:8,
        fontSize:13
     },

     notification5:{
        flex:1,
        flexDirection:"row"
      },

      people5Image:{
        flex:2,
        top:4,
        left:2,
         width:45,
         height:45,
         resizeMode:'contain'
      },
      text5:{
        left:6,
        flex:9,
        top:8,
        fontSize:13
     },

     notification6:{
        flex:1,
        flexDirection:"row"
      },

      people6Image:{
        flex:2,
        top:4,
        left:2,
         width:45,
         height:45,
         resizeMode:'contain'
      },
      text6:{
        flex:9,
        top:8,
        left:6,
        fontSize:13
     },

     notification7:{
        flex:1,
        flexDirection:"row"
      },

      people7Image:{
        flex:2,
        top:4,
        left:2,
         width:45,
         height:45,
         resizeMode:'contain'
      },
      text7:{
        flex:9,
        top:8,
        left:6,
        fontSize:13
     },

    

});

export default Notifications;