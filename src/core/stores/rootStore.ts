import {MainMenuStore} from "@core/stores/mainMenuStore";
import {BookmarksStore} from "@core/stores/bookmarksStore";
import {HistoryStore} from "@core/stores/historyStore";
import {UserStore} from "@core/stores/userStore";

export class RootStore {
    mainMenuStore: MainMenuStore;
    bookmarksStore: BookmarksStore;
    historyStore: HistoryStore;
    userStore: UserStore;

    constructor() {
        this.mainMenuStore = new MainMenuStore();
        this.bookmarksStore = new BookmarksStore();
        this.historyStore = new HistoryStore();
        this.userStore = new UserStore();
    }
}