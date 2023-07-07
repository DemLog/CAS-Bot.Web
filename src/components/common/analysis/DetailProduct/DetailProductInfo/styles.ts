import {createStyles} from "@mantine/core";

export const DetailProductInfoStyles = createStyles((theme) => ({
    mainContent: {
        backgroundColor: '#ddd'
    },
    mainContentBlock: {
        display: 'flex'
    },
    headerItemBlock: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    headerItemElement: {
        display: 'flex',
        flexBasis: '30%'
    },
    headerItemCategories: {
        display: 'flex',
        flexBasis: '70%',
        justifyContent: 'flex-end'
    },
    photoItemBlock: {
        flexBasis: '20%'
    },
    infoItemBlock: {
        display: 'flex',
        flexBasis: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    buttonItem: {
        justifyContent: 'flex-end'
    },
    buttonItemMobile: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));