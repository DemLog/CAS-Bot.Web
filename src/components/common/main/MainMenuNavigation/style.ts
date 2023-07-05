import { createStyles } from "@mantine/core";

export const NavigationStyles = createStyles((theme) => ({
    menu: {
        width: "25%",
        height: "auto",
        backgroundColor: "#e1e1e14f",
        boxShadow: "0px 0px 10px -3px rgba(0,0,0,0.3)",
        alignSelf: 'flex-start'
    },
    navLink: {
        backgroundColor: '#e6e6e6'
    }
}));