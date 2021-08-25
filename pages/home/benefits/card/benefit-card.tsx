import React, { memo } from 'react';
import { Card, CardDescription, CardTitle } from './styles';
import { IconType } from 'react-icons/lib';
import { colors, spacingPixelsX } from '../../../../shared/styles/variables';

export interface BenefitCardProps {
    icon: IconType;
    title: string;
    description: string;
}

function BenefitCard(props: BenefitCardProps): JSX.Element {
    return (
        <Card>
            {props.icon({ size: spacingPixelsX(4), color: colors.primary })}
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
        </Card>
    );
}

export default memo(BenefitCard);
