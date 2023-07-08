import {createStyles} from "@mantine/core";

export const HistoryListItemStyles = createStyles((theme) => ({
    mainItemContent: {
        backgroundColor: '#ddd',
        display: 'flex',
        width: '100%'
    },
    mainItemContentMobile: {
        flexDirection: 'column'
    },
    infoBlockItem: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '22%'
    },
    infoBlockMobile: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    infoBlockItemTitleMobile: {
        flexBasis: '60%'
    },
    infoBlockItemDateMobile: {
        flexBasis: '40%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    infoBlockItemTitle: {
        flexBasis: '35%'
    }
}));