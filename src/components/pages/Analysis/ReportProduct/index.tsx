import React, {Fragment, useEffect, useState} from "react";
import {Container} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {ReportProductInfo, ReportProductList} from "@components/common/analysis/ReportProduct";
import {useSearchParams} from "react-router-dom";
import {IProduct} from "@core/models/product/IProduct";
import {ProductsFakeData} from "@core/stores/fakeData/products";

export const ReportProductPage = () => {
    const matches = useMediaQuery('(min-width: 780px)');

    const [paramsPage] = useSearchParams();
    const [productValue, setProductValue] = useState<IProduct>();

    useEffect(() => {
        const idProductFromParams = paramsPage.get("id");
        const productSearch = ProductsFakeData.find(value => value.id === idProductFromParams)

        setProductValue(prevState => productSearch);
    }, []);

    return (
        <Container mx={matches ? 10 : 0}>
            {productValue && <Fragment>
                <ReportProductInfo {...productValue}/>
                <ReportProductList />
            </Fragment>}
        </Container>
    );
};