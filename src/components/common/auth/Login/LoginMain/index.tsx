import React, {Fragment} from "react";
import {Box, Container} from "@mantine/core";
import {LoginMainForm} from "@components/common/auth/Login/LoginMain/LoginMainForm";
import {LoginMainImgBlock} from "@components/common/auth/Login/LoginMain/LoginMainImgBlock";
import {LoginMainStyles} from "@components/common/auth/Login/LoginMain/styles";
import {useMediaQuery} from "@mantine/hooks";

export const LoginMain: React.FC = () => {
    const {classes} = LoginMainStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const displayMainContent = () => (
        <Fragment>
            <LoginMainImgBlock/>
            <LoginMainForm/>
        </Fragment>
    );

    return matches ? (<Box className={classes.containerMain}>{displayMainContent()}</Box>)
        : (<Container size="xs" className={`${classes.containerMain} ${matches ? '' : classes.containerMainMobile}`}>{displayMainContent()}</Container>);
};