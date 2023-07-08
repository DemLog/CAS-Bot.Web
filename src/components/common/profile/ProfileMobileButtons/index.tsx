import React, {Fragment} from "react";
import {Box, Button, Stack} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {ExitModal} from "@components/common/other/MyModals/ExitModal";
import {ProfileMobileButtonsStyles} from "@components/common/profile/ProfileMobileButtons/styles";

export const ProfileMobileButtons: React.FC = () => {
    const {classes} = ProfileMobileButtonsStyles();

    const [openedModal, {open, close}] = useDisclosure(false);

    const handleHelpButton = () => {
    };

    return (
        <Fragment>
            <ExitModal opened={openedModal} onClose={close} />
            <Box className={classes.mainContent} my={15}>
                <Button color="gray" onClick={handleHelpButton}>Помощь</Button>,
                <Button color="red" onClick={() => open()}>Выйти</Button>
            </Box>
        </Fragment>
    );
};