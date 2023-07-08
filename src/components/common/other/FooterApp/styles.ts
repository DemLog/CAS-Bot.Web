import {createStyles} from "@mantine/core";

export const FooterAppStyles = createStyles((theme) => ({
    footerContent: {
        display: 'flex',
    },
    footerContentDesktop: {
        justifyContent: 'space-between'
    },
    footerContentMobile: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}));