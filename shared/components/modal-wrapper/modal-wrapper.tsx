import React, { memo, useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { ModalContext } from '../../contexts/modal-context';
import { backdropStyle, ModalContentWrapper, modalStyles } from './styles';

function _ServerModal() {
    const modalClasses = modalStyles();
    const rootRef = React.useRef<HTMLDivElement>(null);
    const { config, setConfig } = useContext(ModalContext);

    const onClose = () => {
        config?.onClose?.();
        setConfig?.();
    };
    return (
        <Modal
            disablePortal
            disableEnforceFocus
            closeAfterTransition
            open={!!config?.content}
            onClose={() => onClose()}
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={modalClasses.modal}
            container={() => rootRef.current}
            BackdropProps={{ style: backdropStyle }}
        >
            <Fade in={!!config?.content}>
                <ModalContentWrapper>{config?.content}</ModalContentWrapper>
            </Fade>
        </Modal>
    );
}

const ServerModal = memo(_ServerModal);

export { ServerModal };
