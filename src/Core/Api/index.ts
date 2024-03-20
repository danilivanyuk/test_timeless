import { IUser } from "../Interfaces/IUser";

export default async function fetchUsers(amountOfUsers: number): Promise<IUser[]> {
    const response = await fetch(`https://randomuser.me/api/?results=${amountOfUsers}`)
    .then(response => response.json())
    .then(json => (json.results))
    .catch(error => console.error(error));
    return response
}