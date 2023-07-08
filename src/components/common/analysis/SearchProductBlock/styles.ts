import {createStyles} from "@mantine/core";

export const SearchProductBlockStyles = createStyles((theme) => ({
    mainContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    settingsBlock: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    settingBlockMobile: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));