import { useState } from 'react';
import {UserContext} from './UserContext';

export const UserProvider = ({ children }) => {
  
  // const user ={
  //   id: '231',
  //   name: 'Daniel',
  //   email: 'danielœgmail.com',
  // }

  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value = {{user}}>
    <UserContext.Provider value = {{user, setUser}}>
    {children}
    
    </UserContext.Provider>
  )
}
  