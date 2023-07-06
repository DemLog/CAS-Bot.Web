import {Box, Button} from "@mantine/core";
import React, {Fragment} from "react";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";
import {HistoryListItem} from "@components/common/history";
import {HistoryListStyles} from "@components/common/history/HistoryList/styles";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {DeleteModal} from "@components/common/other/MyModals/DeleteModal";

export const HistoryList: React.FC = observer(() => {
    const {classes} = HistoryListStyles();
    const matches = useMediaQuery('(min-width: 780px)');

    const [openedModal, {open, close}] = useDisclosure(false);

    const handleAcceptDelete = () => {
        close();
    };

    const {historyStore} = useStores();
    const historyItems = historyStore.getHistory();

    return (
        <Fragment>
            <DeleteModal opened={openedModal} onClose={close} onAccept={handleAcceptDelete}/>
            <Box className={classes.mainContent}>
                <Box className={classes.headerContent} mb="sm">
                    <Button color="red" onClick={open} fullWidth={!matches}>Очистить историю</Button>
                </Box>
                {historyItems.map(value =>
                    <HistoryListItem {...value} />
                )}
            </Box>
        </Fragment>
    )
});