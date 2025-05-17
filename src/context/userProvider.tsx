"use client"

import { ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CurrentUser } from "../services/userService";
import UserContext from "./userContext";

interface UserProviderProps {
    children: ReactNode;
  }

const UserProvider = ({ children }:UserProviderProps) => {
    const [user, setUser] = useState(undefined)

     useEffect( ()=>{
        async function load() {
            try {
                const currentUser = await CurrentUser()
                // console.log("currentUser",currentUser)
                setUser(currentUser.verifiedPayload)
            } catch (error) {
                console.log(error)
                toast.error("error in loading current user");
                setUser(undefined)
            }
            
        }
        load();

     }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
