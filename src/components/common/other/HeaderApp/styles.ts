import {createStyles} from "@mantine/core";

export const HeaderAppStyles = createStyles((theme) => ({
    header: {
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        boxSizing: 'unset',
        borderBottom: 'none',
        backgroundColor: '#3C9CF4',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        position: 'sticky'
    },
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        height: '100%'
    },
    centerComponent: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        color: 'white'
    },
    rightComponent: {
        display: 'flex',
        justifyContent: 'center'
    }
}));