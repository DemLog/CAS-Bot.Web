import React from "react";
import {Box, Button, Text} from "@mantine/core";
import {CustomModal} from "@components/common/other/CustomModal";
import {DeleteModalProps} from "@components/common/other/MyModals/DeleteModal/props";

export const DeleteModal: React.FC<DeleteModalProps> = (props: DeleteModalProps) => {

    const handleCancelButton = () => {
        props.onClose();
    };

    const displayModalButtons = () => {
        return [
            <Button color="gray" onClick={handleCancelButton}>Отмена</Button>,
            <Button color="red" onClick={props.onAccept}>Ок</Button>
        ];
    };

    return (
        <CustomModal
            buttons={displayModalButtons()}
            modal={{
                withCloseButton: false,
                opened: props.opened,
                onClose: props.onClose,
                shadow: 'xl'
            }}
        >
            <Box>
                <Text>Вы действительно хотите удалить?</Text>
            </Box>
        </CustomModal>
    );
};