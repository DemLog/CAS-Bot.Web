import {createStyles} from "@mantine/core";

export const ProfileBalanceBlockStyles = createStyles((theme) => ({
    commonContent: {
        backgroundColor: '#e3e3e3',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    balanceContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    balanceTextTokens: {
        textShadow: '1px 1px 1px #000'
    }
}));