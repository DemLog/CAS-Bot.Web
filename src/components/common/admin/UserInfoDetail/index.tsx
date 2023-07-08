import React from "react";
import {Avatar, Box, Group, Text, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {UserInfoDetailStyles} from "@components/common/admin/UserInfoDetail/styles";
import {UserInfoDetailControl} from "@components/common/admin/UserInfoDetail/UserInfoDetailControl";
import {UserInfoDetailActivity} from "@components/common/admin/UserInfoDetail/UserInfoDetailActivity";
import {IUserActivity} from "@core/models/user/IUserActivity";
import {UserInfoDetailProps} from "@components/common/admin/UserInfoDetail/props";

export const UserInfoDetail: React.FC<UserInfoDetailProps> = (props: UserInfoDetailProps) => {
    const matches = useMediaQuery('(min-width: 780px)');
    const {classes} = UserInfoDetailStyles();

    const fakeActivityData: IUserActivity[] = Array.from({length: 4}, (_, index) => ({
        id: index + 1,
        username: `user${index + 1}`,
        action: `Action ${index + 1}`,
        date: new Date(Date.now() - Math.floor(Math.random() * 1000000000)),
    }));

    const displayUserRole = () => (
        <Box className={classes.userDataRole} ml={matches ? "xs" : 0} mt={matches ? 0 : "lg"}>
            <Title order={4} fw={600}>Роль: <Text span={!matches} inline fz="md" fw={200}>{props.user.role}</Text></Title>
        </Box>
    );

    return (
        <Box mt={matches ? 42 : "sm"} className={matches ? classes.mainContent : ''}>
            <Box className={matches ? classes.headerBox : classes.headerBoxMobile} p="xs">
                <Title ta={matches ? "left" : "center"} order={4} fw={400}>Пользователь <Text span fw={600}>{props.user.username}</Text></Title>
            </Box>
            <Box className={`${classes.userInfoContent} ${matches ? '' : classes.userInfoContentMobile}`} p={matches ? "sm" : 0}>
                <Box className={classes.userInfoContentItem}>
                    <Box className={classes.userDataBlock} m="sm" p="sm">
                        <Box className={classes.userData}>
                            <Avatar color="dark" size={matches ? "lg" : "xl"} radius="90px">DL</Avatar>
                            <Box pl="lg">
                                <Title order={4} fw={600}>{props.user.username} {props.user.username}</Title>
                                <Text inline c="#414448" fs="italic" fz="sm">@{props.user.username}</Text>
                                {!matches && displayUserRole()}
                            </Box>
                        </Box>
                        {matches && displayUserRole()}
                    </Box>
                    <UserInfoDetailActivity activities={fakeActivityData}/>
                </Box>
                <UserInfoDetailControl />
            </Box>
        </Box>
    );
};