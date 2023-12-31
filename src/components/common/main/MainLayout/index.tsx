import React, {Fragment, useEffect} from 'react';
import {HeaderApp} from "@components/common/other/HeaderApp";
import {MainLayoutStyles} from './style';
import {Box, Container, Title} from "@mantine/core";
import {MainMenuNavigation} from "@components/common/main/MainMenuNavigation";
import {FooterApp} from "@components/common/other/FooterApp";
import {Outlet, useLocation} from "react-router-dom";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";
import {useMediaQuery} from "@mantine/hooks";
import {BottomTabBar} from "@components/common/other/BottomTabBar";
import {ProfilePopover} from "@components/common/other/ProfilePopover";
import {dataPageList} from "@core/config/pageList";

export const MainLayout = observer(() => {
    const { classes } = MainLayoutStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const { mainMenuStore } = useStores();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.split("/")[1];
        const indexLink = mainMenuStore.getLinksMenu().findIndex((item) => item.url === currentPath);

        mainMenuStore.setActive(indexLink);
    }, [location.pathname, mainMenuStore]);

    const namePage = dataPageList.find(value => value.url === location.pathname.slice(1))?.label;

    return (
        <Fragment>
            <HeaderApp
                hideTextLogo={!matches}
                center={matches ? null : <Title order={2} fw={400} ta="center">{namePage}</Title>}
                right={matches ? <ProfilePopover /> : null}
            />
            <Box className={`${classes.mainWindow} ${matches ? '' : classes.mainWindowMobile}`}>
                <Container size="xl" className={`${classes.mainWindow} ${matches ? '' : classes.mainWindowMobile}`} mt={matches ? 50 : 20} mb={matches ? 0 : "80px"}>
                    <Box className={`${classes.mainContent} ${matches ? '' : classes.mainContentMobile}`}>
                        {matches && <MainMenuNavigation/>}
                        <Box className={`${classes.pageContent} ${matches ? '' : classes.pageContentMobile}`} ml={matches ? 30 : 0}>
                            {matches && <Box p={10}>
                                <Title order={3} fw={400}>{namePage}</Title>
                            </Box>}
                            <Box className={classes.outlet}>
                                <Outlet />
                            </Box>
                        </Box>
                    </Box>
                    {matches && <FooterApp/>}
                </Container>
                {!matches && <BottomTabBar />}
            </Box>
        </Fragment>
    );
});