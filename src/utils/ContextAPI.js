import { useState,createContext } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
const TweetContext = createContext();

export function TwitterProvider  ({children}){

  const [posts, setPosts] = useState([]); 


  const createPost = async (username,image,imageName,profilePic,content) => {
    const imageRef =firebase.storage.ref().child(imageName);
    const imageSnapshot = await imageRef.put(image);
    const imageUrl = await imageSnapshot.ref.getDownloadURL();
    const post = {
      username,
      imageUrl,
      profilePic,
      content,
    };
    await firebase.collection('Tweets').add(post);
  };

    return (
        <TweetContext.Provider value={{createPost,posts}}>{children}</TweetContext.Provider>
    );
}




export default TweetContext;