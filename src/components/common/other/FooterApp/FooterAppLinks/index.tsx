import React, {Fragment} from "react";
import {Group, Text} from "@mantine/core";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faDiscord, faGithub, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FooterAppLinksStyles} from "@components/common/other/FooterApp/FooterAppLinks/styles";
import {useMediaQuery} from "@mantine/hooks";

export const FooterAppLinks: React.FC = () => {
    const { classes } = FooterAppLinksStyles();
    const matches = useMediaQuery('(min-width: 625px)');

    const displayIconLinks = () => {
        const sizeIcon = matches ? "xl" : "2xl";
        return (
            <Fragment>
                <FontAwesomeIcon icon={faGithub} size={sizeIcon} />
                <FontAwesomeIcon icon={faDiscord} size={sizeIcon} />
                <FontAwesomeIcon icon={faTelegram} size={sizeIcon} />
            </Fragment>
        );
    };

    return (
        <Group className={matches ? '' : classes.linksContentMobile}>
            <Text>{matches ? "Наши контакты:" : "Создано командой ElevenSquad"}</Text>
            {matches ? displayIconLinks() : <Group>{displayIconLinks()}</Group>}
        </Group>
    );
};