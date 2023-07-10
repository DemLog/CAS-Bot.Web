import {Box, Button, Group} from "@mantine/core";
import React, {Fragment, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {SearchUser} from "@components/common/admin/SearchUser";
import {UserInfoDetail} from "@components/common/admin/UserInfoDetail";

export const TAdminPage: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<{id: number, username: string, role: string} | null>(null);
    const [activePanel, setActivePanel] = useState<number>(0);

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
            if (prevState === 1) {
                return 1
            }
            return prevState + 1;
        });
    };

    const displayBackButtonBlock = () => (
        <Group>
            <Button compact variant="subtle" mt="xs" onClick={handleBackButton} leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>Назад</Button>
        </Group>
    );

    const displayMainContentMobile = () => {
        switch (activePanel) {
            case 0:
                return <Fragment>
                    <SearchUser onNext={handleNextButton} setUser={setSelectedUser}/>
                </Fragment>;
            case 1:
                if (selectedUser) {
                    return <Fragment>
                        {displayBackButtonBlock()}
                        <UserInfoDetail user={selectedUser}/>
                    </Fragment>;
                }
                handleBackButton();
                break;
            default:
                return <SearchUser onNext={handleNextButton} setUser={setSelectedUser}/>;
        }
    };

    return (
        <Box>
            {displayMainContentMobile()}
        </Box>
    );
};