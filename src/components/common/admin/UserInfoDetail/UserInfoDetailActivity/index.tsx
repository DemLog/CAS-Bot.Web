import React from "react";
import {Box, Table, Text, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {UserInfoDetailActivityStyles} from "@components/common/admin/UserInfoDetail/UserInfoDetailActivity/styles";
import {UserInfoDetailActivityProps} from "@components/common/admin/UserInfoDetail/UserInfoDetailActivity/props";

export const UserInfoDetailActivity: React.FC<UserInfoDetailActivityProps> = (props: UserInfoDetailActivityProps) => {
    const matches = useMediaQuery('(min-width: 780px)');
    const {classes} = UserInfoDetailActivityStyles();

    return (
        <Box m="sm">
            <Title order={5} fw={200}>Последие действия пользователя</Title>
            <Box className={classes.tableContent} mt={5}>
                <Table striped withColumnBorders highlightOnHover>
                    <thead>
                    <tr className={classes.thStyle}>
                        <th className={classes.tdStyle}><Text ta="center">Действие</Text></th>
                        <th><Text ta="center">Время</Text></th>
                    </tr>
                    </thead>
                    <tbody>{
                        props.activities.map(activity =>
                            <tr>
                                <td className={classes.tdStyle}>{activity.action}</td>
                                <td>{activity.date.toDateString()}</td>
                            </tr>
                        )
                    }</tbody>
                </Table>
            </Box>
        </Box>
    );
};