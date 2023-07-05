import {MainMenuStore} from "@core/stores/mainMenuStore";

export class RootStore {
    mainMenuStore: MainMenuStore;

    constructor() {
        this.mainMenuStore = new MainMenuStore();
    }
}