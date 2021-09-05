import React, { memo } from 'react';
import {
    alpha,
    Button,
    CircularProgress,
    Theme,
    withStyles,
} from '@material-ui/core';
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

function ButtonBase(props: ButtonProps & { loading?: boolean }) {
    return (
        <CustomButton
            {...props}
            color={'primary'}
            disabled={props?.disabled || props?.loading}
            disableElevation
            disableFocusRipple
            startIcon={props.loading && <CircularProgress size={18} />}
        >
            {props.children}
        </CustomButton>
    );
}

export default memo(ButtonBase);
