import {MainMenuStore} from "@core/stores/mainMenuStore";
import {BookmarksStore} from "@core/stores/bookmarksStore";

export class RootStore {
    mainMenuStore: MainMenuStore;
    bookmarksStore: BookmarksStore;

    constructor() {
        this.mainMenuStore = new MainMenuStore();
        this.bookmarksStore = new BookmarksStore();
    }
}