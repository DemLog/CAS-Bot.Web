import React from "react";
import {Box, Button, Group, Image, Text, Title} from "@mantine/core";
import {DetailProductInfoProps} from "@components/common/analysis/DetailProduct/DetailProductInfo/props";
import {DetailProductInfoStyles} from "@components/common/analysis/DetailProduct/DetailProductInfo/styles";
import {useMediaQuery} from "@mantine/hooks";
import {useNavigate} from "react-router-dom";

export const DetailProductInfo: React.FC<DetailProductInfoProps> = (props: DetailProductInfoProps) => {
    const {classes} = DetailProductInfoStyles();
    const matches = useMediaQuery('(min-width: 780px)');

    const navigate = useNavigate();

    const displayButtons = () => {
        return (
            <Group className={classes.buttonItem} grow={!matches} mt={matches ? 0 : "sm"}>
                <Button onClick={() => navigate(`/analysis/report?id=${props.id}`)}>Провести анализ</Button>
                <Button component="a" target="_blank" href={props.url} color="gray">Открыть на сайте</Button>
            </Group>
        );
    };

    const displayCategories = () => (
        <Text fw={100} ml={matches ? 0 : "xs"} className={`${matches ? '' : classes.headerItemCategories}`}>{props.categories.map(value => value + ' < ')}</Text>
    );

    return (
        <Box>
            <Title order={3} fw={400}>Информация о продукте</Title>
            <Box className={classes.mainContent} p="md" mt={5}>
                <Box className={classes.headerItemBlock}>
                    <Text fz={matches ? "md" : "sm"} className={classes.headerItemElement}>Фото продукта</Text>
                    {!matches && displayCategories()}
                </Box>
                <Box className={classes.mainContentBlock} mt={2}>
                    <Box className={classes.photoItemBlock}>
                        <Image width={matches ? 150 : 100} height={matches ? 150 : 100} withPlaceholder src={props.photoUrl}/>
                    </Box>
                    <Box className={classes.infoItemBlock} ml="sm">
                        <Box>
                            <Title fw={200}>{props.title}</Title>
                            {matches && displayCategories()}
                        </Box>
                        {matches && displayButtons()}
                    </Box>
                </Box>
            </Box>
            {!matches && displayButtons()}
        </Box>
    );
};