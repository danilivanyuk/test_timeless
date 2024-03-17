import { IUser } from "./IUser";

export interface IGlobalState {
    users: IUser[]
    filteredUsers?: IUser[]
    groups?: {
        ageGroup: IAgeGroup,
        genderGroup: IGenderGroup,
    } 
}

export interface IAgeGroup {
    '11-to-20': number,
    '21-to-30': number,
    '31-to-40': number,
    '41-to-50': number,
    '51+': number,
}

export interface IGenderGroup {
    'male': number,
    'female': number,
}