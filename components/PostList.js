import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import PostItem from './PostItem';

const API_ENDPOINT = 'https://7e11f15c-d1b8-4c63-a2e9-429eac108ade-00-2udzpskg2c7ux.global.replit.dev/api';

const PostList = ({ postsData, navigation }) => {

  return (
    <FlatList
      data={postsData}
      renderItem={({ item }) => <PostItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default PostList;
