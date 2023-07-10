import React, {Fragment} from "react";
import {Avatar, Box, Divider, Tabs} from "@mantine/core";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {BottomTabBarStyles} from "@components/common/other/BottomTabBar/styles";
import {useNavigate} from "react-router-dom";

export const BottomTabBar: React.FC = observer(() => {
    const { classes } = BottomTabBarStyles();

    const { mainMenuStore, userStore } = useStores();
    const navigate = useNavigate();

    const admins = userStore.getUserData().role == "manager" || userStore.getUserData().role == "admin"

    const displayTabs = () => {
        const defaultTabs = mainMenuStore.getLinksMenu().slice(0, admins ? 4 : 3).map((item, index) => (
            <Fragment key={index}>
                <Tabs.Tab
                    className={classes.tab}
                    value={String(index)}
                    icon={item.icon ? <FontAwesomeIcon icon={item.icon} size="2xl" /> : null}
                />
                <Divider size="sm" color="#0000003b" orientation="vertical" />
            </Fragment>
        ));

        const profileTab = (
            <Tabs.Tab
                className={classes.tab}
                value="4"
                icon={<Avatar color="dark" radius="xl" size="28px">DL</Avatar>}
            />
        );

        defaultTabs.push(profileTab);
        return defaultTabs;
    };

    return (
        <Box className={classes.mainTabBar} px={10} py={4}>
            <Tabs
                className={classes.tabList}
                value={String(mainMenuStore.getActive())}
                onTabChange={(value) =>
                    mainMenuStore.handleClickLink(Number(value), () =>
                        navigate(`/${mainMenuStore.getLinkFromIndex(Number(value))?.url}`)
                    )
                }
            >
                {displayTabs()}
            </Tabs>
        </Box>
    );
});