import React, { CSSProperties, HTMLAttributes } from 'react';
import { Container, Description, ImageWrapper, Texts, Title } from './styles';

export interface SectionProps extends HTMLAttributes<HTMLTableSectionElement> {
    title: string;
    description: string;
    children: JSX.Element;
    style?: CSSProperties;
}

function Section(props: SectionProps): JSX.Element {
    return (
        <Container {...props} style={props.style}>
            <Texts>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </Texts>
            <ImageWrapper>{props.children}</ImageWrapper>
        </Container>
    );
}

export default Section;
