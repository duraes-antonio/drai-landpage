import { MixedLocale, StringLocale } from 'yup/es/locale';
import { MESSAGE_FACTORY } from '../messages/message-factory';

const { required, minLength, maxLength } = MESSAGE_FACTORY;

export const PT_LOCALE = {
    mixed: {
        required: required,
    } as MixedLocale,
    string: {
        email: 'Email com formato inválido',
        min: ({ min }) => minLength(min),
        max: ({ max }) => maxLength(max),
    } as StringLocale,
};
