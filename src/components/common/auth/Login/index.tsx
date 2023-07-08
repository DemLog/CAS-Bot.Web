import React from "react";
import {LoginMain} from "@components/common/auth/Login/LoginMain";
import {FooterApp} from "components/common/other/FooterApp";
import {Container} from "@mantine/core";
import {LoginStyles} from "@components/common/auth/Login/styles";

export const Login: React.FC = () => {
    const {classes} = LoginStyles();

    return (
        <Container size="xl" className={classes.loginContent}>
            <LoginMain />
            <FooterApp />
        </Container>
    );
};