import React, {Fragment} from "react";

import {Box, Title} from "@mantine/core";
import {TLoginButton, TLoginButtonSize} from "react-telegram-auth";
import {LoginMainFormStyles} from "@components/common/auth/Login/LoginMain/LoginMainForm/styles";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

import { useNavigate } from "react-router-dom";
import {TermsOfUseModal} from "@components/common/other/MyModals/TermsOfUseModal";

export const LoginMainForm: React.FC = () => {
    const {classes} = LoginMainFormStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const [opened, {open, close}] = useDisclosure(false);

    const navigate = useNavigate();

    const mt = matches ? -195 : 0;
    const ml = matches ? 10 : 0;
    const px = matches ? 0 : 20;
    const py = matches ? 0 : 50;

    const handleAcceptButton = () => {
        close();
        navigate("/analysis");
    };

    return (
        <Fragment>
            <TermsOfUseModal onAccept={handleAcceptButton} opened={opened} onClose={close} />
            <Box className={`${classes.formContent} ${matches ? classes.mainBlock : classes.formContentMobile}`} mt={mt}
                 ml={ml} px={px} py={py}>
                <Title order={2} fw={400} mb={matches ? 30 : 18} ta="center">
                    Войдите в систему через Telegram
                </Title>
                <TLoginButton
                    botName="cuanse_bot"
                    buttonSize={TLoginButtonSize.Large}
                    lang="ru"
                    usePic={true}
                    cornerRadius={20}
                    onAuthCallback={() => open()}
                    requestAccess="write"
                />
            </Box>
        </Fragment>
    );
};