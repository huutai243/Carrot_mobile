import React  from "react";
import {View,StyleSheet,Text, Image, Button} from 'react-native'

const AddFriends = () =>{
    return(
        
        <View style={styles.container}>
           <View style={styles.top} >
              <Text style={styles.topleft}>Bạn bè</Text>
              <Image source={require('../image/ic_find.png')} style={styles.topright}/>
           </View>

           <View style={styles.btn} >
                <View style={styles.btnleft}><Button title="Lời mời kết bạn"/></View>
                <View style={styles.btnright}><Button title="Bạn bè"/></View>   
           </View> 
           
           <View style={styles.bottom}>
           
              <View style={styles.people1}>
               <Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
                <View  style={styles.namePeople1}>
                    <Text style={styles.name1}>Lê Tuấn Tài</Text>
                    <View style={styles.btn1}>
                        <View style={styles.btnAccept1}><Button  title="Chấp nhận"/></View>
                         <View style={styles.btnRefuse1}><Button title="Gỡ"/></View>  
                    </View>
                </View>

              </View>

              <View style={styles.people2}>
               <Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
                <View  style={styles.namePeople2}>
                    <Text style={styles.name2}>Lê Tuấn Tài</Text>
                    <View style={styles.btn2}>
                        <View style={styles.btnAccept2}><Button title="Chấp nhận" /></View>
                         <View style={styles.btnRefuse2}><Button title="Gỡ"/></View>  
                    </View>
                </View>

              </View>

              <View style={styles.people3}>
               <Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
                <View  style={styles.namePeople3}>
                    <Text style={styles.name3}>Lê Tuấn Tài</Text>
                    <View style={styles.btn3}>
                        <View style={styles.btnAccept3}><Button title="Chấp nhận"/></View>
                         <View style={styles.btnRefuse3}><Button title="Gỡ"/></View>  
                    </View>
                </View>

              </View>

              <View style={styles.people4}>
               <Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
                <View  style={styles.namePeople4}>
                    <Text style={styles.name4}>Lê Tuấn Tài</Text>
                    <View style={styles.btn4}>
                        <View style={styles.btnAccept4}><Button title="Chấp nhận"/></View>
                         <View style={styles.btnRefuse4}><Button title="Gỡ"/></View>  
                    </View>
                </View>

              </View>

              <View style={styles.people5}>
               <Image source={require('../image/ic_account.png')} style={styles.people1Image}></Image>
                <View  style={styles.namePeople5}>
                    <Text style={styles.name5}>Lê Tuấn Tài</Text>
                    <View style={styles.btn5}>
                        <View style={styles.btnAccept5}><Button title="Chấp nhận"/></View>
                         <View style={styles.btnRefuse5}><Button title="Gỡ"/></View>  
                    </View>
                </View>

              </View>
              


           </View>

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
        left:30,
        top:25,
        fontWeight:'bold',
        fontSize:24,
        
    },

    topright:{
        top:25,
        left:280
        
    },
    btn:{
        flex:1,
        flexDirection:"row",
        color:'##ff4c00',
        

    },
    btnleft:{
        top:5,
        left:40,
        fontWeight:'bold',
        fontSize:18,
        // borderRadius: 40,
        

    },
    btnright:{
        top:5,
        left:120,
        // borderRadius: 40,
        fontWeight:'bold',
        fontSize:18,
        


    },
    bottom:{
        flex:6,
    },
    people1:{
        flex:1,
        flexDirection:"row",
    },

    people1Image:{
        top:4,
        left:40,
         width:60,
         height:60,
         resizeMode:'contain'
    },
    namePeople1:{
        left:90,
        flex:1,
        

    },
    name1:{
        top:1
    },
    btn1:{
        with:120,
        flexDirection:"row",
        top:10
    },

    btnAccept1:{

    },
    btnRefuse1:{
       paddingLeft:30,
       width:120
    },
    ///////////
    people2:{
        flexDirection:"row",
        bottom:140
    },

    people2Image:{
        top:4,
        left:40,
         width:60,
         height:60,
         resizeMode:'contain'
    },
    namePeople2:{
        left:90,
        flex:1,
        

    },
    name2:{
        top:1
    },
    btn2:{
        with:120,
        flexDirection:"row",
        top:10
    },

    btnAccept2:{

    },
    btnRefuse2:{
       paddingLeft:30,
       width:120
    },
    ////
    people3:{
        flexDirection:"row",
        bottom:120
    },

    people3Image:{
        top:4,
        left:40,
         width:60,
         height:60,
         resizeMode:'contain'
    },
    namePeople3:{
        left:90,
        flex:1,
        

    },
    name3:{
        top:1
    },
    btn3:{
        with:120,
        flexDirection:"row",
        top:10
    },

    btnAccept3:{

    },
    btnRefuse3:{
       paddingLeft:30,
       width:120
    },
    /////
    people4:{
        flexDirection:"row",
        bottom:100
    },

    people4Image:{
        top:4,
        left:40,
         width:60,
         height:60,
         resizeMode:'contain'
    },
    namePeople4:{
        left:90,
        flex:1,
        

    },
    name4:{
        top:1
    },
    btn4:{
        with:120,
        flexDirection:"row",
        top:10
    },

    btnAccept4:{

    },
    btnRefuse4:{
       paddingLeft:30,
       width:120
    },
    ////
    people5:{
        flexDirection:"row",
        bottom:80
    },

    people5Image:{
        top:4,
        left:40,
         width:60,
         height:60,
         resizeMode:'contain'
    },
    namePeople5:{
        left:90,
        flex:1,
        

    },
    name5:{
        top:1
    },
    btn5:{
        with:120,
        flexDirection:"row",
        top:10
    },

    btnAccept5:{

    },
    btnRefuse5:{
       paddingLeft:30,
       width:120
    },
});

export default AddFriends;