// UserProfile.tsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../Auth/Auth'; // Import the authentication context
import { getUser, updateUser } from '../../hooks/userService'; // Update the import statement

const UserProfile: React.FC = () => {
  const { currentUser } = useAuth();
  const [displayName, setDisplayName] = useState<string>('');
  const [photoURL, setPhotoURL] = useState<string>(''); // Provide a default value here
  const [bio, setBio] = useState<string>('');

  useEffect(() => {
    if (currentUser) {
      // Initialize profile fields with user data
      setDisplayName(currentUser.displayName || '');
      setPhotoURL(currentUser.photoURL || '');

      // Fetch and set user-specific data like bio from your database
      getUser(currentUser.uid).then((userData) => {
        if (userData) {
          setBio(userData.bio || '');
        }
      });
    }
  }, [currentUser]);

  const handleSaveProfile = async () => {
    try {
      if (currentUser) {
        // Update user profile data in Firebase Authentication
        await currentUser.updateProfile({
          displayName,
          photoURL,
        });
        // Update user-specific data like bio in your database
        await updateUser(currentUser.uid, { bio }); // Use updateUser from userService
      }
      // Display a success message or redirect to the user's profile page
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <label>
        Display Name:
        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
      </label>
      <label>
        Profile Picture URL:
        <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
      </label>
      <label>
        Bio:
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </label>
      <button onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
};

export default UserProfile;
