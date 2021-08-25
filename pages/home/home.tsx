import React, { memo } from 'react';
import styled from 'styled-components';
import BodySections from './body/body-sections';
import BenefitList from './benefits/list/benefit-list';
import { flexCenter } from '../../shared/styles/placeholders';
import { spacingPixelsX } from '../../shared/styles/variables';
import { Divider } from '@material-ui/core';
import { theme } from '../../shared/styles/themes';

const Main = styled.main`
    ${flexCenter};
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    height: 100%;
    grid-row-gap: ${spacingPixelsX(10)};
`;

export function HomePage(): JSX.Element {
    return (
        <Main>
            <BodySections />
            <Divider
                color={theme.palette.secondary.main}
                variant="middle"
                style={{ width: '100%' }}
            />
            <BenefitList />
        </Main>
    );
}

export default memo(HomePage);
