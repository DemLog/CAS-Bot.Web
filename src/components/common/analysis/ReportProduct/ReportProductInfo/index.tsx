import React from "react";
import {Box, Button, Checkbox, Group, Text, Title} from "@mantine/core";
import {ReportProductInfoProps} from "@components/common/analysis/ReportProduct/ReportProductInfo/props";
import {ReportProductInfoStyles} from "@components/common/analysis/ReportProduct/ReportProductInfo/styles";
import {useMediaQuery} from "@mantine/hooks";

export const ReportProductInfo: React.FC<ReportProductInfoProps> = (props: ReportProductInfoProps) => {
    const {classes} = ReportProductInfoStyles();
    const matches = useMediaQuery('(min-width: 780px)');

    const displayButtons = () => (
        <Group position={matches ? "left" : "right"} mt={matches ? 0 : "md"}>
            <Checkbox size="xs" label="Сделать публичным" labelPosition="left"/>
            <Button size="xs"><Text fz="xs" inline align="center">Добавить в <Text inline>избранное</Text></Text></Button>
            <Button size="xs">Поделиться</Button>
        </Group>
    );

    return (
        <Box className={classes.mainContent} mt="sm">
            <Box className={classes.contentItem}>
                <Text fs="italic">Отчет №{props.id}</Text>
                {matches && displayButtons()}
            </Box>
            <Box className={matches ? classes.contentItem : classes.contentItemMobile} mt={matches ? "lg" : "xs"}>
                <Text fz={matches ? "xl" : "md"} fw={40}>Отчет по продукту <Text span fw={500}>{props.title}</Text></Text>
                <Text fz={matches ? "lg" : "sm"} align={matches ? "left" : "right"}>01/01/2002 13:00:00</Text>
            </Box>
            {!matches && displayButtons()}
        </Box>
    );
};