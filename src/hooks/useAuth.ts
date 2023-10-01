import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app'; // Import the User type from Firebase
import app from '../firebase';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

const useAuth = () => {
  const [user, setUser] = useState<firebase.User | null>(null); // Explicitly specify the type

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser as firebase.User); // Cast authUser to firebase.User
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
