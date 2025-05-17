"use-client"
import { createContext } from "react";
export interface UserContextType {
    user: any 
    setUser: React.Dispatch<React.SetStateAction<any>>
  }
  const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
  })
  
  export default UserContext