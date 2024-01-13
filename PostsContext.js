import React, { createContext, useState, useEffect, useCallback } from 'react';

export const PostsContext = createContext(null);

const API_ENDPOINT = 'https://7e11f15c-d1b8-4c63-a2e9-429eac108ade-00-2udzpskg2c7ux.global.replit.dev/api';

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    console.log("Fetching posts");
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const jsonData = await response.json();
        setPosts(jsonData);
        console.log("Posts fetched");
        console.log(jsonData);
      } else {
        console.error('Error getting posts. Please try again.');
      }
    } catch (error) {
      console.error('Error getting posts. Please try again.');
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostsContext.Provider value={{ posts, setPosts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
