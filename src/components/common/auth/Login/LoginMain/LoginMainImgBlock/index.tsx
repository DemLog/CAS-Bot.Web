import React from "react";
import {Box, Image, Title} from "@mantine/core";
import {LoginMainImgBlockStyles} from "@components/common/auth/Login/LoginMain/LoginMainImgBlock/styles";

import telegramBotBanner from "@assets/images/login/telegram-bot-banner.png";
import {useMediaQuery} from "@mantine/hooks";

export const LoginMainImgBlock: React.FC = () => {
    const { classes } = LoginMainImgBlockStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const mr = matches ? 10 : 0;
    const mt = matches ? 0 : 100;

    return (
        <Box className={`${classes.blockContent} ${matches ? classes.mainBlock : classes.blockContentMobile}`} mr={mr} mt={mt}>
            <Title order={2} ta="center">Добро пожаловать в CustomerAnalysisService!</Title>
            {matches && <Image src={telegramBotBanner} mt={30} />}
        </Box>
    );
};