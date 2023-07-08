import React, {Fragment, useState} from "react";
import {Box, Button, Container, Group, Stack} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {NewUsersGraphs} from "@components/common/admin/NewUsersGraphs";
import {UsersActivityList} from "@components/common/admin/UsersActivityList";
import {SearchUser} from "@components/common/admin/SearchUser";
import {UserInfoDetail} from "@components/common/admin/UserInfoDetail";
import {AdminPageStyles} from "@components/pages/Admin/style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export const AdminPage = () => {
    const matches = useMediaQuery('(min-width: 625px)');
    const {classes} = AdminPageStyles();

    const [selectedUser, setSelectedUser] = useState<{id: number, username: string, role: string} | null>(null);
    const [activePanel, setActivePanel] = useState<number>(0);

    const handleSearchButton = () => {
        setActivePanel(prevState => 1);
    };

    const handleBackButton = () => {
        setActivePanel(prevState => {
            if (prevState === 0) {
                return 0
            }
            return prevState - 1;
        });
    };

    const handleNextButton = () => {
        setActivePanel(prevState => {
            if (prevState === 2) {
                return 2
            }
            return prevState + 1;
        });
    };

    const displayMainContent = () => (
        <Fragment>
            <NewUsersGraphs />
            <UsersActivityList />
            {matches ? <Box className={classes.searchBoxUser} mb="sm">
                <Box className={classes.searchUserItem}><SearchUser setUser={setSelectedUser}/></Box>
                {selectedUser &&
                    <Box className={classes.userInfoItem} ml="xl"><UserInfoDetail user={selectedUser}/></Box>}
            </Box> : <Stack justify="flex-end" h={150}>
                <Button onClick={handleSearchButton} fullWidth>Поиск пользователя</Button>
            </Stack>}
        </Fragment>
    );

    const displayBackButtonBlock = () => (
        <Group>
            <Button compact variant="subtle" mt="xs" onClick={handleBackButton} leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>Назад</Button>
        </Group>
    );

    const displayMainContentMobile = () => {
        switch (activePanel) {
            case 0:
                return displayMainContent();
            case 1:
                return <Fragment>
                    {displayBackButtonBlock()}
                    <SearchUser onNext={handleNextButton} setUser={setSelectedUser}/>
                </Fragment>;
            case 2:
                if (selectedUser) {
                    return <Fragment>
                        {displayBackButtonBlock()}
                        <UserInfoDetail user={selectedUser}/>
                    </Fragment>;
                }
                handleBackButton();
                break;
            default:
                return displayMainContent();
        }
    };

    return (
        <Container mx={matches ? 10 : 0}>
            {matches ? displayMainContent() :
                displayMainContentMobile()
            }
        </Container>
    )
}