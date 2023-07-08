import React from "react";
import {Box, Text, Title} from "@mantine/core";
import {ResultSearchProps} from "@components/common/analysis/ResultSearchBlock/props";
import {ResultSearchItem} from "@components/common/analysis/ResultSearchBlock/ResultSearchItem";
import {useMediaQuery} from "@mantine/hooks";
import {ResultSearchBlockStyles} from "@components/common/analysis/ResultSearchBlock/styles";

export const ResultSearchBlock: React.FC<ResultSearchProps> = (props: ResultSearchProps) => {
    const matches = useMediaQuery('(min-width: 625px)');
    const {classes} = ResultSearchBlockStyles();

    return (
        <Box mt={matches ? "xl" : "sm"}>
            <Box className={classes.headerBlock}>
                {matches ? <Title order={3} fw={600}>Результат поиска:</Title> : <Text>Результат поиска:</Text>}
                <Text>{props.data.length} результатов</Text>
            </Box>
            <Box className={classes.mainContent} p={matches ? "sm" : "xs"}>
                {props.data.map(value => <ResultSearchItem {...value} />)}
            </Box>
        </Box>
    );
};