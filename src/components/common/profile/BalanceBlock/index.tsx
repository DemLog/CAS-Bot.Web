import React, {Fragment} from "react";
import {Box, Button, Text} from "@mantine/core";
import {ProfileBalanceBlockStyles} from "@components/common/profile/BalanceBlock/styles";
import {useMediaQuery} from "@mantine/hooks";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

export const ProfileBalanceBlock: React.FC = observer(() => {
    const {classes} = ProfileBalanceBlockStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const {userStore} = useStores();

    return (
        <Fragment>
            {!matches && <Text fs="italic" mt={20}>Баланс токенов</Text>}
            <Box className={classes.commonContent} mt={matches ? 15 : 0} px={matches ? 40 : 15} py={10}>
                <Box className={classes.balanceContent}>
                    {matches && <Text fz="lg" fw={500}>Баланс токенов</Text>}
                    <Text className={classes.balanceTextTokens} fz={matches ? "30px" : "xl"} c="white" fw={700}><Text span inherit
                                                                                                   fs="italic">{userStore.user?.tokens}</Text> Токенов</Text>
                </Box>
                <Button color="gray" size={matches ? "sm" : "xs"}>Пополнить</Button>
            </Box>
        </Fragment>
    );
});