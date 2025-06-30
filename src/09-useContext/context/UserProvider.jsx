import {UserContext} from './UserContext';

export const UserProvider = ({ children }) => {
  
  const user ={
    id: '231',
    name: 'Daniel',
    email: 'danielœgmail.com',
  }


  return (
    <UserContext.Provider value = {{hola: "mundo", user}}>
        
    {children}
    
    </UserContext.Provider>
  )
}
  