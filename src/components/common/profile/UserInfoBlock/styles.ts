import {createStyles} from "@mantine/core";

export const ProfileUserInfoBlockStyles = createStyles((theme) => ({
    commonContent: {
        backgroundColor: '#e3e3e3',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    commonContentMobile: {
        flexDirection: 'column'
    },
    userInfoContent: {
        display: 'flex',
        alignItems: 'center'
    },
    manageContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}));