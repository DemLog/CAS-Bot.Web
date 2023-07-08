import { observable, action } from 'mobx';

import {faClockRotateLeft, faMagnifyingGlassChart, faPeopleRoof} from "@fortawesome/free-solid-svg-icons";

import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";

export interface IMenuLink {
    label: string;
    url: string;
    icon?: IconProp;
}

export const dataMenuLinks: IMenuLink[] = [
    {
        label: 'Провести анализ',
        url: 'analysis',
        icon: faMagnifyingGlassChart
    },
    {
        label: 'Избранное',
        url: 'bookmarks',
        icon: faBookmark
    },
    {
        label: 'История',
        url: 'history',
        icon: faClockRotateLeft
    },
    {
        label: 'Администрирование',
        url: 'admin',
        icon: faPeopleRoof
    },
    {
        label: 'Личный кабинет',
        url: 'profile'
    }
];

export interface IMainMenuStore {
    links: IMenuLink[];
    active: number;
}

export class MainMenuStore implements IMainMenuStore {

    @observable links: IMenuLink[];
    @observable active: number;

    constructor() {
        this.active = 0;
        this.links = dataMenuLinks;
    }

    @action getActive = (): number => (
        this.active
    );

    @action getLinksMenu = (): IMenuLink[] => (
        this.links
    );

    @action setActive = (index: number) => {
        this.active = index;
    };

    @action getLinkFromIndex = (index: number) => (
        this.links.find((value, idx) => idx === index)
    );

    @action handleClickLink = (index: number, handleNavigation: () => void): void => {
        this.active = index;
        handleNavigation();
    };
}