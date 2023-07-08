import React, {Fragment} from "react";
import {Box, Button, Text} from "@mantine/core";
import {HistoryListItemProps} from "@components/common/history/HistoryList/HistoryListItem/props";
import {HistoryListItemStyles} from "@components/common/history/HistoryList/HistoryListItem/styles";
import {useMediaQuery} from "@mantine/hooks";

export const HistoryListItem: React.FC<HistoryListItemProps> = (props: HistoryListItemProps) => {
    const {classes} = HistoryListItemStyles();
    const matches = useMediaQuery('(min-width: 780px)');

    const displayProductButton = () => {
        const content = <Fragment>
            <Text fz="sm">{matches ? "Выданный продукт" : "Продукт:"}</Text>
            <Button
                component="a"
                target="_blank"
                href={props.url}
                variant="outline"
                compact={!matches}
                w={matches ? "60%" : "auto"}
                ml={matches ? 0 : "sm"}
            >Открыть</Button>
        </Fragment>;

        return (matches ?
                <Box className={classes.infoBlockItem}>
                    {content}
                </Box>
                : <Box className={classes.infoBlockMobile} mt="sm">{content}</Box>
        );
    };

    const displayProductInfo = () => {
        const content = <Fragment>
            <Box className={matches ? `${classes.infoBlockItem} ${classes.infoBlockItemTitle}` : classes.infoBlockItemTitleMobile}>
                {matches && <Text fz="sm">Название запроса</Text>}
                <Text>{props.title}</Text>
            </Box>
            <Box className={matches ? classes.infoBlockItem : classes.infoBlockItemDateMobile}>
                {matches && <Text fz="sm">Дата</Text>}
                <Text>{props.date.toDateString()}</Text>
            </Box>
        </Fragment>

        return (matches ? content : <Box className={classes.infoBlockMobile}>{content}</Box>);
    };

    return (
        <Box className={`${classes.mainItemContent} ${matches ? '' : classes.mainItemContentMobile}`} mb={10} p="sm"
             pl={matches ? 80 : "sm"}>
            {displayProductInfo()}
            {displayProductButton()}
        </Box>
    )
};