import React, {Fragment, useState} from "react";
import {Box, Button, Checkbox, Group, Stack, Text} from "@mantine/core";
import {SearchProductInput} from "@components/common/analysis/SearchProductBlock/SearchProductInput";
import {SearchProductBlockStyles} from "@components/common/analysis/SearchProductBlock/styles";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import {CustomModal} from "@components/common/other/CustomModal";
import {SearchProductBlockProps} from "@components/common/analysis/SearchProductBlock/props";
import {ProductsFakeData} from "@core/stores/fakeData/products";
import apiService from "@core/services/apiService";
import {IProduct} from "@core/models/product/IProduct";

export const SearchProductBlock: React.FC<SearchProductBlockProps> = (props: SearchProductBlockProps) => {
    const {classes} = SearchProductBlockStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const [searchInput, setSearchInput] = useState('');

    const [openedModal, {open, close}] = useDisclosure(false);

    const handleSearchButton = async () => {
        const products = await apiService({
            method: "POST", url: "analysis/search", body: {
                text: searchInput,
                is_category: false
            }
        }) as IProduct[];

        props.setDataProducts(prevState => ({
            isActive: true,
            products: products
        }));
    };

    const displaySettingsModal = () => (
        <CustomModal
            buttons={[<Button onClick={close} color="gray">Закрыть</Button>]}
            modal={{
                title: "Расширенные настройки",
                withCloseButton: false,
                opened: openedModal,
                onClose: close,
                shadow: 'xl'
            }}>
            <Box w={300}>
                <Stack>
                    <Checkbox
                        labelPosition="left"
                        label="Искать категорию"
                    />
                </Stack>
            </Box>
        </CustomModal>
    );

    return (
        <Fragment>
            {displaySettingsModal()}
            <Box className={classes.mainContent} py={matches ? 0 : "sm"}>
                <SearchProductInput setDataInput={setSearchInput} submitButton={handleSearchButton}/>
                {matches ? <Box className={classes.settingsBlock} mt={2}>
                    <Text>Расширенные настройки:</Text>
                    <Group>
                        <Checkbox
                            labelPosition="left"
                            label="Искать категорию"
                        />
                    </Group>
                </Box> : <Box mt={5} className={classes.settingBlockMobile}><Button onClick={open} color="gray"
                                                                                    p="xs"><FontAwesomeIcon
                    icon={faSliders}/></Button></Box>}
            </Box>
        </Fragment>
    );
};