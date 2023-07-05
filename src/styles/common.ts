import {MantineThemeOverride} from "@mantine/core";

export const CommonStyles: MantineThemeOverride = {
    globalStyles: (theme) => ({
        body: {
            backgroundColor: "#FBFBFB",
            height: '100%',
            width: '100%',
        },
        "#root": {
            height: '100%',
            width: '100%',
        }
    })
};