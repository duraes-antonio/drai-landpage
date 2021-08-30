function minLength(n: number): string {
    return `Deve ter no mínimo ${n} caracteres`;
}

function maxLength(n: number): string {
    return `Deve ter no máximo ${n} caracteres`;
}

function atMostNDigit(n: number): string {
    return `Deve conter ao menos ${n} dígitos`;
}

function atMostNUppercase(n: number): string {
    return `Deve conter ao menos ${n} letras maiúsculas`;
}

function required(): string {
    return `O campo é obrigatório`;
}

export const MESSAGE_FACTORY = {
    minLength,
    maxLength,
    required,
    atMostNDigit,
    atMostNUppercase,
};
