import {createStyles} from "@mantine/core";

export const DetailProductAdvancedItemStyles = createStyles((theme) => ({
    mainItemContent: {
        backgroundColor: '#f5f4f4',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    infoContent: {
        display: 'flex',
        flexGrow: 1
    },
    infoItemTitle: {
        flexBasis: '36%'
    },
    infoItemElement: {
        flexBasis: '32%'
    },
    infoItemProductMobile: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    infoContentMobile: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    },
    itemBlock: {
        display: 'flex'
    }

}));