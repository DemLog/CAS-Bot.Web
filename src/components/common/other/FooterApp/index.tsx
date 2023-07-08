import React from "react";

import {Box, Text} from "@mantine/core";
import {FooterAppLinks} from "components/common/other/FooterApp/FooterAppLinks";
import {FooterAppStyles} from "@components/common/other/FooterApp/styles";
import {useMediaQuery} from "@mantine/hooks";

export const FooterApp: React.FC = () => {
    const { classes } = FooterAppStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    return (
        <Box className={`${classes.footerContent} ${matches ? classes.footerContentDesktop : classes.footerContentMobile}`} my={25}>
            {matches && <Text>Создано командой ElevenSquad</Text>}
            <FooterAppLinks />
        </Box>
    );
};