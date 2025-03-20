import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, storage } from '../firebase/config';
import { ref, getDownloadURL } from "firebase/storage";
import { User, UserContextType } from '../types';
import { onAuthStateChanged } from 'firebase/auth'; // Add this import

const UserContext = createContext<UserContextType | undefined>(undefined);

const EXPIRATION_TIME = 60 * 60 * 1000;

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [authInitialized, setAuthInitialized] = useState(false); // Add this state

  const loadProfilePicture = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      if (user.providerData[0]?.providerId === 'google.com') {
        setProfileImage(user.photoURL);
      } else {
        const profileRef = ref(storage, `profile/${user.uid}/profile.png`);
        const url = await getDownloadURL(profileRef);
        setProfileImage(url);
      }
    } catch (error) {
      console.error('Error loading profile picture:', error);
    }
  };

  // Add a new useEffect for auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setAuthInitialized(true);
      if (firebaseUser) {
        loadProfilePicture();
      } else {
        setProfileImage(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Modify the localStorage useEffect to run after auth is initialized
  useEffect(() => {
    if (!authInitialized) return;

    const storedUser = localStorage.getItem('user');
    const expiration = localStorage.getItem('expiration');

    if (storedUser && expiration) {
      const currentTime = new Date().getTime();
      if (currentTime < parseInt(expiration, 10)) {
        setUser(JSON.parse(storedUser));
      } else {
        logout();
      }
    }
  }, [authInitialized]);

  const updateProfileImage = async () => {
    await loadProfilePicture();
  };

  const login = (userData: User) => {
    const expirationDate = new Date().getTime() + EXPIRATION_TIME;
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('expiration', expirationDate.toString());
  };

  const logout = () => {
    setUser(null);
    setProfileImage(null); // Also clear profile image
    localStorage.removeItem('user');
    localStorage.removeItem('expiration');
  };

  const isAuthenticated = !!user;

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated,
      profileImage,
      updateProfileImage 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};