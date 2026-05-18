'use client'

import { useState, type FormEvent } from "react";
import { type UserData } from "./data";

interface ForFindUserData{
    userData: UserData[];
}


const Login = ({userData}:ForFindUserData) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<string>('');
    const [isNotCorrect, setIsNotCorrect] = useState<string>('');

    
    function findUserAccount (e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        const found = userData.some(
            (element) => username === element.name && password === element.password
        );

        if(found){
            setIsCorrect("You success fully login");
            setIsNotCorrect('');
        } else {
            setIsNotCorrect("Wrong password!");
            setIsCorrect('');
        }

        setTimeout(() => {setIsCorrect('')}, 3000);
        setTimeout(() => {setIsNotCorrect('')}, 3000);
    }


    return (
        <div>
            <form onSubmit={findUserAccount}>
                <label>Enter username:</label>
                <input type="text" value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                <br />
                <br />
                <label>Enter password:</label>
                <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <br /><br />
                {isCorrect && <p style={{ color: "green" }}>{isCorrect}</p>}
                {isNotCorrect && <p style={{ color: "red" }}>{isNotCorrect}</p>}
                <button>submit</button>
            </form>
        </div>
    );
}

export default Login;