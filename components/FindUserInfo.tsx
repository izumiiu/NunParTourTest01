'use client';

import { FormEvent, useState } from "react";
import { userData } from "./data";
import { type UserData } from "./data";
import Link from "next/link";


const FindUserInfo = () => {

    const [username, setUsername] = useState<string>('');
    const [isFound, setIfFound] = useState<string>('');
    const [isNotFound, setIsNotFound] = useState<string>('');

    function goToPageById(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        const mainUserData:UserData[] = userData;

        const found = mainUserData.some((element) => {
            return username === element.name;
        });

        if(found){
            setIfFound("user found!");
            setIsNotFound('');
        }
        else{
            setIsNotFound("user not found!");
            setIfFound('');
        }


    }

    return (
        <div>
            <form onSubmit={goToPageById}>
                <label>Enter username:</label>
                <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                <br />
                <button>Enter</button>
            </form>
            <div>
                {isFound &&  <>
                                 <p style={{color: "green"}}>{isFound}</p> 
                                 <br />
                                 <Link href={`/findUserPage/${username}`}>Click here to see user information</Link>
                             </> }
                {isNotFound && <p style={{color: "red"}}>{isNotFound}</p>}
            </div>
            

        </div>
    );
}

export default FindUserInfo;