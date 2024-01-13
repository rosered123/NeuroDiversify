import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button, Linking, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../UserContext'; 
import CreatePostScreen from '../screens/PostScreen';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../firebase';
import Tts from 'react-native-tts';


const PostItem = ({ item, navigation }) => {
  const { user, favIds } = useContext(UserContext);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
    
  useEffect(() => {
    if (favIds.includes(item.id)) {
      setIsPressed(true);
    }else {
        setIsPressed(false);
    }
  }, [favIds]);
    
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    console.log(isMaximized);
  };
  
  const handlePress = async () => {
    if (user) {
      
      if (!isPressed){
        try {
          const userDoc = doc(db, 'users', user.uid);
          await updateDoc(userDoc, {
            favorites: arrayUnion(item.id),
          });
          console.log('Post ID added to favorites:', item.id);
          setIsPressed(!isPressed);
        } catch (error) {
          console.error('Error adding post ID to favorites:', error);
        }
      
      } else {
          try {
            const userDoc = doc(db, 'users', user.uid);
            await updateDoc(userDoc, {
              favorites: arrayRemove(item.id),
            });
            console.log('Post ID removed from favorites:', item.id);
            setIsPressed(!isPressed);
          } catch (error) {
            console.error('Error removing post ID from favorites:', error);
          }
        }
    } else { // if user is not logged in
      navigation.navigate('Login');
    }
  };

  const speak = ttsText => {
    Tts.speak(ttsText);
  }
  
  return (
    <View style={styles.postContainer}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={styles.postTitle}>{item.title}</Text> 
        <Icon.Button onPress={() => speak(item.title)} name="microphone" size={30} backgroundColor="67DE8f" color={isPressed ? 'blue': 'black'}/>
      </View>
      {user ? (
        <Icon.Button onPress={handlePress} name="heart" backgroundColor="67DE8F" color={isPressed ? 'pink' : 'black'}></Icon.Button>
      ) : (
      <Button title="Login for Favorites Feature" onPress={() => navigation.navigate('Login')} />
      )}
      {item.link ? (
        <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
          <Text style={styles.postLink}>{item.link}</Text>
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity onPress={handleMaximize} style={styles.button}>
        <Text style={[styles.postBody, { maxHeight: isMaximized ? '100%' : 80 }]}>{item.body}</Text>
        <Icon name={isMaximized ? 'compress' : 'expand'} size={20} color="blue" /> 
      </TouchableOpacity> 
    </View>
  );
}

export default PostItem;
