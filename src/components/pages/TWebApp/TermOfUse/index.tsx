import React from "react";
import {Box, Title} from "@mantine/core";
import {TermOfUseBox} from "@components/common/other/MyModals/TermsOfUseModal/TermOfUseBox";

export const TTermOfUsePage: React.FC = () => {
    return (
        <Box>
            <Title order={3} mb="sm">Пользовательское соглашение</Title>
            <TermOfUseBox />
        </Box>
    );
};