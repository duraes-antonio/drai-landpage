import React, { memo } from 'react';
import { InputTextComponent } from '../../../types/input-text';
import { FieldProps } from 'formik';
import { InputText } from '../input-text/input-text';
import { colors } from '../../../styles/variables';
import { InputContainer, InputErrorHint, InputLabel } from './styles';

export interface InputTextFormikProps
    extends FieldProps,
        Omit<InputTextComponent, 'form' | 'error'> {}

function _InputTextAdapter(props: InputTextFormikProps): JSX.Element {
    const { field, form, ...restProps } = props;
    const error = !!(form.errors[field.name] && form.touched[field.name]);
    const color = error ? colors.red60 : props.color ?? '#1E90FF';

    return (
        <InputContainer>
            <InputLabel error={error} htmlFor={props.id}>
                {field.name}
            </InputLabel>
            <InputText {...field} {...restProps} color={color} error={error} />
            <InputErrorHint
                htmlFor={props.id}
                style={{ opacity: error ? 1 : 0 }}
            >
                {form.errors[field.name] ?? ''}
            </InputErrorHint>
        </InputContainer>
    );
}

export const InputTextFormik = memo(_InputTextAdapter);
