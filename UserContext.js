import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from './firebase';
import { doc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favIds, setFavIds] = useState([]);

  const fetchFavorites = (authUser) => {
    const userDocRef = doc(db, 'users', authUser.uid);

    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const favoritesSnap = docSnap.data().favorites || [];
        console.log("favoriteSnaps");
        console.log(favoritesSnap);
        setFavIds(favoritesSnap);
      } else {
        console.log('No such document!');
      }
    }, (error) => {
      console.error('Error fetching favorite posts:', error);
    });

    return unsubscribe; // return the unsubscribe function
  };

  useEffect(() => {
    let unsubscribeAuth = null;
    let unsubscribeFavorites = null;

    unsubscribeAuth = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        unsubscribeFavorites = fetchFavorites(authUser); // setup favorites listener
      } else {
        setUser(null);
        setFavIds([]);
        if (unsubscribeFavorites) {
          unsubscribeFavorites(); // remove favorites listener
        }
      }
    });

    return () => {
      if (unsubscribeAuth) unsubscribeAuth();
      if (unsubscribeFavorites) unsubscribeFavorites();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, favIds, setFavIds }}>
      {children}
    </UserContext.Provider>
  );
};
