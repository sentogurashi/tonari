import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import { rgba } from 'polished';

import { BaseLayout, SEO } from '@/layouts';
import { Logo } from '@/components';
import { SCREEN_TYPE } from '@/constants';

import { TeaserInfoQuery } from '@/types';

const IndexPage: React.FC = () => {
  const teaserInfo: TeaserInfoQuery = useStaticQuery(graphql`
    query TeaserInfo {
      settingYaml {
        teaserInfo {
          mainTexts {
            heading
            body
          }
        }
      }
      architectureImage: file(relativePath: { eq: "architectures.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const mainTextsBase = teaserInfo.settingYaml?.teaserInfo?.mainTexts;

  const mainTexts = mainTextsBase ? (mainTextsBase as MainText[]) : [];

  return (
    <BaseLayout>
      <SEO title="トップ" />
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      <HeroImage>
        <HeroImageInner>
          <GatsbyImage
            fluid={teaserInfo?.architectureImage?.childImageSharp?.fluid as FluidObject}
          />
        </HeroImageInner>
      </HeroImage>
      <MainHeading>「小杉湯となり」プレオープンのお知らせ</MainHeading>
      <MainTextContainer>
        {mainTexts.map(
          ({ heading, body }): JSX.Element => (
            <MainText key={heading} heading={heading} body={body} />
          ),
        )}
      </MainTextContainer>
      <FlexContainer>
        <Button href="#">お問い合わせ</Button>
      </FlexContainer>
    </BaseLayout>
  );
};

type MainText = {
  heading: string;
  body: string;
};

const MainText: React.FC<MainText> = ({ heading, body }) => (
  <StyledMainText>
    <MainTextHeading>{heading}</MainTextHeading>
    <MainTextBody>{body}</MainTextBody>
  </StyledMainText>
);

const ABSTRACT_BLACK = '#000000';
const ABSTRACT_WHITE = '#ffffff';
const SEMANTIC_MAIN = rgba(ABSTRACT_BLACK, 0.75);
const SEMANTIC_WEAKEN = rgba(ABSTRACT_BLACK, 0.55);

const getSpacingUnit = (value: number): string => `${value * 8}px`;

const COLOR = {
  ABSTRACT_BLACK,
  ABSTRACT_WHITE,
  SEMANTIC_MAIN,
  SEMANTIC_WEAKEN,
  UI_TEXT_NORMAL: SEMANTIC_MAIN,
  UI_TEXT_WEAKEN: SEMANTIC_WEAKEN,
  UI_TEXT_WITH_DARK_BACKGROUND: ABSTRACT_WHITE,
};

const StyledMainText = styled.div`
  margin-bottom: ${getSpacingUnit(7)};
`;

const MainHeading = styled.div`
  margin-bottom: ${getSpacingUnit(4)};
  color: ${COLOR.UI_TEXT_NORMAL};
  font-size: 3rem;
  text-align: center;
`;

const MainTextHeading = styled.h2`
  margin-bottom: ${getSpacingUnit(4)};
  color: ${COLOR.UI_TEXT_NORMAL};
  font-size: 2.4rem;
  text-align: center;
`;

const MainTextBody = styled.p`
  color: ${COLOR.UI_TEXT_WEAKEN};
  white-space: pre-wrap;
`;

const MainTextContainer = styled.article`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 ${getSpacingUnit(2)};
`;

const Button = styled.a`
  display: block;
  width: 240px;
  padding: ${getSpacingUnit(1)};
  transition: 0.5s ease;
  border: solid 2px ${COLOR.SEMANTIC_WEAKEN};
  color: ${COLOR.UI_TEXT_NORMAL};
  font-weight: bold;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${COLOR.SEMANTIC_MAIN};
    color: ${COLOR.UI_TEXT_WITH_DARK_BACKGROUND};
  }
`;

const HeroImage = styled.div`
  position: relative;
  overflow: hidden;
`;

const HeroImageInner = styled.div`
  padding: ${getSpacingUnit(10)} 0;
  ${media.greaterThan(SCREEN_TYPE.MEDIUM)`
    margin: 0 auto;
    max-width: 670px;
  `}
  ${media.lessThan(SCREEN_TYPE.MEDIUM)`
    position: relative;
    margin-top: 200px;
    width: 500px;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

const HeaderLogo = styled.h1`
  position: absolute;
  top: 36px;
  left: 36px;
  width: 120px;
  height: 142px;
  ${media.lessThan(SCREEN_TYPE.MEDIUM)`
    top: ${getSpacingUnit(10)};
    left: 50%;
    transform: translateX(-50%);
  `}
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default IndexPage;
