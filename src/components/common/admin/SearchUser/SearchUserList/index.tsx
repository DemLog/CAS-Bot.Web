import React from "react";
import {Box, Table, Text} from "@mantine/core";
import {SearchUserListStyles} from "@components/common/admin/SearchUser/SearchUserList/styles";
import {SearchUserListProps} from "@components/common/admin/SearchUser/SearchUserList/props";

export const SearchUserList: React.FC<SearchUserListProps> = (props: SearchUserListProps) => {
    const {classes} = SearchUserListStyles();

    return (
        <Box className={classes.mainContent}>
            <Table striped withColumnBorders highlightOnHover>
                <thead>
                <tr className={classes.thStyle}>
                    <th className={classes.tdStyle}><Text ta="center">ID Аккаунта</Text></th>
                    <th className={classes.tdStyle}><Text ta="center">Username</Text></th>
                    <th><Text ta="center">Роль</Text></th>
                </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <tr className={classes.selectedTr} onClick={() => props.onSelect(user)}>
                            <td className={classes.tdStyle}>{user.id}</td>
                            <td className={classes.tdStyle}>{user.username}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Box>
    );
};