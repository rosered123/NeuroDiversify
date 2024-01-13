import React, { useEffect, useContext } from 'react';
import { View, Text, Button, TextInput, Switch } from 'react-native';
import { styles } from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../UserContext';
import { PostsContext } from '../PostsContext';
import PostList from '../components/PostList';
import Tts from 'react-native-tts';

const Settings = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = React.useState(true);
  const [isEnabledDark, setIsEnabledDark] = React.useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);



    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Text style={styles.heading}>NeuroDiversify - Settings</Text>
                <Text style={styles.write}>Post</Text>
                <Icon.Button
                    name="pencil"
                    color="black"
                    size={40}
                    backgroundColor="#f2f2f2"
                    style={{ borderWidth: 2, marginLeft: 10 }}
                    onPress={() => navigation.navigate('Post')}
                />
            </View>

            <View>
              {/* <TextInput style={styles.searchBar} placeholder="Search" value={searchText} onChangeText={handleSearch} /> */}
            </View>

            <Text style={styles.subHeading}>All Setting Options</Text>

          <View style={styles.postContainer}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <Text style={{fontFamily: 'OpenDyslexic', fontSize: 35}}>Dyslexic Mode</Text>
              <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
            </View>
          </View>
          <View style={styles.postContainer}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <Text style={{fontFamily: 'OpenDyslexic', fontSize: 35}}>Dark Mode</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabledDark ? '#f5ddd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabledDark} />
              </View>
          </View>

          <View style={styles.postContainer}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <Text style={{fontFamily: 'OpenDyslexic', fontSize: 35}}>Increase Font Size</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabledDark ? '#f5ddd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabledDark} />
              </View>
          </View>
        </View>
    );
};

export default Settings;

