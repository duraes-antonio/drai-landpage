import React, { memo } from 'react';
import styled from 'styled-components';
import Section from '../section/section';
import Image from 'next/image';
import { breakpoints, spacingPixelsX } from '../../../shared/styles/variables';
import { sections } from '../../../shared/constants/sections';

const Container = styled.div`
    display: grid;
    grid-row-gap: ${spacingPixelsX(15)};

    @media (max-width: ${breakpoints.sm}) {
        grid-row-gap: ${spacingPixelsX(8)};
    }
`;

function BodySections(): JSX.Element {
    return (
        <Container>
            {sections.map((s, index) => (
                <Section
                    style={{ direction: index % 2 === 0 ? 'revert' : 'rtl' }}
                    title={s.title}
                    description={s.description}
                    id={`section-${index + 1}`}
                    key={`section-${index + 1}`}
                >
                    <Image
                        priority={false}
                        loading={'lazy'}
                        src={s.imagePath}
                        layout="fill"
                        objectFit="contain"
                        alt={s.imageDescription}
                    />
                </Section>
            ))}
        </Container>
    );
}

export default memo(BodySections);
