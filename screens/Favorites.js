import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { UserContext } from '../UserContext';
import { PostsContext } from '../PostsContext'; // import PostsContext
import PostList from '../components/PostList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/styles';

const Favorites = ({ navigation }) => {
    const { user, favIds } = useContext(UserContext);
    const { posts } = useContext(PostsContext); // get posts from context

    const favoritePosts = posts.filter(post => favIds.includes(post.id)); // filter posts

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
          <View style={styles.topRow}>
                <Text style={styles.heading}>NeuroDiversify - Favorites</Text>
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

          <Text style={styles.subHeading}>Your Favorites</Text>
          
          <PostList postsData={favoritePosts} favIds={favIds} navigation={navigation} />
        </View>
    );
};


export default Favorites;
