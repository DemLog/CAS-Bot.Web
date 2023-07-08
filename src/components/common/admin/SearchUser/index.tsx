import React, {useState} from "react";
import {Box, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {SearchUserInput} from "@components/common/admin/SearchUser/SearchUserInput";
import {SearchUserList} from "@components/common/admin/SearchUser/SearchUserList";
import {SearchUserProps} from "@components/common/admin/SearchUser/props";

const fakeUserData: {id: number, username: string, role: string}[] = [
    {
        id: 123456789,
        username: "user1",
        role: "Admin",
    },
    {
        id: 987654321,
        username: "user2",
        role: "User",
    },
    {
        id: 456789123,
        username: "user3",
        role: "User",
    },
    {
        id: 789123456,
        username: "user4",
        role: "User",
    },
    {
        id: 321654987,
        username: "user5",
        role: "User",
    },
    {
        id: 654987321,
        username: "user6",
        role: "User",
    },
    {
        id: 987321654,
        username: "user7",
        role: "User",
    },
    {
        id: 789456123,
        username: "user8",
        role: "User",
    }
];

export const SearchUser: React.FC<SearchUserProps> = (props: SearchUserProps) => {
    const matches = useMediaQuery('(min-width: 780px)');

    const [searchValue, setSearchValue] = useState<string>('');
    const [users, setUsers] = useState<{id: number, username: string, role: string}[]>([]);

    const handleSearchButton = () => {
        setUsers(prevState => fakeUserData);
    };

    const handleSelectUser = (user: {id: number, username: string, role: string}) => {
        props.setUser(prevState => user);
        props.onNext?.();
    }

    return (
        <Box mt="sm">
            <Title order={matches ? 3 : 4} fw={400}>Выбрать пользователя</Title>
            <SearchUserInput setValue={setSearchValue} onSearch={handleSearchButton}/>
            <SearchUserList users={users} onSelect={handleSelectUser}/>
        </Box>
    );
};