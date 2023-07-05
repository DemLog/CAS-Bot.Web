import IBookmark from "@core/models/bookmarks/IBookmark";
import {action, observable} from "mobx";

export interface IBookmarksStore {
    bookmarks: IBookmark[];
}

export const fakeBookmarksData: IBookmark[] = [
    {
        id: 1,
        title: 'Чайник электрический DOMFY DSB-EK304',
        url: 'https://otzovik.com/reviews/chaynik_elektricheskiy_domfy_dsb-ek304',
        photoUrl: 'https://i.otzovik.com/objects/b/2280000/2270794.png',
        dateCreated: new Date(628021800000),
    },
    {
        id: 2,
        title: 'Смартфон Samsung Galaxy S21',
        url: 'https://www.samsung.com/ru/smartphones/galaxy-s21-ultra-5g/',
        photoUrl: 'https://fastly.picsum.photos/id/889/250/250.jpg?hmac=wymgml06-ad58jXUAYyBB5M8aqTrfKhpAx2p18UnP0w',
        dateCreated: new Date(1645122000000),
    },
    {
        id: 3,
        title: 'Фитнес-браслет Xiaomi Mi Band 6',
        url: 'https://www.mi.com/global/mi-smart-band-6/',
        photoUrl: 'https://fastly.picsum.photos/id/672/250/250.jpg?hmac=czQcL5XwFFqC7k8Ev_PuuPdsJiJWjXcNXwgIee_b3BU',
        dateCreated: new Date(1668498000000),
    },
    {
        id: 4,
        title: 'Наушники Sony WH-1000XM4',
        url: 'https://www.sony.ru/electronics/sluchatki/wh-1000xm4',
        photoUrl: 'https://fastly.picsum.photos/id/941/250/250.jpg?hmac=S85FND_ifPkyu8OKucyqyq2gjpAmRuO1qEVmPwbx2Lw',
        dateCreated: new Date(1659325200000),
    },
    {
        id: 5,
        title: 'Игровая консоль PlayStation 5',
        url: 'https://www.playstation.com/ru-ru/ps5/',
        photoUrl: 'https://fastly.picsum.photos/id/0/250/250.jpg?hmac=rfeMe1v6eyg4W18zXyY2foxKiELzaDD45DKX-7ud0sk',
        dateCreated: new Date(1672846800000),
    },
    {
        id: 5,
        title: 'Игровая консоль PlayStation 5',
        url: 'https://www.playstation.com/ru-ru/ps5/',
        photoUrl: 'https://fastly.picsum.photos/id/0/250/250.jpg?hmac=rfeMe1v6eyg4W18zXyY2foxKiELzaDD45DKX-7ud0sk',
        dateCreated: new Date(1672846800000),
    },
    {
        id: 5,
        title: 'Игровая консоль PlayStation 5',
        url: 'https://www.playstation.com/ru-ru/ps5/',
        photoUrl: 'https://fastly.picsum.photos/id/0/250/250.jpg?hmac=rfeMe1v6eyg4W18zXyY2foxKiELzaDD45DKX-7ud0sk',
        dateCreated: new Date(1672846800000),
    },
    {
        id: 5,
        title: 'Игровая консоль PlayStation 5',
        url: 'https://www.playstation.com/ru-ru/ps5/',
        photoUrl: 'https://fastly.picsum.photos/id/0/250/250.jpg?hmac=rfeMe1v6eyg4W18zXyY2foxKiELzaDD45DKX-7ud0sk',
        dateCreated: new Date(1672846800000),
    },
    {
        id: 5,
        title: 'Игровая консоль PlayStation 5',
        url: 'https://www.playstation.com/ru-ru/ps5/',
        photoUrl: 'https://fastly.picsum.photos/id/0/250/250.jpg?hmac=rfeMe1v6eyg4W18zXyY2foxKiELzaDD45DKX-7ud0sk',
        dateCreated: new Date(1672846800000),
    }
];

export class BookmarksStore implements IBookmarksStore {

    @observable bookmarks: IBookmark[];

    constructor() {
        this.bookmarks = fakeBookmarksData;
    }

    @action getBookmarks = (): IBookmark[] => (
        this.bookmarks
    );

    @action getBookmarkFromId = (id: number): IBookmark | undefined => (
        this.bookmarks.find(value => value.id === id)
    );

    @action addBookmark = (bookmarks: IBookmark): void => {
        this.bookmarks.push(bookmarks)
    };
}