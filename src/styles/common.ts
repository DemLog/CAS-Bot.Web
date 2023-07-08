import {MantineThemeOverride} from "@mantine/core";

export const CommonStyles: MantineThemeOverride = {
    globalStyles: (theme) => ({
        body: {
            backgroundColor: "#FBFBFB",
            height: '100%',
            width: '100%',
            "-ms-overflow-style": 'none',
            "scrollbar-width": 'none',
            "::-webkit-scrollbar": {
                display: 'none'
            }
        },
        "#root": {
            height: '100%',
            width: '100%',
        },
    })
};