import {createStyles} from "@mantine/core";

export const LoginMainImgBlockStyles = createStyles((theme) => ({
    blockContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainBlock: {
        width: '50%',
    },
    blockContentMobile: {
        height: '25%',
    }
}));