import React, {Fragment} from "react";

import {Box, Title} from "@mantine/core";
import {TLoginButton, TLoginButtonSize, TUser} from "react-telegram-auth";
import {LoginMainFormStyles} from "@components/common/auth/Login/LoginMain/LoginMainForm/styles";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

import { useNavigate } from "react-router-dom";
import {TermsOfUseModal} from "@components/common/other/MyModals/TermsOfUseModal";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";
import apiService from "@core/services/apiService";
import {IProduct} from "@core/models/product/IProduct";
import {IUser} from "@core/models/user/IUser";

export const LoginMainForm: React.FC = observer(() => {
    const {classes} = LoginMainFormStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const [opened, {open, close}] = useDisclosure(false);

    const navigate = useNavigate();

    const { userStore } = useStores();

    const mt = matches ? -195 : 0;
    const ml = matches ? 10 : 0;
    const px = matches ? 0 : 20;
    const py = matches ? 0 : 50;

    const handleAcceptButton = async () => {
        const tUser = userStore.getTUserData();
        await apiService({method: "GET", url: `users/accept-terms?user_id=${tUser.id}`, body: {}});
        close();
        navigate("/analysis");
    };

    const handleAuthCallback = async (tUser: TUser) => {
        userStore.setTUserData(tUser);
        const user = await apiService({method: "GET", url: `users?user_id=${tUser.id}`, body: {}}) as IUser;
        if (user === null) {
            const newUser = await apiService({
                method: "POST", url: "users/register", body: {
                    id: tUser.id,
                    first_name: tUser.first_name,
                    last_name: tUser.last_name,
                    username: tUser.username
                }
            }) as IUser
            userStore.setUserData(newUser);
            if (!newUser.is_accept_terms) {
                open();
                return;
            }
            navigate("/analysis");
            return;
        }
        userStore.setUserData(user);
        if (!user.is_accept_terms) {
            open();
            return;
        } else {
            navigate("/analysis");
            return;
        }
    }

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
                    onAuthCallback={handleAuthCallback}
                    requestAccess="write"
                />
            </Box>
        </Fragment>
    );
});