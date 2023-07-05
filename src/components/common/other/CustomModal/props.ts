import {ModalProps} from "@mantine/core";
import {ReactNode} from "react";

export interface CustomModalProps {
    children: ReactNode;
    modal: ModalProps;
    title?: string;
    buttons?: ReactNode[];
}