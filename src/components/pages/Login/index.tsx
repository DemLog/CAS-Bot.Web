import React, {Fragment} from "react";
import {HeaderApp} from "@components/common/other/HeaderApp";
import {Login} from "@components/common/auth/Login";

export const LoginPage: React.FC = () => {
    return (
        <Fragment>
            <HeaderApp/>
            <Login />
        </Fragment>
    );
};