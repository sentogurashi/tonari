import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import { rgba } from 'polished';
import { Twitter as TwitterIcon } from 'styled-icons/boxicons-logos';

import { BaseLayout, SEO } from '@/layouts';
import { Logo, GoogleMap, NoteIcon } from '@/components';
// import { SCREEN_TYPE } from '@/constants';

import { TeaserInfoQuery } from '@/types';

const URL_TWITTER = 'https://twitter.com/kosugiyu_tonari';
const URL_NOTE = 'https://note.com/sentogurashi';

const IndexPage: React.FC = () => {
  const teaserInfo: TeaserInfoQuery = useStaticQuery(graphql`
    query TeaserInfo {
      architectureImage: file(relativePath: { eq: "architectures.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      takeoutImage: file(relativePath: { eq: "takeout_food.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  // const mainTextsBase = teaserInfo.settingYaml?.teaserInfo?.mainTexts;

  // const mainTexts = mainTextsBase ? (mainTextsBase as MainText[]) : [];

  return (
    <BaseLayout>
      <SEO />
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      <SnsIcons>
        <SnsLink href={URL_NOTE} target="_blank" rel="noopener noreferrer">
          <NoteIcon />
        </SnsLink>
        <SnsLink href={URL_TWITTER} target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </SnsLink>
      </SnsIcons>
      <HeroImage>
        <HeroImageInner>
          <GatsbyImage
            fluid={teaserInfo?.architectureImage?.childImageSharp?.fluid as FluidObject}
          />
        </HeroImageInner>
      </HeroImage>

      <MainTextContainer>
        <NormalModule heading="小杉湯となりについて">
          <MainTextBody>
            2020年3月16日、銭湯のあるくらしをコンセプトにした、「小杉湯となり」がオープンしました。
          </MainTextBody>
          <MainTextBody>
            場所は、杉並区・高円寺にある銭湯「小杉湯」のとなり。銭湯が街のお風呂であるように、街に開かれたもう一つの家のような場所です。
          </MainTextBody>
          <MainTextBody>
            いつもより大きな風呂に入ったあとに、手づくりのご飯を食べたり、仕事をした後にくつろいだり。自分の家に大きな台所や書斎がなくても、ここに来れば、くらしの余白を感じられる場所を目指しています。
          </MainTextBody>
        </NormalModule>
        <NormalModule heading="営業時間・定休日">
          <MainTextBody>
            平日・土/日曜: 9時～<s>23時</s> 22時
            <br />
            木曜定休
            <br />
            <SmallText>
              ※まん延防止等重点措置期間中は、20時以降の食堂の営業に加え、19時以降の酒類の提供、キッチンの利用・店内での飲食を休止いたします。
              <br />
              ※緊急事態宣言期間中は、20時以降の食堂の営業とキッチンの利用・店内での飲食に加え、全時間帯で酒類の提供を休止いたします。
            </SmallText>
          </MainTextBody>
        </NormalModule>
        <NormalModule heading="席数">
          <MainTextBody>
            1F: 10席
            <br />
            2F: 10席程度
          </MainTextBody>
        </NormalModule>
        <NormalModule heading="アクセス">
          <AccessTextBody>
            〒166-0002 東京都杉並区高円寺北3丁目32−16−2
            <br />
            JR中央線「高円寺」駅 徒歩5分
          </AccessTextBody>
        </NormalModule>
      </MainTextContainer>

      <MapContainer>
        <GoogleMap />
      </MapContainer>
      <FlexContainer>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSfjxLjnxQisMgAS-sHCZKoWDC9Bk_gcqviljuTE8NkNvX94Jg/viewform"
          target="_blank"
        >
          お問い合わせ
        </Button>
      </FlexContainer>
    </BaseLayout>
  );
};

const ABSTRACT_BLACK = '#000000';
const ABSTRACT_WHITE = '#ffffff';
const SEMANTIC_MAIN = rgba(ABSTRACT_BLACK, 0.75);
const SEMANTIC_WEAKEN = rgba(ABSTRACT_BLACK, 0.55);
const BLAND_GRAY = '#343534';

const getSpacingUnit = (value: number): string => `${value * 8}px`;

const COLOR = {
  ABSTRACT_BLACK,
  ABSTRACT_WHITE,
  BLAND_GRAY,
  SEMANTIC_MAIN,
  SEMANTIC_WEAKEN,
  UI_TEXT_NORMAL: SEMANTIC_MAIN,
  UI_TEXT_WEAKEN: SEMANTIC_WEAKEN,
  UI_TEXT_WITH_DARK_BACKGROUND: ABSTRACT_WHITE,
} as const;

const LAYER = {
  BASE: 1,
  OVER: 2,
} as const;

const SCREEN_BREAK_POINT = '880px';
const CONTENT_MAX_WIDTH = '480px';

const NormalModule: React.FC<{
  heading?: string;
  body?: string;
}> = ({ heading, body, children }) => (
  <StyledModule>
    {heading && <NormalHeading>{heading}</NormalHeading>}
    {body && <MainTextBody>{body}</MainTextBody>}
    {children}
  </StyledModule>
);

const StyledModule = styled.div`
  margin-bottom: ${getSpacingUnit(5)};
  color: ${COLOR.UI_TEXT_WEAKEN};

  & a:link,
  & a:visited {
    color: ${COLOR.UI_TEXT_WEAKEN};
  }
`;

const NormalHeading = styled.h2`
  margin-bottom: ${getSpacingUnit(4)};
  color: ${COLOR.UI_TEXT_NORMAL};
  font-size: 2.4rem;
  text-align: center;
`;

const MainTextBody = styled.p`
  margin-bottom: ${getSpacingUnit(2)};
`;

const SmallText = styled.small`
  display: inline-block;
  font-size: 80%;
  line-height: 1.6;
`;

const AccessTextBody = styled.p`
  margin-bottom: ${getSpacingUnit(2)};
  color: ${COLOR.UI_TEXT_WEAKEN};
  text-align: center;
  white-space: pre-wrap;
`;

const MainTextContainer = styled.article`
  max-width: ${CONTENT_MAX_WIDTH};
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
  z-index: ${LAYER.BASE};
  overflow: hidden;
`;

const HeroImageInner = styled.div`
  max-width: 670px;
  margin: 0 auto;
  padding: ${getSpacingUnit(10)} 0;
  ${media.lessThan(SCREEN_BREAK_POINT)`
    position: relative;
    margin-top: 200px;
    margin-left: 0;
    margin-right: 0;
    width: 500px;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

const HeaderLogo = styled.h1`
  position: absolute;
  z-index: ${LAYER.OVER};
  top: 36px;
  left: 36px;
  width: 120px;
  height: 142px;
  ${media.lessThan(SCREEN_BREAK_POINT)`
    top: ${getSpacingUnit(10)};
    left: 50%;
    transform: translateX(-50%);
  `}
`;

const SnsIcons = styled.h1`
  display: flex;
  position: absolute;
  z-index: ${LAYER.OVER};
  top: 16px;
  right: 16px;
  width: auto;
  height: 32px;
`;

const SnsLink = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 20px;
  transition: opacity 0.5s ease;
  opacity: 1;

  &:link,
  &:visited {
    color: ${COLOR.BLAND_GRAY};
  }

  &:hover {
    opacity: 0.8;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const MapContainer = styled.section`
  margin-bottom: ${getSpacingUnit(6)};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default IndexPage;
