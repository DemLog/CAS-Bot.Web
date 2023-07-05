import {createStyles} from "@mantine/core";

export const ProfilePopoverDropdownStyles = createStyles((theme) => ({
    mainContent: {
        width: '250px'
    },
    navLinkButton: {
        borderRadius: '5px'
    },
    navLinkButtonDefault: {
        backgroundColor: '#d9d6d68c',
        ":hover": {
            backgroundColor: '#d0cfcf'
        },
        ":active": {
            backgroundColor: '#e8e8e8'
        }
    },
    navLinkButtonExit: {
        backgroundColor: '#0058ffd6',
        color: 'white',
        ":hover": {
            backgroundColor: '#afafaf'
        },
        ":active": {
            backgroundColor: '#bdbbbb'
        }
    },
    navLinkButtonDisable: {
        color: 'black',
        opacity: '1 !important'
    },
    balanceText: {
        textShadow: '1px 1px 1px #000;'
    }
}));