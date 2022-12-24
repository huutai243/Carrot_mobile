import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback
} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, database } from '../config/firebaseSDK';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../colors';

export default  function Chat()  {  
  const [messages, setMessages]  =  useState([]);
  const navigation = useNavigation();
  const onSignOut = () =>{signOut(auth).catch(error =>console.log(error))
  };

  useLayoutEffect(()=>{
     const collectionRef =collection(database,'chats');
     const q= query(collectionRef,orderBy('createdAt','desc'));

     const unsubscribe = onSnapshot(q,snapshot=>{
      console.log('Snapshot ');
      setMessages(
        snapshot.docs.map(doc =>({
          _id:doc.id,
          createdAt :doc.data().createdAt.toDate(),
          text:doc.data().text,
          user:doc.data().user
        }))
      )
     });
     return ()=>unsubscribe();
  },[]);

//   useEffect(() => {
        
//     const collectionRef = collection(database, "chats");
//     const q = query(collectionRef, orderBy('createdAt', 'desc'));

//     const unsubscribe = onSnapshot(q, querySnapshot => {
//      setMessages(
//       querySnapshot.docs.map(doc => ({
//         _id: doc.data()._id,
//         createdAt: doc.data().createdAt.toDate(),
//         text: doc.data().text,
//         user: doc.data().user
//       }))
//     );
//   });
// return() =>unsubscribe();
// }, []);

   const onSend = useCallback((messages = [])=>{
    setMessages(previousMessages => GiftedChat.append(previousMessages,messages));
    const {_id,createdAt,text,user} = messages[0];
    addDoc(collection(database,'chats'),{
      _id,
      createdAt,
      text,
      user
    });
   },[]);

  return (
     <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      showUserAvatar={true}
      onSend={messages => onSend(messages)}
      user = {{
        uid :auth?.currentUser?.uid,
        name:auth?.currentUser?.displayName,
        // avatar:auth?.currentUser.photoURL,
         avatar: 'https://vn-live-01.slatic.net/p/648f4a4b0070bfd6767f9403ad3df3c8.jpg'
      }}
      messagesContainerStyle={{
            backgroundColor: '#fff'
          }}
          textInputStyle={{
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
      />
  )
}
// import React, {
//   useState,
//   useEffect,
//   useLayoutEffect,
//   useCallback
// } from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';
// import {
//   collection,
//   addDoc,
//   orderBy,
//   query,
//   onSnapshot
// } from 'firebase/firestore';
// import { signOut } from 'firebase/auth';
// import { auth, database } from '../config/firebaseSDK';
// import { useNavigation } from '@react-navigation/native';
// import { AntDesign } from '@expo/vector-icons';
// import colors from '../colors';


// export default function Chat() {

//   const [messages, setMessages] = useState([]);
//   const navigation = useNavigation();

// const onSignOut = () => {
//     signOut(auth).catch(error => console.log('Error logging out: ', error));
//   };

//   useLayoutEffect(() => {
//       navigation.setOptions({
//         headerRight: () => (
//           <TouchableOpacity
//             style={{
//               marginRight: 10
//             }}
//             onPress={onSignOut}
//           >
//             <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/>
//           </TouchableOpacity>
//         )
//       });
//     }, [navigation]);

 

//   const onSend = useCallback((messages = []) => {
//       setMessages(previousMessages =>
//         GiftedChat.append(previousMessages, messages)
//       );
//       // setMessages([...messages, ...messages]);
//       const { _id, createdAt, text, user } = messages[0];    
//       addDoc(collection(database, 'chats'), {
//         _id,
//         createdAt,
//         text,
//         user
//       });
//     }, []);

//     return (
//       // <>
//       //   {messages.map(message => (
//       //     <Text key={message._id}>{message.text}</Text>
//       //   ))}
//       // </>
//       <GiftedChat
//         messages={messages}
//         showAvatarForEveryMessage={true}
//         showUserAvatar={false}
//         onSend={messages => onSend(messages)}
//         messagesContainerStyle={{
//           backgroundColor: '#fff'
//         }}
//         textInputStyle={{
//           backgroundColor: '#fff',
//           borderRadius: 20,
//         }}
//         user={{
//           _id: auth?.currentUser?.email,
//           avatar: 'https://i.pravatar.cc/300'
//         }}
//       />
//     );
// }
