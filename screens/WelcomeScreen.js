import React from 'react';
import { Text, StyleSheet, Button, View, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function WelcomeScreen({ navigation }) {
  
    return (
        <View>
            <View style={styles.container}>
              <Image style={styles.image} source= {require('../assets/logo.png')}/>
            </View>
            <View style={styles.container2}>
            <TouchableOpacity style={styles.logoLine}></TouchableOpacity>
            </View>
            <Text style={styles.heading}>Welcome to NeuroDiversify</Text>
            <View style={styles.buttonContainer}>
              <View style={{margin: 20, padding: 10, width: 300, height: 300}}>
                <Button style={{fontFamily: "OpenDyslexic"}} title="Login" onPress={() => navigation.navigate('Login')}></Button>
              </View>

              <View style={{margin: 20, padding: 10, width: 300, height: 300}}>
                <Button title="Tutorial?" onPress={() => navigation.navigate('Tutorial')}></Button>
              </View>

              <View style={{margin: 20, padding: 10, width: 450, height: 300}}>
                <Button 
                  title="Skip Login and Continue" 
                  onPress={() => {
                      navigation.navigate('Main'); 
                  }}
                />
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   heading: {
     fontSize: 70,
     textAlign: 'center',
     fontFamily: 'OpenDyslexic'
   },
  image: {
    height: 150,
    width: 150
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 50
  },
  container2: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 20,
    marginTop: 40
  },
  logoLine: {
    width: 800,
    height: 15,
    backgroundColor: 'black',
    textAlign: 'center'
  }
          
});