import {IProduct} from "@core/models/product/IProduct";
import React from "react";

export interface SearchProductBlockProps {
    setDataProducts: React.Dispatch<React.SetStateAction<{isActive: boolean, products: IProduct[]}>>
}