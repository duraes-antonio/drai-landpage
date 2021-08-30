import { InputHTMLAttributes } from 'react';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface InputTextComponent extends NativeInputProps {
    color: string;
    error?: boolean;
}
