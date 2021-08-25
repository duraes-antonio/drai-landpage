import React, { HTMLAttributes, memo } from 'react';
import {
    FooterColumn,
    FooterColumnTitle,
    FooterContainer,
    FooterLink,
    FooterLinks,
} from './styles';

type LinkColumn = {
    title: string;
    links: {
        title: string;
        url?: string;
    }[];
};

const columns: LinkColumn[] = [
    {
        title: 'Por que nós?',
        links: [
            { title: 'Preço' },
            { title: 'Melhoria contínua' },
            { title: 'Inovação' },
        ],
    },
    {
        title: 'Benefícios',
        links: [
            { title: 'Praticidade' },
            { title: 'Mobilidade' },
            { title: 'Interface intuitiva' },
            { title: 'Diversidade de dados' },
            { title: 'Suíte de funcionalidades' },
            { title: 'Segurança' },
        ],
    },
    {
        title: 'Recursos',
        links: [
            { title: 'Classificação' },
            { title: 'Segmentação' },
            { title: 'Relatórios' },
        ],
    },
    {
        title: 'Suporte',
        links: [
            { title: 'Documentação' },
            { title: 'Contante a equipe de vendas' },
            { title: 'Contate o suporte' },
        ],
    },
];

function Footer(props: HTMLAttributes<HTMLElement>): JSX.Element {
    return (
        <FooterContainer {...props}>
            {columns.map((c) => (
                <FooterColumn key={c.title}>
                    <FooterColumnTitle>{c.title}</FooterColumnTitle>
                    <FooterLinks>
                        {c.links.map((l) => (
                            <FooterLink key={l.title}>{l.title}</FooterLink>
                        ))}
                    </FooterLinks>
                </FooterColumn>
            ))}
        </FooterContainer>
    );
}

export default memo(Footer);
