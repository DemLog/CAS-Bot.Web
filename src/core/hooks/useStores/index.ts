import {RootStore} from "@core/stores/rootStore";
import {useContext} from "react";
import {StoreContext} from "@core/stores/useStore";

export const useStores = (): RootStore => useContext(StoreContext);