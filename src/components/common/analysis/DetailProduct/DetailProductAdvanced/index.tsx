import React from "react";
import {Box, Title} from "@mantine/core";
import {IExtendProduct} from "@core/models/product/IExtendProduct";
import {
    DetailProductAdvancedItem
} from "@components/common/analysis/DetailProduct/DetailProductAdvanced/DetailProductAdvancedItem";
import {DetailProductAdvancedStyles} from "@components/common/analysis/DetailProduct/DetailProductAdvanced/styles";

const fakeProductAnalysis: IExtendProduct = {
    title: 'Чайники',
    level: 2,
    url: 'https://vk.com/'
};

export const DetailProductAdvanced: React.FC = () => {
    const {classes} = DetailProductAdvancedStyles();

    return (
        <Box mt="md">
            <Title order={3} fw={400}>Расширенный анализ</Title>
            <Box p="sm" className={classes.mainContent}>
                {Array.from({length: 4}, () => fakeProductAnalysis).map(value => <DetailProductAdvancedItem {...value}/>)}
            </Box>
        </Box>
    );
};