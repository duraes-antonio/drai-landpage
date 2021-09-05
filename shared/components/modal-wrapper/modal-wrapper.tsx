import React, { memo, useContext, useEffect, useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import { ModalContext } from '../../contexts/modal-context';
import {
    backdropStyle,
    CloseButton,
    ModalContentWrapper,
    modalStyles,
} from './styles';
import { animated, useSpring } from 'react-spring';
import { Fade } from '@material-ui/core';

function _ServerModal() {
    const { config, setConfig } = useContext(ModalContext);
    const contentRef = useRef(null);
    const [fadeIn, set] = useSpring(() => ({
        from: {
            width: '100%',
            opacity: 0,
            delay: 3600,
            height: 'auto',
        },
    }));

    useEffect(() => {
        console.log(contentRef?.current);
        set({
            from: {
                opacity: 0,
                delay: 3600,
                height: 'auto',
            },
            to: {
                delay: 3600,
                opacity: 1,
                height: 'auto',
            },
        });
    }, [config?.content, contentRef]);

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
            open={!!config?.content}
            onClose={() => onClose()}
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={modalClasses.modal}
            BackdropProps={{ style: backdropStyle }}
            ref={rootRef}
        >
            <Fade in={!!config?.content}>
                <ModalContentWrapper>
                    <animated.div style={fadeIn} ref={contentRef}>
                        {config?.content}
                    </animated.div>
                    <CloseButton onClick={() => onClose()} tabIndex={0} />
                </ModalContentWrapper>
            </Fade>
        </Modal>
    );
}

const ServerModal = memo(_ServerModal);

export { ServerModal };
