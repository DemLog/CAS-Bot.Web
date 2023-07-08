import React, {Fragment} from "react";
import {Box, Button, Text} from "@mantine/core";
import {ProfileTermOfUseBlockStyles} from "@components/common/profile/TermsOfUseBlock/styles";
import {TermOfUseBox} from "@components/common/other/MyModals/TermsOfUseModal/TermOfUseBox";
import {useMediaQuery} from "@mantine/hooks";

export const ProfileTermOfUseBlock: React.FC = () => {
    const {classes} = ProfileTermOfUseBlockStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    return (
        <Fragment>
            {!matches && <Text fs="italic" mt={20}>Пользовательское соглашение</Text>}
            <Box className={classes.commonContent} my={matches ? 15 : 0} px={matches ? 40 : 15} py={10}>
                {matches && <Box className={classes.headerBlock}>
                    <Text fz="lg" fw={500}>Пользовательское соглашение</Text>
                    <Button color="gray">Помощь</Button>
                </Box>}
                <Box mt={10}>
                    <TermOfUseBox/>
                </Box>
            </Box>
        </Fragment>
    );
};