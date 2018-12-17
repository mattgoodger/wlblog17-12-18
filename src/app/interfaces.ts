import { UserType } from './user-type.enum';

export interface IBlog {
    id: string;
    idUser: string;
    state: string;
    title: string;
    content: string;
    category: string;
}

export interface IUser {
    userId: String;
    password: String;
    firstName: String;
    lastName: String;
    mobile: number;
    email: String;
    userType: String;

  }
