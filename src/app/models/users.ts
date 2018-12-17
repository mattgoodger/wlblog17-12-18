import {IUser} from '../interfaces';

export class Users implements IUser {

    userId: String;
    password: String;
    firstName: String;
    lastName: String;
    mobile: number;
    email: String;
    userType: String;



    constructor(userId: String, password: String, firstName: String, lastName: String, mobile: number, email: String, userType: String) {
        this.userId = userId;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.email = email;
        this.userType = userType;
    }
}
