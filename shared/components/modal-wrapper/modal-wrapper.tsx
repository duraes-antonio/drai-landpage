import React, { memo, useContext, useEffect, useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import { ModalContext } from '../../contexts/modal-context';
import {
    backdropStyle,
    CloseButton,
    ModalContentWrapper,
    modalStyles,
} from './styles';
import { useSpring } from 'react-spring';
import { AnimateSharedLayout } from 'framer-motion';

function _ServerModal() {
    const { config, setConfig } = useContext(ModalContext);
    const contentRef = useRef(null);
    const [fadeIn, set] = useSpring(() => ({
        from: {
            width: '100%',
            opacity: 0,
        },
    }));

    useEffect(() => {
        set({
            from: {
                width: '100%',
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        });
    }, [config?.content]);

    const rootRef = React.useRef<HTMLDivElement>(null);
    const modalClasses = modalStyles();
    const onClose = () => {
        config?.onClose?.();
        setConfig?.();
    };
    return (
        <Modal
            disablePortal
            disableEnforceFocus
            closeAfterTransition
            tabIndex={-1}
            open={!!config?.content}
            onClose={() => onClose()}
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={modalClasses.modal}
            BackdropProps={{ style: backdropStyle }}
            ref={rootRef}
        >
            <AnimateSharedLayout>
                <ModalContentWrapper
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {config?.content}
                    <CloseButton onClick={() => onClose()} tabIndex={0} />
                </ModalContentWrapper>
            </AnimateSharedLayout>
        </Modal>
    );
}

const ServerModal = memo(_ServerModal);

export { ServerModal };
