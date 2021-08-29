import React, { createContext, ReactElement, ReactNode, useState } from 'react';

export type ModalConfig = {
    content?: ReactElement | ReactNode;
    onClose?: () => void;
};

export type ModalState = {
    config?: ModalConfig | null;
    setConfig: (c?: ModalConfig) => void;
};

const ModalContext = createContext<Partial<ModalState>>({});

function ModalProvider(props: { children: ReactNode }) {
    const [config, setConfig] = useState<ModalConfig | null | undefined>(null);
    return (
        <ModalContext.Provider value={{ config, setConfig }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export { ModalProvider, ModalContext };
