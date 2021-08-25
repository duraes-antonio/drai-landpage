import React, { memo } from 'react';
import BenefitCard, { BenefitCardProps } from '../card/benefit-card';
import { FaHistory, FaLaptopMedical, FaRegEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import {
    colors,
    fontDefault,
    spacingPixelsX,
} from '../../../../shared/styles/variables';

export const benefits: BenefitCardProps[] = [
    {
        title: 'Suíte poderosa',
        description:
            'Investigue comorbidades em diversos órgãos sem precisar de licensa de dezenas de plataformas',
        icon: FaLaptopMedical,
    },
    {
        title: 'Mobilidade',
        description:
            'Receba um email com os resultados sempre que o processamento de uma imagem for finalizado',
        icon: FaRegEnvelope,
    },
    {
        title: 'Controle',
        description:
            'Acesse o histórico completo com os resultados de todas análises realizadas anteriormente',
        icon: FaHistory,
    },
];

const Container = styled.section`
    display: grid;
    grid-row-gap: ${spacingPixelsX(4)};
    place-items: center;
    width: 100%;
`;

const Title = styled.h2`
    margin: 0;
    color: ${colors.grey};
    font: 600 ${spacingPixelsX(4)} ${fontDefault};
`;

const ListContainer = styled.section`
    gap: ${spacingPixelsX(5)};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 100%;
`;

function BenefitList(): JSX.Element {
    return (
        <Container>
            <Title>Mais benefícios</Title>
            <ListContainer>
                {benefits.map((b) => (
                    <BenefitCard {...b} key={b.title} />
                ))}
            </ListContainer>
        </Container>
    );
}

export default memo(BenefitList);
