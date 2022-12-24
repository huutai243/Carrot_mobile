import firebase from "firebase/compat";
export const AddUser= async(name,email,image,uid)=>{
    try {
        // return await firebase.database().ref("users/"+uid).
        // set({name:name, email:email,image:image});
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
            name,
            email,
            image,
            uid
        })
    } catch (error) {
        return error;
    }

}

export const UpdataUserImage=async(image,uid)=>{
    try {
        // return await firebase.database()
        // .ref("users/"+uid)
        // .update({
        //     image:image
        // })
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
            image,
            uid
            
        })
    } catch (error) {
        return console.error();
    }
}