import React, {Fragment} from "react";
import {Box, Button, Group, Text} from "@mantine/core";
import {
    DetailProductAdvancedItemProps
} from "@components/common/analysis/DetailProduct/DetailProductAdvanced/DetailProductAdvancedItem/props";
import {
    DetailProductAdvancedItemStyles
} from "@components/common/analysis/DetailProduct/DetailProductAdvanced/DetailProductAdvancedItem/styles";
import {useMediaQuery} from "@mantine/hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie} from "@fortawesome/free-solid-svg-icons";

export const DetailProductAdvancedItem: React.FC<DetailProductAdvancedItemProps> = (props: DetailProductAdvancedItemProps) => {
    const {classes} = DetailProductAdvancedItemStyles();
    const matches = useMediaQuery('(min-width: 780px)');

    const displayProductInfo = () => {
        const content = <Fragment>
            <Box className={matches ? classes.infoItemTitle : classes.itemBlock}>
                {matches && <Text fw={200}>Название</Text>}
                <Text fz="lg">{props.title}</Text>
            </Box>
            <Box className={matches ? classes.infoItemElement : classes.itemBlock}>
                <Text fw={200}>{matches ? "Уровень вложенности" : "Вложенность:"}</Text>
                <Text ml={matches ? 0 : 5} fz="lg">{props.level}</Text>
            </Box>
        </Fragment>;

        return (matches ? content : <Box className={classes.infoItemProductMobile}>{content}</Box>);
    };

    return (
        <Box className={classes.mainItemContent} mb="sm" p="sm">
            <Box className={`${matches ? classes.infoContent : classes.infoContentMobile}`}>
                {displayProductInfo()}
                <Box className={matches ? classes.infoItemElement : classes.itemBlock}>
                    <Text fw={200}>Ссылка на категорию</Text>
                    <Button ml={matches ? 0 : 5} compact={!matches} component="a" target="_blank" href={props.url} variant="outline">Открыть</Button>
                </Box>
            </Box>
            <Group className={classes.itemBlock} ml={matches ? 0 : "md"}>
                {matches ? <Button>Анализировать</Button> : <Button><FontAwesomeIcon icon={faChartPie} size="lg" /></Button>}
            </Group>
        </Box>
    );
};