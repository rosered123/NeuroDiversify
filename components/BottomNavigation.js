import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomNavigation = ({ navigation }) => {
  return (
    <View style={styles.bottomRowContainer}>
      <View style={styles.bottomRow}>
        {/* home button */}
        <Icon.Button
          color="black"
          backgroundColor="67DE8F"
          name="home"
          size={40}
          onPress={() => navigation.navigate('Main', { screen: 'Home' })}
        />
  
        {/* bookmark button */}
        <Icon.Button
          color="black"
          backgroundColor="67DE8F"
          name="heart"
          size={40}
          onPress={() => navigation.navigate('Main', { screen: 'Favorites' })}
        />
  
        {/* history icon */}
        <Icon.Button
          color="black"
          backgroundColor="67DE8F"
          name="gear"
          size={40}
          onPress={() => navigation.navigate('Main', { screen: 'Settings' })}
        />
  
        {/* aboutus icon */}
        <Icon.Button
          color="black"
          backgroundColor="67DE8F"
          name="user"
          size={40}
          onPress={() => navigation.navigate('Main', { screen: 'Profile' })}
        />
      </View>
    </View>
  );
};

export default BottomNavigation;
