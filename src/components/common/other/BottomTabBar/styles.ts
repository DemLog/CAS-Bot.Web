import {createStyles} from "@mantine/core";

export const BottomTabBarStyles = createStyles((theme) => ({
    mainTabBar: {
        width: '100%',
        backgroundColor: "#ececec",
        borderTopLeftRadius: '13px',
        borderTopRightRadius: '13px',
        boxShadow: '0px -3px 10px -4px rgba(0,0,0,0.7)'
    },
    tab: {
        width: 'calc((100% - 50px)/4)'
    },
    tabList: {
        borderBottom: "none",
        display: 'flex',
        justifyContent: 'space-between'
    }
}));