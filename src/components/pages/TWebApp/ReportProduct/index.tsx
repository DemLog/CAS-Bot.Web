import React, {Fragment, useEffect, useState} from "react";
import {Box} from "@mantine/core";
import {ReportProductInfo, ReportProductList} from "@components/common/analysis/ReportProduct";
import {useSearchParams} from "react-router-dom";
import {IProduct} from "@core/models/product/IProduct";
import {ProductsFakeData} from "@core/stores/fakeData/products";

export const TReportProductPage: React.FC = () => {
    const [paramsPage] = useSearchParams();
    const [productValue, setProductValue] = useState<IProduct>();

    useEffect(() => {
        const idProductFromParams = paramsPage.get("id");
        const productSearch = ProductsFakeData.find(value => value.id === idProductFromParams)

        setProductValue(prevState => productSearch);
    }, []);

    return (
        <Box>
            {productValue &&
                <Fragment>
                    <ReportProductInfo {...productValue}/>
                    <ReportProductList/>
                </Fragment>
            }
        </Box>
    );
};