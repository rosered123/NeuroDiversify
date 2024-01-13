import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../UserContext'; 
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
const API_ENDPOINT = 'https://7e11f15c-d1b8-4c63-a2e9-429eac108ade-00-2udzpskg2c7ux.global.replit.dev/api';
import { db } from '../firebase';
import PostItem from '../components/PostItem';
import { PostsContext } from '../PostsContext';

const CreatePostScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const { posts, fetchPosts } = useContext(PostsContext);
  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleLinkChange = (text) => {
    setLink(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  

  const handleSubmit = async () => {
    const postId = uuidv4(); //creates id for each post
    
    const data = {
      id: postId,
      title,
      link,
      body: description,
    };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
          if (user) {
            const userDoc = doc(db, 'users', user.uid);
            await updateDoc(userDoc, {
              posts: arrayUnion(postId),
            });
            alert('user posted')
          }
        fetchPosts();
        alert('Post created successfully!');
        setTitle('');
        setLink('');
        setDescription('');
        console.log(data)
        navigation.goBack();
    
      } else {
        alert('response bad');
      }
    } catch (error) {
      alert('Error creating post. Please try again.');
    }
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={handleTitleChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Link (Optional)"
        value={link}
        onChangeText={handleLinkChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Description"
        value={description}
        onChangeText={handleDescriptionChange}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default CreatePostScreen;
