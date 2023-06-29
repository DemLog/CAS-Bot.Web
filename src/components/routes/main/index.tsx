import React from "react";

import {Route, Routes} from "react-router-dom";

export const RoutesMain: React.FC = () => {
    return (
        <Routes>
            <Route path="/" />
            <Route path="login" />
        </Routes>
    );
};