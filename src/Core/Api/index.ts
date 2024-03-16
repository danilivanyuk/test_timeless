import { IUser } from "../Interfaces/IUser";

// TODO: Добавить что возвращается
export default function fetchUsers(amountOfUsers: number) {
    fetch(`https://randomuser.me/api/?results=${amountOfUsers}`)
    .then(response => response.json())
    .then(json => (json))
    .catch(error => console.error(error));
}
