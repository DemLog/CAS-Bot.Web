import {createStyles} from "@mantine/core";

export const ReportProductInfoStyles = createStyles((theme) => ({
    mainContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    contentItem: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    contentItemMobile: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
}));