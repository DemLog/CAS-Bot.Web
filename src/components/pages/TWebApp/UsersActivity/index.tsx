import React from "react";
import {Box} from "@mantine/core";
import {NewUsersGraphs} from "@components/common/admin/NewUsersGraphs";
import {UsersActivityList} from "@components/common/admin/UsersActivityList";

export const TUserActivityPage: React.FC = () => {
    return (
        <Box>
            <NewUsersGraphs />
            <UsersActivityList />
        </Box>
    );
};