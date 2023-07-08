import React from 'react';
import ReactDOM from 'react-dom/client';

import {MantineProvider} from "@mantine/core";

import App from './App';

import reportWebVitals from './reportWebVitals';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

import {CommonStyles} from "./styles";
import {RootStore} from "@core/stores/rootStore";
import {StoreProvider} from "@core/stores/useStore";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const globalStore = new RootStore();

root.render(
    <React.StrictMode>
        <MantineProvider withNormalizeCSS withGlobalStyles theme={CommonStyles}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <StoreProvider store={globalStore}>
                    <App/>
                </StoreProvider>
            </DevSupport>
        </MantineProvider>
    </React.StrictMode>
);

reportWebVitals();
