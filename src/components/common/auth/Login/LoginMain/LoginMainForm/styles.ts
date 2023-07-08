import {createStyles} from "@mantine/core";

export const LoginMainFormStyles = createStyles((theme) => ({
    formContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainBlock: {
        width: '50%'
    },
    formContentMobile: {
        boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.4)',
        backgroundColor: 'rgba(245,245,245,0.89)',
        borderRadius: '8px'
    },
    boxForModal: {
        height: '500px',
        fontSize: '13px',
        border: '2px solid rgba(0,0,0,0.2)',
        borderRadius: '5px'
    }
}));