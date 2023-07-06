import {MainMenuStore} from "@core/stores/mainMenuStore";
import {BookmarksStore} from "@core/stores/bookmarksStore";
import {HistoryStore} from "@core/stores/historyStore";

export class RootStore {
    mainMenuStore: MainMenuStore;
    bookmarksStore: BookmarksStore;
    historyStore: HistoryStore;

    constructor() {
        this.mainMenuStore = new MainMenuStore();
        this.bookmarksStore = new BookmarksStore();
        this.historyStore = new HistoryStore();
    }
}