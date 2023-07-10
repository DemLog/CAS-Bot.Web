import React from "react";
import {Box} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {MainLayoutWebAppStyles} from "@components/common/main/MainLayoutWebApp/styles";

export const MainLayoutWebApp: React.FC = () => {
    const {classes} = MainLayoutWebAppStyles();

    return (
        <Box className={classes.mainContent} p="sm">
            <Outlet/>
        </Box>
    );
};