import React,{useState,useEffect} from 'react'
import {View,Text,Image,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import firestone from '@react-native-firebase/firestore'
import firebase from "firebase/compat";
import { FAB } from 'react-native-paper'
import { async } from '@firebase/util'
import Chat from '../Components/Chat'
import { getAuth } from 'firebase/auth'
import { Query, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore'


export default function ChatHome({user,navigation}){
  const[users,setUsers] = useState(null)
  const getUsers = async ()=>{
     const querySanp = await firebase.firestore().collection('users').get()
     const allusers = querySanp.docs.map(docSnap =>(docSnap.data()))

     setUsers(allusers) 
  }
  useEffect(()=>{
    getUsers()
  },[])

  const RenderCard = ({item})=>{
    return(
       <TouchableOpacity onPress={()=>navigation.navigate(Chat,{uid:item.uid
    })}>
       <View style={styles.mycard}>
                  <Image source={{uri:item.pic}} style={styles.img}/>
                  <View>
                      <Text style={styles.text}>
                          {item.name}
                      </Text>
                      <Text style={styles.text}>
                          {item.email}
                      </Text>
                  </View>
              </View>
       </TouchableOpacity>
    )
  }

  return (
    <View style={{flex:1}}>
        <FlatList 
          data={users}
          renderItem={({item})=> {return <RenderCard item={item} /> }}
          keyExtractor={(item)=>item.uid}
        />
         {/* <FAB
            style={styles.fab}
            icon="face-profile"
            color="black"
            onPress={() => navigation.navigate("account")}
        /> */}
        
    </View>
)
}


const styles = StyleSheet.create({
  img:{width:60,height:60,borderRadius:30,backgroundColor:"green"},
  text:{
      fontSize:18,
      marginLeft:15,
  },
  mycard:{
      flexDirection:"row",
      margin:3,
      padding:4,
      backgroundColor:"white",
      borderBottomWidth:1,
      borderBottomColor:'grey'
  },
  fab: {
   position: 'absolute',
   margin: 16,
   right: 0,
   bottom: 0,
   backgroundColor:"white"
 },
});