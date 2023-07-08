import React from "react";
import {Box, Table, Text, Title} from "@mantine/core";
import {IUserActivity} from "@core/models/user/IUserActivity";
import {useMediaQuery} from "@mantine/hooks";
import {UsersActivityListStyles} from "@components/common/admin/UsersActivityList/styles";

export const UsersActivityList: React.FC = () => {
    const {classes} = UsersActivityListStyles();
    const matches = useMediaQuery('(min-width: 780px)');

    const fakeActivityData: IUserActivity[] = Array.from({length: 10}, (_, index) => ({
        id: index + 1,
        username: `user${index + 1}`,
        action: `Action ${index + 1}`,
        date: new Date(Date.now() - Math.floor(Math.random() * 1000000000)),
    }));

    const rows = fakeActivityData.map(value => (
        <tr>
            <td className={classes.tdStyle}>{value.id}</td>
            <td className={classes.tdStyle}>{value.username}</td>
            <td className={classes.tdStyle}>{value.action}</td>
            <td>{value.date.toDateString()}</td>
        </tr>
    ));

    return (
        <Box mt="sm">
            <Title order={matches ? 3 : 4} fw={400}>Список активностей пользователей</Title>
            <Box className={classes.tableContent} mt={5}>
                <Table striped withColumnBorders highlightOnHover>
                    <thead>
                        <tr className={classes.thStyle}>
                            <th className={classes.tdStyle}><Text ta="center">ID Аккаунта</Text></th>
                            <th className={classes.tdStyle}><Text ta="center">Username</Text></th>
                            <th className={classes.tdStyle}><Text ta="center">Действие</Text></th>
                            <th><Text ta="center">Время</Text></th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </Box>
        </Box>
    );
};