'use client'

import { userData } from "./data";
import Login from "./login";
import { useState } from "react";
import { type UserData } from "./data";

const AuthSection = () => {


        return(
            <div>
            <Login userData={userData}/>
            </div>
            
        );

}

export default AuthSection;