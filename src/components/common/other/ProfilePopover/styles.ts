import {createStyles} from "@mantine/core";

export const ProfilePopoverStyles = createStyles((theme) => ({
    buttonPopover: {
        backgroundColor: 'rgba(29,130,222,0.76)',
        height: '100%',
        color: 'white',
        borderRadius: '6px',
        ":hover": {
            backgroundColor: 'rgba(27,121,210,0.76)'
        },
        ":active": {
            backgroundColor: 'rgba(32,138,238,0.76)'
        }
    },
    dropdownPopover: {
        backgroundColor: '#eaeaea',
        boxShadow: '0px 0px 7px 4px rgba(0,0,0,0.28)',
    }
}));