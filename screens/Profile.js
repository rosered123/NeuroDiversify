// Profile.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigation from '../components/BottomNavigation';
import { UserContext } from '../UserContext'; // import UserContext

const Profile = ({ navigation }) => {
    const { user } = useContext(UserContext); // get user and favIds from context
    const[showTextInput, setShowTextInput] = React.useState(false);
    const[text, setText] = React.useState('');
    const[submittedText, setSubmittedText] = React.useState('');

    const handleShowText = () => {
      setShowTextInput(!showTextInput);
    };

    const handleTextChange = (inputText) => {
      setText(inputText);
    };

  const handleTextInputClose = () => {
    setShowTextInput(false);
    setText('');
  };

  const handleSubmit = () => {
    setSubmittedText(text);
    setShowTextInput(false);
    setText('');
  };

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Logout successful.");

      // Reset the navigation stack to go back to the "Welcome" screen
      navigation.reset({
        index: 0,
        routes: [{ name: 'Welcome' }],
      });
    })
    .catch((error) => {
      // An error happened.
      console.error("Logout error: ", error);
    });
};

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>You must be logged in to view this page.</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      {/* <View style={styles.subContainer}> */}

      {/* {submittedText == '' && (
        <Text style={styles.username}>John Do</Text>
      )}
        {/* <Text style={styles.username}>John Do {user.displayName}</Text> */} 
        <Text style={styles.username}>Shreya Goel</Text>
        <Icon name="user-circle" size={100} color="black" />
        <Text style={styles.email}>{user.email}</Text>
        {submittedText == '' && (
          <Text style={styles.aboutText}>Enter some stuff about you, your personality, etc...</Text>
        )}
        {submittedText !== '' && (
        <Text style={styles.aboutText}>{submittedText}</Text>
        )}
        
      <View style={styles.editButtons}>
        <TouchableOpacity style={{backgroundColor: "#67A4DE", margin: 20, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 20}}>
          <Text style={{color: '#ffffff', fontFamily: 'OpenDyslexic', fontSize: 20}}>Change Picture</Text>   
 </TouchableOpacity>
        
        <TouchableOpacity style={{backgroundColor: "#67A4DE", margin: 20, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 20}} onPress={handleShowText}>
          <Text style={{color: '#ffffff', fontFamily: 'OpenDyslexic', fontSize: 20}}>Change Bio</Text></TouchableOpacity>
          {showTextInput && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={handleTextChange}
                value={text}
                placeholder="Enter text"
              />
              <Button title="Close" onPress={handleTextInputClose} />
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          )}
        
        
        <TouchableOpacity style={{backgroundColor: "#67A4DE", margin: 20, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 20}} onPress={handleShowText}>
          <Text style={{color: '#ffffff', fontFamily: 'OpenDyslexic', fontSize: 20}}>Change Name</Text></TouchableOpacity>
        {showTextInput && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTextChange} 
              value={text}
              placeholder="Enter text"
            />
            <Button title="Close" onPress={handleTextInputClose} />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
        
        <TouchableOpacity style={{backgroundColor: "#67A4DE", margin: 20, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 20}} onPress={handleLogout}> 
          <Text style={{color: '#ffffff', fontFamily: 'OpenDyslexic', fontSize: 20}}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{fontFamily: 'OpenDyslexic', textAlign: 'left', fontSize: 30}}>Your Posts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    marginTop: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    fontFamily: 'OpenDyslexic'
  },
  email: {
    fontSize: 16,
    color: '#444',
    fontFamily: 'OpenDyslexic'
  },
  aboutText: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'OpenDyslexic',
  },

  editButtons: {
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'space-between'
    
  },

  profileButton: {
    marginRight: 20,
  },

  inputContainer: {
    marginTop: 20,
    margin: 20,
    width: '50%',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: 'OpenDyslexic'
  },

});

export default Profile;
