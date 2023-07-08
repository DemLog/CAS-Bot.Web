import React from "react";
import {Box, Button, Text} from "@mantine/core";
import {CustomModal} from "@components/common/other/CustomModal";
import {useNavigate} from "react-router-dom";
import {ExitModalProps} from "@components/common/other/MyModals/ExitModal/props";

export const ExitModal: React.FC<ExitModalProps> = (props: ExitModalProps) => {
    const navigate = useNavigate();

    const handleAcceptButton = () => {
        props.onClose();
        navigate("/login");
    };

    const handleCancelButton = () => {
        props.onClose();
    };

    const displayModalButtons = () => {
        return [
            <Button color="gray" onClick={handleCancelButton}>Отмена</Button>,
            <Button color="red" onClick={handleAcceptButton}>Ок</Button>
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
                <Text>Вы действительно хотите выйти из системы?</Text>
            </Box>
        </CustomModal>
    );
};