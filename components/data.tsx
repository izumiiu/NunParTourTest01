'use client'
import { useEffect } from "react";

export interface UserData{
    id: number
    name: string;
    password: string;
}

interface ForSetUserData{
    getUserData: (data:UserData[]) => void;
}


const Data = ({getUserData}:ForSetUserData) => {

    useEffect(() => {
        const initialData: UserData[] = [
            {id: 1, name: "tj", password: "tjtjpass"},
            {id: 2, name: "gim", password: "gimgimpass"},
            {id: 3, name: "boss", password: "bosspass"},
            {id: 4, name: "krim", password: "krimpass"},
            {id: 5, name: "poom", password: "poompass"}
        ];
        getUserData(initialData);
    }, []);

    return null;
}

export default Data;