import {createStyles} from "@mantine/core";

export const SearchUserListStyles = createStyles((theme) => ({
    mainContent: {
        minHeight: '300px',
        backgroundColor: '#ddd'
    },
    tableContent: {
        backgroundColor: '#ddd'
    },
    tdStyle: {
        borderRightColor: '#000 !important'
    },
    thStyle: {
        backgroundColor: '#bebebe'
    },
    selectedTr: {
        ":hover": {
            backgroundColor: '#b6b6b6 !important'
        },
        ":active": {
            backgroundColor: '#a2a2a2 !important'
        }
    }
}));