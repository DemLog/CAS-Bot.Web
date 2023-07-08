import React from "react";
import {Box, Button, Stack, Text} from "@mantine/core";
import {UserInfoDetailControlStyles} from "@components/common/admin/UserInfoDetail/UserInfoDetailControl/styles";
import {useMediaQuery} from "@mantine/hooks";

export const UserInfoDetailControl: React.FC = () => {
    const {classes} = UserInfoDetailControlStyles();
    const matches = useMediaQuery('(min-width: 780px)');

    return (
        <Box ml={matches ? "sm" : ''} m={matches ? '' : "md"} className={matches ? classes.mainContent : classes.mainContentMobile} p="sm" px={matches ? '' : "lg"}>
            <Stack spacing="xs">
                <Button variant="default" disabled className={classes.buttonTokens}><Text fw={400}>Баланс: 12345 Токенов</Text></Button>
                <Button color="indigo"><Text inline fw={400}>Изменить количество <Text inline ta="center">токенов</Text></Text></Button>
                <Button color="indigo"><Text fw={400}>Посмотреть активность</Text></Button>
                <Button color="indigo"><Text fw={400}>Забанить</Text></Button>
                <Button color="indigo"><Text fw={400}>Изменить роль</Text></Button>
            </Stack>
        </Box>
    );
};