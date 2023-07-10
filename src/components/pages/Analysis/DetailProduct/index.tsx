import {useMediaQuery} from "@mantine/hooks";
import {Container, Text} from "@mantine/core";
import React, {Fragment, useEffect, useState} from "react";
import {DetailProductAdvanced, DetailProductInfo} from "@components/common/analysis/DetailProduct";
import {useSearchParams} from "react-router-dom";
import {IProduct} from "@core/models/product/IProduct";
import {ProductsFakeData} from "@core/stores/fakeData/products";
import apiService from "@core/services/apiService";

export const DetailProductPage = () => {
    const matches = useMediaQuery('(min-width: 625px)');

    const [paramsPage] = useSearchParams();
    const [productValue, setProductValue] = useState<IProduct>();

    useEffect( () => {
        const getProduct = async () => {
            const idProductFromParams = paramsPage.get("id");
            const productSearch = await apiService({
                method: "GET",
                url: `analysis/product?product_id=${idProductFromParams}`
            }) as IProduct;

            setProductValue(prevState => productSearch);
        }
        getProduct();
    }, []);

    return (
        <Container mx={matches ? 10 : 0}>
            {productValue ?
                <Fragment>
                    <DetailProductInfo {...productValue} />
                    {/*<DetailProductAdvanced/>*/}
                </Fragment> :
                <Text>Пусто</Text>
            }
        </Container>
    )
};