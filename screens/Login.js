import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { UserContext } from '../UserContext'; // Adjust this path as needed

export default function Login({ navigation }) {
  const { setUser, setFavIds, user, favIds } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
    
  // useEffect(() => {
  //   if (user) {
  //     navigation.navigate('Main', { screen: 'Home' });
  //   }
  // }, [user]);
    
  const handleSignUp = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        // After sign up, create a document in Firestore for the user
        setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          posts: [], // Start with no posts
          favorites: [] // Start with no favorites
        });
      
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
      setLoading(false)
  };

  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        setUser(user);
        const userDocRef = doc(db, 'users', user.uid);
        const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const favoritesSnap = docSnap.data().favorites || [];
            setFavIds(favoritesSnap);
            navigation.navigate('Main'); 
          }
        });
        return unsubscribe;
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
      setLoading(false)
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Please Login Below Or Click Register to Create A New Account</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={loading} onPress={handleLogin} style={styles.button}>
          {loading ? <ActivityIndicator /> : <Text style={styles.buttonText}>Login</Text>}
        </TouchableOpacity>
        <TouchableOpacity disabled={loading} onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
          {loading ? <ActivityIndicator /> : <Text style={styles.buttonOutlineText}>Register</Text>}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 60,
    margin: 20,
    fontFamily: 'OpenDyslexic'
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});
