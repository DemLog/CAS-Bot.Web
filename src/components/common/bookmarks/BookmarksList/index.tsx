import {Box, ScrollArea} from "@mantine/core";
import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {BookmarksListStyles} from "@components/common/bookmarks/BookmarksList/styles";
import {useStores} from "@core/hooks";
import {BookmarksListItem} from "@components/common/bookmarks";

export const BookmarksList: React.FC = observer(() => {
    const {classes} = BookmarksListStyles();

    const {bookmarksStore} = useStores();
    const bookmarksItems = bookmarksStore.getBookmarks();

    return (
        <Box>
            {bookmarksItems.map(value =>
                <BookmarksListItem {...value}/>
            )}
        </Box>
    );
});