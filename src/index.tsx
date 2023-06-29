import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import {MantineProvider} from "@mantine/core";

import App from './App';
import reportWebVitals from './reportWebVitals';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <MantineProvider withNormalizeCSS withGlobalStyles>
            <BrowserRouter>
                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <App/>
                </DevSupport>
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
);

reportWebVitals();
