import React from "react";
import {Box, Text} from "@mantine/core";
import {
    ReportProductListItemProps
} from "@components/common/analysis/ReportProduct/ReportProductList/ReportProductListItem/props";
import {
    ReportProductListItemStyles
} from "@components/common/analysis/ReportProduct/ReportProductList/ReportProductListItem/styles";
import {useMediaQuery} from "@mantine/hooks";

export const ReportProductListItem: React.FC<ReportProductListItemProps> = (props: ReportProductListItemProps) => {
    const {classes} = ReportProductListItemStyles();
    const matches = useMediaQuery('(min-width: 780px)');

    return (
        <Box className={classes.mainContent} mb="lg">
            <Text fz={matches ? "lg" : "md"} fw={200} mb={3}>График по анализу: <Text span fw={500}>{props.title}</Text></Text>
            {props.graph}
        </Box>
    );
};