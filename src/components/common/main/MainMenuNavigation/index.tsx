import React from 'react';
import {NavigationStyles} from './style';
import {Navbar, NavLink, Text, Title} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

export const MainMenuNavigation = observer(() => {
    const {classes} = NavigationStyles();

    const navigate = useNavigate();
    const {mainMenuStore} = useStores();

    return (
        <Navbar p="xs" className={classes.menu}>
            <Navbar.Section mb={10}>
                <Title order={4} fw={400} fs="italic">Меню сервиса</Title>
            </Navbar.Section>
            <Navbar.Section>
                {mainMenuStore.getLinksMenu().slice(0, 3).map((item, index) => (
                    <NavLink
                        key={item.label}
                        active={index === mainMenuStore.getActive()}
                        label={<Text fz="md" fw={index === mainMenuStore.getActive() ? 700 : 0}>{item.label}</Text>}
                        variant="filled"
                        onClick={() => mainMenuStore.handleClickLink(index, () => navigate(`/${item.url}`))}
                    />

                ))}
            </Navbar.Section>
        </Navbar>
    )
})