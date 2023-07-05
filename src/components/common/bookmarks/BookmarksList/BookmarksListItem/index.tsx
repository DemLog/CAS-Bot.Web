import React, {Fragment} from "react";
import {Box, Button, Group, Image, Text} from "@mantine/core";
import {BookmarksListItemStyles} from "@components/common/bookmarks/BookmarksList/BookmarksListItem/styles";
import {BookmarksListItemProps} from "@components/common/bookmarks/BookmarksList/BookmarksListItem/props";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {DeleteModal} from "@components/common/other/MyModals/DeleteModal";

export const BookmarksListItem: React.FC<BookmarksListItemProps> = (props: BookmarksListItemProps) => {
    const {classes} = BookmarksListItemStyles();
    const matches = useMediaQuery('(min-width: 780px)');

    const [openedModal, {open, close}] = useDisclosure(false);

    const handleAcceptDelete = () => {
        close();
    };

    const handleOpenButton = () => {

    };

    const displayButtons = () => (
        <Group className={classes.buttonsBlock} spacing="xs" pl="sm" mt={matches ? 0 : "xl"}>
            <Button onClick={open} color="red" compact={matches}>Удалить</Button>
            <Button onClick={handleOpenButton} color="gray" compact={matches}>Открыть</Button>
        </Group>
    );

    const displayPhotoBlock = () => {
        return matches ?
            <Box className={`${classes.infoBlockItem} ${!matches && classes.infoBlockItemMobile} ${classes.infoBlockItemPhoto}`}>
                <Text fz="sm">Фото продукта</Text>
                <Box className={classes.photoBackground}><Image height={50} width={50} src={props.photoUrl} withPlaceholder/></Box>
            </Box>
            :
            <Box className={classes.photoBackground} mr="sm"><Image height={80} width={80} src={props.photoUrl} withPlaceholder/></Box>;
    };

    const displayProductInfo = () => {
        const urlButtonBlock = <Box className={`${classes.infoBlockItem} ${!matches && classes.infoBlockItemMobile}`}>
            <Text fz="sm">{matches ? "Ссылка на продукт" : "Ссылка:"}</Text>
            <Button w={matches ? "70%" : "auto"} size="xs" component="a" target="_blank" href={props.url}
                    variant="outline" compact={!matches} ml={matches ? 0 : 5}>Открыть</Button>
        </Box>;

        const content = <Fragment>
            <Box className={`${classes.infoBlockItem} ${!matches && classes.infoBlockItemMobile} ${classes.infoBlockItemTitle}`}>
                {matches && <Text fz="sm">Название продукта</Text>}
                <Text pt={3}>{props.title}</Text>
            </Box>
            {matches && urlButtonBlock}
            <Box className={`${classes.infoBlockItem} ${!matches && classes.infoBlockItemMobile}`}>
                <Text fz="sm">Дата создания{!matches && ":"}</Text>
                <Text pt={3} pl={matches ? 0 : 5}>{props.dateCreated.toDateString()}</Text>
            </Box>
            {!matches && urlButtonBlock}
        </Fragment>;

        return (matches ? content : <Box>{content}</Box>);
    };

    return (
        <Fragment>
            <DeleteModal opened={openedModal} onClose={close} onAccept={handleAcceptDelete}/>
            <Box className={`${classes.mainItemContent} ${matches ? '' : classes.mainItemContentMobile}`} mb={matches ? 20 : 10}
                 p="sm">
                <Box className={`${classes.infoBlock} ${matches ? '' : classes.infoBlockMobile}`}>
                    {displayPhotoBlock()}
                    {displayProductInfo()}
                </Box>
                {displayButtons()}
            </Box>
        </Fragment>
    );
};