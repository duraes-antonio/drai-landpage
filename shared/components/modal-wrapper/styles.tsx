import { CSSProperties } from 'react';
import styled from 'styled-components';
import { colors, pxToRem } from '../../styles/variables';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MdCancel } from 'react-icons/md';
import { motion } from 'framer-motion';

const modalStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            padding: theme.spacing(1),
        },
    })
);

const ModalContentWrapper = styled(motion.div)`
    border-radius: ${pxToRem(25)};
    background-color: white;
    max-width: min(${pxToRem(840)}, 95%);
    box-shadow: 0 ${pxToRem(4)} ${pxToRem(30)} rgba(0, 0, 0, 0.25);
    overflow: hidden;
    display: flex;
    width: 100%;
    position: relative;
`;

export const CloseButton = styled(MdCancel)`
    cursor: pointer;
    background: white;
    border-radius: 50%;
    color: ${colors.grey};
    font-size: ${pxToRem(26)};
    right: ${pxToRem(16)};
    top: ${pxToRem(16)};
    position: absolute;
    outline-color: ${colors.primary};
    outline-width: 2px;
`;

const backdropStyle: CSSProperties = {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
};

export { backdropStyle, modalStyles, ModalContentWrapper };
