// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import Favorites from './screens/Favorites';
import Tutorial from './screens/Tutorial';
import { UserProvider } from './UserContext';
import { PostsProvider } from './PostsContext';
import BottomNavigation from './components/BottomNavigation';  // import BottomNavigation

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Favorites" component={Favorites} options={{ headerShown: false }}/>
            <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <UserProvider>
            <PostsProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="Post" component={PostScreen} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Tutorial" component={Tutorial} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PostsProvider>
        </UserProvider>
    );
};

export default AppNavigator;
