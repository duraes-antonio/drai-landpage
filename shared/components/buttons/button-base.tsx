import React, { memo } from 'react';
import { Button, Theme, withStyles } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button/Button';

const CustomButton = withStyles((theme: Theme) => ({
    root: {
        borderRadius: 30,
    },
}))(Button);

function ButtonBase(props: ButtonProps) {
    return (
        <CustomButton {...props} color={'primary'} disableElevation>
            {props.children}
        </CustomButton>
    );
}

export default memo(ButtonBase);
