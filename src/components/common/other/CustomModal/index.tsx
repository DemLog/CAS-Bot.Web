import React from "react";
import {CustomModalProps} from "@components/common/other/CustomModal/props";
import {Box, Container, Group, Modal, Title, useMantineTheme} from "@mantine/core";
import {CustomModalStyles} from "@components/common/other/CustomModal/styles";
import {useMediaQuery} from "@mantine/hooks";

export const CustomModal: React.FC<CustomModalProps> = (props: CustomModalProps) => {
    const {classes} = CustomModalStyles();
    const theme = useMantineTheme();
    const matches = useMediaQuery('(min-width: 625px)');

    return (
        <Modal {...props.modal}
               centered={true}
               size="auto"
               radius="md"
               overlayProps={{
                   color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                   opacity: 0.55,
                   blur: 3,
               }}
        >
            <Container size="lg">
                <Box className={classes.headerTitleModal}>
                    <Title order={2} ta={matches ? "left" : "center"} mb={15}>{props.title}</Title>
                </Box>
                {props.children}
                <Group spacing="xs" position="right" mt={15}>
                    {props.buttons?.map((button) => button)}
                </Group>
            </Container>
        </Modal>
    );
};