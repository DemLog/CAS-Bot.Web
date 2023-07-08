import React, {Fragment} from "react";
import {Avatar, Box, Button, Container, Group, Text, Title} from "@mantine/core";
import {ProfileUserInfoBlockStyles} from "@components/common/profile/UserInfoBlock/styles";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {ExitModal} from "@components/common/other/MyModals/ExitModal";

export const ProfileUserInfoBlock: React.FC = () => {
    const {classes} = ProfileUserInfoBlockStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const [openedModal, {open, close}] = useDisclosure(false);

    const handleEditButton = () => {
    };

    const displayButtons = () => {
        return [
            <Button color="gray" onClick={handleEditButton}>Редактировать</Button>,
            <Button color="red" onClick={() => open()}>Выйти</Button>
        ];
    };

    return (
        <Fragment>
            <ExitModal opened={openedModal} onClose={close} />
            {!matches && <Text fs="italic" mt={20}>Основная информация</Text>}
            <Box className={`${classes.commonContent} ${matches ? '' : classes.commonContentMobile}`} px={matches ? 40 : 15} py={matches ? 30 : 15}>
                <Box className={classes.userInfoContent}>
                    <Avatar color="dark" size={matches ? "150px" : "xl"} radius="90px">DL</Avatar>
                    <Box px={matches ? 30 : 15}>
                        <Title order={matches ? 1 : 2} fw={400}>Dmitry Loginov</Title>
                        <Text c="#414448" fs="italic" fz={matches ? "lg" : "md"}>@demlovesky</Text>
                    </Box>
                </Box>
                {matches ? <Box className={classes.manageContent} pt={30}>
                    <Title order={2} fw={400}>Роль: <Text span inherit fw={100}>Пользователь</Text></Title>
                    <Group>
                        {displayButtons()}
                    </Group>
                </Box> : <Group position="right"><Button color="gray" variant="outline" size="xs" onClick={handleEditButton}>Редактировать</Button></Group>}
            </Box>
        </Fragment>
    );
};