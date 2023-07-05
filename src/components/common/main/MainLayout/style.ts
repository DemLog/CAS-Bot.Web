import { createStyles } from "@mantine/core";

export const MainLayoutStyles = createStyles((theme) => ({
    mainWindow:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'calc(100% - 50px - 2px)'
    },
    mainContent: {
        width: '100%',
        display: 'flex'
    },
    mainContentMobile: {
        height: '98%'
    },
    pageContent: {
        width: '100%',
        height: "auto",
        backgroundColor: "#e1e1e14f",
        boxShadow: "0px 0px 10px -3px rgba(0,0,0,0.3)"
    },
    pageContentMobile: {
        height: "100%"
    }
}));