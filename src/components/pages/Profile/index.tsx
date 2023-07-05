import {useMediaQuery} from "@mantine/hooks";
import {Container} from "@mantine/core";
import React from "react";

export const ProfilePage = () => {
    const matches = useMediaQuery('(min-width: 625px)');

    return (
        <Container mx={matches ? 10 : 0}>
            Тут какой то контент
        </Container>
    )
};