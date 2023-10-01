import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";

// Get a reference to your Firestore database
const db = getFirestore();

// Function to update user data in Firestore
export const updateUser = async (uid: string, data: any) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, data);
    console.log('User data updated successfully');
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};

// Function to fetch user data from Firestore
export const getUser = async (uid: string) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log('User data:', userData);
      return userData;
    } else {
      console.log('User data not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
