import React, { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import { ReportProductListStyles } from "@components/common/analysis/ReportProduct/ReportProductList/styles";
import { IGraphs } from "@core/models/product/IGraphs";
import Plot from 'react-plotly.js';
import { ReportProductListItem } from "@components/common/analysis/ReportProduct/ReportProductList/ReportProductListItem";
import {useMediaQuery} from "@mantine/hooks";

export const ReportProductList: React.FC = () => {
    const { classes } = ReportProductListStyles();
    const [boxWidth, setBoxWidth] = useState(200); // Изначальная ширина компонента Box
    const matches = useMediaQuery('(min-width: 780px)');

    useEffect(() => {
        const handleResize = () => {
            const boxElement = document.getElementById("box-element"); // Получаем элемент Box по его id
            if (boxElement) {
                const styles = getComputedStyle(boxElement); // Получаем все свойства стиля элемента
                const width = boxElement.offsetWidth - parseFloat(styles.marginLeft) - parseFloat(styles.marginRight); // Получаем абсолютную ширину контента, включая margin
                setBoxWidth(width); // Обновляем состояние с новым значением ширины
            }
        };

        handleResize(); // Вызываем функцию один раз при монтировании компонента

        window.addEventListener("resize", handleResize); // Добавляем обработчик события изменения размера окна

        return () => {
            window.removeEventListener("resize", handleResize); // Удаляем обработчик при размонтировании компонента
        };
    }, []);

    const fakeGraphsData: IGraphs = {
        title: 'Какой-то анализ, не ебу',
        graph: <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                },
                { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: boxWidth, height: boxWidth / 1.5, title: 'A Fancy Plot' }}
        />
    };

    return (
        <Box className={classes.contentMain} mt="md" mx={matches ? "lg" : 0}>
            <Box id="box-element">
                {Array.from({ length: 4 }, () => fakeGraphsData).map(value => <ReportProductListItem {...value} />)}
            </Box>
        </Box>
    );
};