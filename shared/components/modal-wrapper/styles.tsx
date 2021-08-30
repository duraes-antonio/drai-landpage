import { CSSProperties } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/variables';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

const ModalContentWrapper = styled.div`
  border-radius: ${pxToRem(25)};
  background-color: white;
  max-width: min(${pxToRem(840)}, 95%);
  box-shadow: 0 ${pxToRem(4)} ${pxToRem(30)} rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  width: 100%;
`;

const backdropStyle: CSSProperties = {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
};

export {backdropStyle, modalStyles, ModalContentWrapper};
