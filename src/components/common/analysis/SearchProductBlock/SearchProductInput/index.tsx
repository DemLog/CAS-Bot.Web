import React from "react";
import {Box, Button, Input, Text} from "@mantine/core";
import {SearchProductInputStyles} from "@components/common/analysis/SearchProductBlock/SearchProductInput/styles";
import {useMediaQuery} from "@mantine/hooks";
import {SearchProductInputProps} from "@components/common/analysis/SearchProductBlock/SearchProductInput/props";

export const SearchProductInput: React.FC<SearchProductInputProps> = (props: SearchProductInputProps) => {
    const {classes} = SearchProductInputStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setDataInput(prevState => e.target.value);
    };

    return (
        <Box className={classes.mainContent} p="sm">
            {matches && <Text mr={2} fw={600} fz="lg">Поиск продукта:</Text>}
            <Input mr="sm" size="md" radius="md" onChange={handleChangeInput} className={classes.inputContent}/>
            <Button size="md" onClick={props.submitButton}>Найти</Button>
        </Box>
    );
}