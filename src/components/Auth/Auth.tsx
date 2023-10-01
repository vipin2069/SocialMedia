import {ReactNode,useState, useEffect, createContext, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../../firebase';

const auth = getAuth(app);

interface User {
  uid: string; // A unique identifier for the user
  email: string; // User's email address
  displayName?: string; // User's display name (optional)
  photoURL?: string; // URL to the user's profile photo (optional)
  // Add other user-related properties here as needed
}
// Create a context for managing user authentication
const AuthContext = createContext<any>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email:string, password:string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((User:any) => {
      if (User) {
        setCurrentUser(User);
        setLoading(false);
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });
  
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
