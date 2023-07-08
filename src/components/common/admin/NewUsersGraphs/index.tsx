import React, {useEffect, useState} from "react";
import {Box, Title} from "@mantine/core";
import Plot from "react-plotly.js";
import {Data} from "plotly.js";
import {useMediaQuery} from "@mantine/hooks";

export const NewUsersGraphs: React.FC = () => {
    const [boxWidth, setBoxWidth] = useState(200);
    const matches = useMediaQuery('(min-width: 780px)');

    useEffect(() => {
        const handleResize = () => {
            const boxElement = document.getElementById("graphs-new-users");
            if (boxElement) {
                const styles = getComputedStyle(boxElement);
                const width = boxElement.offsetWidth - parseFloat(styles.marginLeft) - parseFloat(styles.marginRight);
                setBoxWidth(width);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const displayGraph = () => {
        // Тестовые данные для графика
        const data: Data[] = [
            { x: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'].map(date => new Date(date)), y: [10, 20, 15, 25, 30], type: 'scatter', mode: 'lines+markers' },
        ];

        // Опции макета графика
        const layout = {
            width: boxWidth,
            height: matches ? (boxWidth / 3) : (boxWidth / 1.5),
            xaxis: { title: 'Дата' },
            yaxis: { title: 'Количество пользователей', automargin: true, fixedrange: true },
            margin: { t: 60, b: 80, l: 60, r: 60 },
        };

        return (
            <Plot
                data={data}
                layout={layout}
            />
        );
    };

    return (
        <Box mt="sm">
            <Title order={matches ? 3 : 4} fw={400}>График появления новых пользователей</Title>
            <Box id="graphs-new-users" mt={5}>
                {displayGraph()}
            </Box>
        </Box>
    );
};