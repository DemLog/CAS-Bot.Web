import {useMediaQuery} from "@mantine/hooks";
import {Container} from "@mantine/core";
import React, {useState} from "react";
import {SearchProductBlock} from "@components/common/analysis/SearchProductBlock";
import {IProduct} from "@core/models/product/IProduct";
import {ResultSearchBlock} from "@components/common/analysis/ResultSearchBlock";

export const SearchProductPage = () => {
    const matches = useMediaQuery('(min-width: 625px)');
    const [dataSearch, setDataSearch] = useState<{ isActive: boolean, products: IProduct[] }>({
        isActive: false,
        products: []
    });

    return (
        <Container mx={matches ? 10 : 0}>
            <SearchProductBlock setDataProducts={setDataSearch}/>
            {dataSearch.isActive && <ResultSearchBlock data={dataSearch.products}/>}
        </Container>
    )
};