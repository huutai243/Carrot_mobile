import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import ChatRooms from '../../assets/dummy-data/ChatRooms';
import hinhdaidien from '../../assets/hinhdaidien.png'
import Chat from '../Chat';



export default function ChatRoomItem({chatRoom}){   
    const user=chatRoom?.users[0];
  
  return(
    <View style={styles.container}>

            <Image source={{uri:user?.image}} style={styles.hinhdaidienTN}/>
             {chatRoom?.newMessage&&<View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{chatRoom?.newMessage}</Text>
            </View>}
            <View style={styles.rightContainer} >
                <View style={styles.row}>
                <Text style={styles.tennguoinhan}>{user?.name}</Text>
                <Text style={styles.timetext}>{chatRoom?.lastMessage?.time}</Text>
                </View>
               
                <Text numberOfLines={1} style={styles.timetext}>{chatRoom?.lastMessage?.content}</Text>
            </View>
    </View>

  );
}

const styles=StyleSheet.create({
    container:{
        
        flexDirection:"row",
        padding:10
        
    },
    badgeContainer:{
        backgroundColor:'#3872E9',
        width:25,
        height:25,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center' ,
        position:'absolute',
        left:65,
        top:10,
        borderColor:'white'
  
    },
    rightContainer:{
        flex:1,
        justifyContent:'center',
        padding:15
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    badgeText:{
        color:'white',
        fontSize:15,
    },
    tennguoinhan:{
        fontSize:18,
        fontWeight:'bold'
    },
    hinhdaidienTN:{
        height:70,
        width:70,
        borderRadius:50
    },
    timetext:{
        color:'grey'
    }
  });

