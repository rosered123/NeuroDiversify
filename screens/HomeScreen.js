import React, { useEffect, useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../UserContext';
import { PostsContext } from '../PostsContext';
import PostList from '../components/PostList';
import Tts from 'react-native-tts';

const HomeScreen = ({ navigation }) => {
    const { user } = useContext(UserContext);
    const { posts, fetchPosts } = useContext(PostsContext);
    const [searchText, setSearchText] = React.useState('');

    const handleSearch = (text) => {
      setSearchText(text);
      // Perform search operations here based on the search text
      console.log('Performing search for:', text);
    };


    useEffect(() => {
        fetchPosts();
    }, [user, fetchPosts]);

  

    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Text style={styles.heading}>NeuroDiversify - Home</Text>
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
              <TextInput style={styles.searchBar} placeholder="Search" value={searchText} onChangeText={handleSearch} />
            </View>

            <Text style={styles.subHeading}>All Posts</Text>

            <PostList postsData={posts} navigation={navigation} />

        </View>
    );
};

export default HomeScreen;

