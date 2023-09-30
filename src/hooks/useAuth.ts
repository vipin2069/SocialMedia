import { useState, useEffect } from 'react';
import { auth } from '../components/Auth/Auth';
import firebase from 'firebase/app'; // Import the User type from Firebase

const useAuth = () => {
  const [user, setUser] = useState<firebase.User | null>(null); // Explicitly specify the type

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return user;
};

export default useAuth;
