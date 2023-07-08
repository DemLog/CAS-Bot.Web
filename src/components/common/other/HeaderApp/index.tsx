import React from "react";

import {Box, Container, Group, Header, Image, Title} from "@mantine/core";

import {HeaderAppStyles} from "@components/common/other/HeaderApp/styles";
import logoHeaderImg from "@assets/images/other/logo_header.png";
import {HeaderAppProps} from "@components/common/other/HeaderApp/props";

export const HeaderApp: React.FC<HeaderAppProps> = (props: HeaderAppProps) => {
    const { classes } = HeaderAppStyles();

    return (
        <Header height="30px" className={classes.header}>
            <Container size="xl" className={classes.inner}>
                {!props.hideLogo && (
                    <Group spacing="xs">
                        <Image
                            src={logoHeaderImg}
                            alt="Логотип"
                            width={35}
                            radius="sm"
                        />
                        {!props.hideTextLogo && <Title c="white">CAS</Title>}
                    </Group>
                )}
                {props.center && (
                    <Box className={classes.centerComponent}>{props.center}</Box>
                )}
                {props.right && (
                    <Box className={classes.rightComponent}>{props.right}</Box>
                )}
            </Container>
        </Header>
    );
};