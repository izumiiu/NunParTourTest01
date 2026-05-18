'use client'

import Data from "./data";
import Login from "./login";
import { useState } from "react";
import { type UserData } from "./data";

const AuthSection = () => {

    const [userData, setUserData] = useState<UserData[]>([]);

    function getUserData(data:UserData[]){
        setUserData(data);
    }

        return(
            <div>
            <Login userData={userData}/>
            <Data getUserData={getUserData}/>
            </div>
            
        );

}

export default AuthSection;