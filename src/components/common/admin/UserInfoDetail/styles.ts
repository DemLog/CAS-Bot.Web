import {createStyles} from "@mantine/core";

export const UserInfoDetailStyles = createStyles((theme) => ({
    mainContent: {
        backgroundColor: '#ddd'
    },
    headerBox: {
        border: '1px solid #000',
        backgroundColor: "#f4f4f4",
    },
    headerBoxMobile: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        backgroundColor: "#c4c4c4",
    },
    userInfoContent: {
        display: 'flex'
    },
    userInfoContentMobile: {
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
    },
    userInfoContentItem: {
        backgroundColor: "#f4f4f4",
        flexGrow: 1
    },
    userData: {
        display: 'flex',
    },
    userDataBlock: {
        backgroundColor: '#ddd',
        display: 'flex',
        justifyContent: 'space-between',
    },
    userDataRole: {

    }
}));