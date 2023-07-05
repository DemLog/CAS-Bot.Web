import React, {Fragment, useState} from "react";
import {Avatar, Box, Button, Group, Popover, Text} from "@mantine/core";
import {ProfilePopoverStyles} from "@components/common/other/ProfilePopover/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {ProfilePopoverDropdown} from "@components/common/other/ProfilePopover/ProfilePopoverDropdown";
import {CustomModal} from "@components/common/other/CustomModal";
import {useNavigate} from "react-router-dom";
import {useDisclosure} from "@mantine/hooks";

export const ProfilePopover: React.FC = () => {
    const {classes} = ProfilePopoverStyles();

    const [popoverOpened, setPopoverOpened] = useState(false);

    const [openedModal, {open, close}] = useDisclosure(false);
    const navigate = useNavigate();

    const handleClickDropdown = () => {
        setPopoverOpened((prevState) => !prevState);
    };

    const handleAcceptButton = () => {
        close();
        navigate("/login");
    };

    const handleCancelButton = () => {
        close();
    };

    const displayModalButtons = () => {
        return [
            <Button color="gray" onClick={handleCancelButton}>Отмена</Button>,
            <Button color="red" onClick={handleAcceptButton}>Ок</Button>
        ];
    };

    const displayModalExitSystem = () => (
        <CustomModal
            buttons={displayModalButtons()}
            modal={{
                withCloseButton: false,
                opened: openedModal,
                onClose: close,
                shadow: 'xl'
            }}
        >
            <Box>
                <Text>Вы действительно хотите выйти из системы?</Text>
            </Box>
        </CustomModal>
    );

    return (
        <Fragment>
            {displayModalExitSystem()}
            <Popover position="bottom-start" offset={5} opened={popoverOpened}
                     onChange={(opened) => setPopoverOpened(opened)}>
                <Popover.Target>
                    <Group spacing="xs" className={classes.buttonPopover} p="8px" onClick={() => handleClickDropdown()}>
                        <Avatar size="26px">DL</Avatar>
                        <Text fw={600}>Dmitry Loginov</Text>
                        {popoverOpened ? <FontAwesomeIcon icon={faChevronUp}/> :
                            <FontAwesomeIcon icon={faChevronDown}/>}
                    </Group>
                </Popover.Target>
                <Popover.Dropdown className={classes.dropdownPopover} p={5}>
                    <ProfilePopoverDropdown onClose={handleClickDropdown} onOpenModal={open}/>
                </Popover.Dropdown>
            </Popover>
        </Fragment>
    );
};