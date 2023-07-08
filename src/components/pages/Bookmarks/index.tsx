import React from "react";
import {Container} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {BookmarksList} from "@components/common/bookmarks";

export const BookmarksPage = () => {
    const matches = useMediaQuery('(min-width: 625px)');

    return (
        <Container mx={matches ? 10 : 0}>
            <BookmarksList />
        </Container>
    )
}