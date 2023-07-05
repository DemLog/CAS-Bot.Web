import {useMediaQuery} from "@mantine/hooks";
import {Container} from "@mantine/core";
import React from "react";
import {ProfileBalanceBlock, ProfileTermOfUseBlock, ProfileUserInfoBlock} from "@components/common/profile";
import {ProfileMobileButtons} from "@components/common/profile/ProfileMobileButtons";

export const ProfilePage = () => {
    const matches = useMediaQuery('(min-width: 625px)');

    return (
        <Container mx={matches ? 10 : 0}>
            <ProfileUserInfoBlock />
            <ProfileBalanceBlock />
            <ProfileTermOfUseBlock />
            {!matches && <ProfileMobileButtons />}
        </Container>
    )
};