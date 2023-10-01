import React from 'react';
import App from './App'; // Assuming your main application component is named App
import { AuthProvider } from './components/Auth/Auth'; // Import your AuthProvider
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

root.render( <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
</React.StrictMode>);