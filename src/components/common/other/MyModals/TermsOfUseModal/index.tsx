import React from "react";
import {CustomModal} from "@components/common/other/CustomModal";
import {Button} from "@mantine/core";
import {TermOfUseBox} from "@components/common/other/MyModals/TermsOfUseModal/TermOfUseBox";
import {TermOfUseModalProps} from "@components/common/other/MyModals/TermsOfUseModal/props";

export const TermsOfUseModal: React.FC<TermOfUseModalProps> = (props: TermOfUseModalProps) => {

    const handleCancelButton = () => {
        props.onClose();
    };

    const displayModalButtons = () => {
        return [
            <Button color="gray" onClick={handleCancelButton}>Отмена</Button>,
            <Button color="green" onClick={props.onAccept}>Принять</Button>
        ];
    };

    return (
        <CustomModal
            title="Пользовательское соглашение"
            buttons={displayModalButtons()}
            modal={{
                withCloseButton: false,
                opened: props.opened,
                onClose: props.onClose,
                shadow: 'xl'}}
        >
            <TermOfUseBox />
        </CustomModal>
    );
};