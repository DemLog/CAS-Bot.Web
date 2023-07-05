import React from "react";
import { Container} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

export const ManagerPage = () => {
    const matches = useMediaQuery('(min-width: 625px)');

    return (
        <Container mx={matches ? 10 : 0}>
            Тут какой то контент
        </Container>
    )
}