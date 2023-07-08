import React, {Fragment, useState} from "react";
import {Avatar, Group, Popover, Text} from "@mantine/core";
import {ProfilePopoverStyles} from "@components/common/other/ProfilePopover/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {ProfilePopoverDropdown} from "@components/common/other/ProfilePopover/ProfilePopoverDropdown";
import {useDisclosure} from "@mantine/hooks";
import {ExitModal} from "@components/common/other/MyModals/ExitModal";

export const ProfilePopover: React.FC = () => {
    const {classes} = ProfilePopoverStyles();

    const [popoverOpened, setPopoverOpened] = useState(false);

    const [openedModal, {open, close}] = useDisclosure(false);

    const handleClickDropdown = () => {
        setPopoverOpened((prevState) => !prevState);
    };

    return (
        <Fragment>
            <ExitModal opened={openedModal} onClose={close} />
            <Popover position="bottom-start" offset={5} opened={popoverOpened}
                     onChange={(opened) => setPopoverOpened(opened)}>
                <Popover.Target>
                    <Group spacing="xs" className={classes.buttonPopover} p="8px" onClick={() => handleClickDropdown()}>
                        <Avatar size="26px" radius="90px">DL</Avatar>
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