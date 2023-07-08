import React, {Fragment} from "react";
import {Box, Button, Group, Image, Text} from "@mantine/core";
import {ResultSearchItemProps} from "@components/common/analysis/ResultSearchBlock/ResultSearchItem/props";
import {useMediaQuery} from "@mantine/hooks";
import {BookmarksListItemStyles} from "@components/common/bookmarks/BookmarksList/BookmarksListItem/styles";
import {ResultSearchItemStyles} from "@components/common/analysis/ResultSearchBlock/ResultSearchItem/styles";
import {useNavigate} from "react-router-dom";

export const ResultSearchItem: React.FC<ResultSearchItemProps> = (props: ResultSearchItemProps) => {
    const matches = useMediaQuery('(min-width: 780px)');
    const {classes} = ResultSearchItemStyles();

    const navigate = useNavigate();
    const handleOpenButton = () => {
        navigate(`/analysis/detail?id=${props.id}`)
    };

    const displayPhotoBlock = () => {
        return matches ?
            <Box
                className={`${classes.infoBlockItem} ${!matches && classes.infoBlockItemMobile} ${classes.infoBlockItemPhoto}`}>
                <Text fz="sm">Фото продукта</Text>
                <Box className={classes.photoBackground} w={50} h={50}><Image height={50} width={50} src={props.photoUrl}
                                                                withPlaceholder/></Box>
            </Box>
            :
            <Box className={classes.photoBackground} w={80} h={80} mr="sm"><Image height={80} width={80} src={props.photoUrl}
                                                                    withPlaceholder/></Box>;
    };

    const displayProductInfo = () => {

        const content = <Fragment>
            <Box
                className={`${classes.infoBlockItem} ${!matches && classes.infoBlockItemMobile} ${classes.infoBlockItemTitle}`}>
                {matches && <Text fz="sm">Название продукта</Text>}
                <Text pt={3}>{props.title}</Text>
            </Box>
            <Box className={`${classes.infoBlockItem} ${!matches && classes.infoBlockItemMobile}`}>
                <Text fz="sm" pt={matches ? 0 : 5}>Категория{!matches && ":"}</Text>
                <Text pt={3} pl={matches ? 0 : 5}>{props.category}</Text>
            </Box>
            <Box mt={matches ? 0 : 3} className={`${classes.infoBlockItem} ${!matches && classes.infoBlockItemMobile}`}>
                <Text fz="sm">{matches ? "Ссылка на продукт" : "Ссылка:"}</Text>
                <Button w={matches ? "70%" : "auto"} size="xs" component="a" target="_blank" href={props.url}
                        variant="outline" compact={!matches} ml={matches ? 0 : 5}>Открыть</Button>
            </Box>
        </Fragment>;

        return (matches ? content : <Box>{content}</Box>);
    };

    return (
        <Box className={`${classes.mainItemContent} ${matches ? '' : classes.mainItemContentMobile}`}
             mb={10}
             p="sm">
            <Box className={`${classes.infoBlock} ${matches ? '' : classes.infoBlockMobile}`}>
                {displayPhotoBlock()}
                {displayProductInfo()}
            </Box>
            <Group className={classes.buttonsBlock} spacing="xs" pl="sm" mt={matches ? 0 : "xl"}>
                <Button onClick={handleOpenButton} color="gray">Выбрать</Button>
            </Group>
        </Box>
    );
};