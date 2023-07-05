import React, {Fragment} from "react";
import {Box, Divider, NavLink, Text} from "@mantine/core";
import {ProfilePopoverDropdownStyles} from "@components/common/other/ProfilePopover/ProfilePopoverDropdown/styles";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";
import {useNavigate} from "react-router-dom";
import {ProfilePopoverDropdownProps} from "@components/common/other/ProfilePopover/ProfilePopoverDropdown/props";

export const ProfilePopoverDropdown: React.FC<ProfilePopoverDropdownProps> = observer((props: ProfilePopoverDropdownProps) => {
    const {classes} = ProfilePopoverDropdownStyles();

    const {mainMenuStore} = useStores();
    const navigate = useNavigate();

    return (
        <Box className={classes.mainContent} onClick={() => props.onClose()}>
            <NavLink className={`${classes.navLinkButton} ${classes.navLinkButtonDefault}`} py={5}
                     label={<Text fz="lg" fw={500} ta="center">Личный кабинет</Text>}
                     onClick={() => mainMenuStore.handleClickLink(5, () => navigate(`/${mainMenuStore.getLinkFromIndex(5)?.url}`))}
            />
            <Divider/>
            <NavLink className={`${classes.navLinkButton} ${classes.navLinkButtonDisable}`} py={5}
                     label={
                         <Text fz="lg" fw={500} ta="center">Баланс:
                             <Text className={classes.balanceText} fw={700} span color="white" inherit>123456
                                 Токенов</Text>
                         </Text>
                     }
                     disabled
            />
            <Divider/>
            <NavLink className={`${classes.navLinkButton} ${classes.navLinkButtonDefault}`} py={5}
                     label={<Text fz="lg" fw={500} ta="center">Помощь</Text>}
            />
            <Divider/>
            <NavLink className={`${classes.navLinkButton} ${classes.navLinkButtonExit}`} py={5}
                     label={<Text fz="lg" fw={500} ta="center">Выйти</Text>}
                     onClick={() => props.onOpenModal()}
            />
        </Box>
    );
});