import React from "react";
import {Container} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {HistoryList} from "@components/common/history";

export const HistoryPage = () => {
    const matches = useMediaQuery('(min-width: 625px)');

    return (
        <Container mx={matches ? 10 : 0}>
            <HistoryList />
        </Container>
    )
}