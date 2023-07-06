import {IHistory} from "@core/models/history/IHistory";
import {action, observable} from "mobx";

export interface IHistoryStore {
    history: IHistory[];
}

export const fakeDataHistory: IHistory[] = [
    {
        id: 1,
        title: "Чайник samsung T34",
        date: new Date(213324324),
        url: "https://vk.com/",
    },
    {
        id: 2,
        title: "Телевизор LG 42LM340S",
        date: new Date(313424325),
        url: "https://www.lg.com/",
    },
    {
        id: 3,
        title: "Наушники Sony WH-1000XM4",
        date: new Date(413524326),
        url: "https://www.sony.com/",
    },
    {
        id: 4,
        title: "Смартфон iPhone 12 Pro",
        date: new Date(513624327),
        url: "https://www.apple.com/",
    },
    {
        id: 5,
        title: "Ноутбук Lenovo ThinkPad X1 Carbon",
        date: new Date(613724328),
        url: "https://www.lenovo.com/",
    },
    {
        id: 6,
        title: "Планшет Samsung Galaxy Tab S7",
        date: new Date(713824329),
        url: "https://www.samsung.com/",
    },
    {
        id: 7,
        title: "Фотоаппарат Canon EOS R5",
        date: new Date(813924330),
        url: "https://www.canon.com/",
    },
    {
        id: 8,
        title: "Проектор Epson EH-TW9400",
        date: new Date(914024331),
        url: "https://www.epson.com/",
    },
    {
        id: 9,
        title: "Монитор Dell UltraSharp U3415W",
        date: new Date(1011124332),
        url: "https://www.dell.com/",
    },
    {
        id: 10,
        title: "Мышь Logitech MX Master 3",
        date: new Date(1112124333),
        url: "https://www.logitech.com/",
    },
];

export class HistoryStore implements IHistoryStore {
    @observable history: IHistory[];

    constructor() {
        this.history = fakeDataHistory;
    }

    @action getHistory = (): IHistory[] => (
        this.history
    );

    @action getHistoryFromId = (id: number): IHistory | undefined => (
        this.history.find(value => value.id === id)
    );

    @action addHistory = (history: IHistory): void => {
        this.history.push(history)
    };
}