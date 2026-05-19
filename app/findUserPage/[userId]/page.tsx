

import { type UserData } from "@/components/data";
import { userData } from "@/components/data";

const UserInformation = async ({ params } : { params : Promise<{ userId: string}>}) => {

    const { userId } = await params;

    const userInformation:UserData[] = userData;

    const mainInfo:UserData[] = userInformation.filter((element) => {
        return userId === element.name;
    });

    console.log(userInformation);


    return (
        <div>
            <h3>Display information for user: {userId}</h3>
            <ul>
                {mainInfo.map((element) => (
                    <li key={element.id}>
                        <h2>id: {element.id}</h2>
                        <h2>username: {element.name}</h2>
                        <h2>password: {element.password}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserInformation;