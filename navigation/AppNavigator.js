import React, { Component } from "react";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  Home from "../Components/Home"
import  ChatHome from "../Screens/ChatHome"
import AddFriends from "../Components/AddFriends";
import Notifications from "../Components/Notifications";
import Profile from "../Components/Profile";
//icon of navbar
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { Colors } from "react-native-paper";



const Tab = createMaterialTopTabNavigator();

const AppNavigator = () =>{
    return(
        <Tab.Navigator style={styles.container}>
        {/* <Tab.Navigator style={{paddingTop:StatusBar.currentHeight}}></Tab.Navigator> */}
            <Tab.Screen  options={{title:props =><AntDesign name="home" size={24} color="black"   />}}
            component={Home} name='Home'/>
            <Tab.Screen  options={{title:props =><Ionicons name="chatbox-ellipses-outline" size={24} color="black" />}}
            component={ChatHome} name='ChatHome'/>
            <Tab.Screen options={{title:props =><AntDesign name="adduser" size={24} color="black" />}}
            component={AddFriends} name='AddFriends'/>
            <Tab.Screen options={{title:props =><Ionicons name="notifications-outline" size={24} color="black" />}} 
            component={Notifications} name='Notifications'/>
            <Tab.Screen options={{title:props =><Feather name="user" size={24} color="black" />}} 
            component={Profile} name='Profile'/>
        </Tab.Navigator>
    )
}

// const styles =StyleSheet.create({
//     container:{}
// })

const styles =StyleSheet.create({
    container:{
        //paddingTop:StatusBar.currentHeight,
        paddingTop:24,
        backgroundColor:'#ff4c00'
    },
   
})


export default AppNavigator;