import React from "react";
import {Box, Button, Group, Input, Text} from "@mantine/core";
import {SearchUserInputStyles} from "@components/common/admin/SearchUser/SearchUserInput/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {SearchUserInputProps} from "@components/common/admin/SearchUser/SearchUserInput/props";

export const SearchUserInput: React.FC<SearchUserInputProps> = (props: SearchUserInputProps) => {
    const {classes} = SearchUserInputStyles();

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.onSearch();
        }
    };

    return (
        <Group className={classes.mainContent} p="xs">
            <Text>Поиск:</Text>
            <Input
                className={classes.inputItem}
                onKeyPress={handleKeyPress}
                onChange={value => props.setValue(prevState => value.target.value)}
                radius="lg"
                rightSection={
                    <Box mr="xl">
                        <Button compact variant="light" color="gray" onClick={props.onSearch}><FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
                    </Box>
                }
            ></Input>
        </Group>
    );
};