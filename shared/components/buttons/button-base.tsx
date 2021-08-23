import React, { memo } from 'react';
import { alpha, Button, Theme, withStyles } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button/Button';

const CustomButton = withStyles((theme: Theme) => ({
    root: {
        borderRadius: 35,
        '&:focus': {
            boxShadow: `0 0 0 0.15rem ${alpha(
                theme.palette.primary.main,
                0.5
            )}`,
        },
    },
}))(Button);

function ButtonBase(props: ButtonProps) {
    return (
        <CustomButton
            {...props}
            color={'primary'}
            disableElevation
            disableFocusRipple
        >
            {props.children}
        </CustomButton>
    );
}

export default memo(ButtonBase);
