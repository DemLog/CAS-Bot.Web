import {TUser} from "react-telegram-auth";
import {IUser} from "@core/models/user/IUser";
import {action, observable} from "mobx";

export interface IUserStore {
    user: IUser | null;
    telegramUser: TUser | null;
}

export class UserStore implements IUserStore {
    @observable user: IUser | null;
    @observable telegramUser: TUser | null;

    constructor() {
        this.user = null;
        this.telegramUser = null;
    }

    @action setUserData = (user: IUser) => {
        this.user = user
    }

    @action setTUserData = (tUser: TUser) => {
        this.telegramUser = tUser;
    }

    @action getUserData = (): IUser => {
        return <IUser>this.user;
    }

    @action getTUserData = (): TUser => {
        return <TUser>this.telegramUser;
    }
}