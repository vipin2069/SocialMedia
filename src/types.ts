
export interface User {
    id: string;
    username: string;
    email: string;
    // Other user fields
  }
  
  export interface Post {
    id: string;
    text: string;
    author: User;
    // Other post fields
  }
  