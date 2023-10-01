import { useState } from 'react';
import { useAuth } from '../components/Auth/Auth';

const SignUp = () => {
  const { signUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = async () => {
      try {
        await signUp(email, password);
      } catch (error) {
        console.error('Error signing up:', error);
      }
    };
  
    return (
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    );
}

export default SignUp