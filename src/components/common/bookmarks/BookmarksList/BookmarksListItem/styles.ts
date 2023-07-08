import {createStyles} from "@mantine/core";

export const BookmarksListItemStyles = createStyles((theme) => ({
    mainItemContent: {
        backgroundColor: '#ddd',
        display: 'flex',
        width: '100%'
    },
    mainItemContentMobile: {
        flexDirection: 'column'
    },
    infoBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    infoBlockMobile: {
        justifyContent: 'flex-start'
    },
    infoBlockItem: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '22%'
    },
    infoBlockItemMobile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoBlockItemTitle: {
        flexBasis: '40%'
    },
    infoBlockItemPhoto: {
        alignItems: 'center',
        flexBasis: '16%'
    },
    buttonsBlock: {
        flexGrow: 0,
        justifyContent: 'flex-end'
    },
    photoBackground: {
        backgroundColor: 'gray'
    }
}));