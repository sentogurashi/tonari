import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import { rgba } from 'polished';
import { Twitter } from 'styled-icons/boxicons-logos';

import { BaseLayout, SEO } from '@/layouts';
import { Logo, GoogleMap } from '@/components';
// import { SCREEN_TYPE } from '@/constants';

import { TeaserInfoQuery } from '@/types';

const URL_TWITTER = 'https://twitter.com/kosugiyu_tonari';

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
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const mainTextsBase = teaserInfo.settingYaml?.teaserInfo?.mainTexts;

  const mainTexts = mainTextsBase ? (mainTextsBase as MainText[]) : [];

  return (
    <BaseLayout>
      <SEO />
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      <SnsIcons>
        <SnsLink href={URL_TWITTER} target="_blank" rel="noopener noreferrer">
          <Twitter />
        </SnsLink>
      </SnsIcons>
      <HeroImage>
        <HeroImageInner>
          <GatsbyImage
            fluid={teaserInfo?.architectureImage?.childImageSharp?.fluid as FluidObject}
          />
        </HeroImageInner>
      </HeroImage>
      <Notice>
        <NoticeHeader>緊急事態宣言発令中の営業について</NoticeHeader>
        <p>
          新型コロナウイルス感染拡大にともなう緊急事態宣言の発令を受け、当面の間、テイクアウト販売のみの営業とさせていただきます。
          <br />
          今後の営業につきましては、随時
          <a href={URL_TWITTER} target="_blank" rel="noopener noreferrer">
            公式Twitter
          </a>
          などでお知らせいたします。
        </p>
      </Notice>
      {/* <MainHeading>
        「小杉湯となり」
        <br />
        プレオープンのお知らせ
      </MainHeading> */}
      <MainTextContainer>
        {mainTexts.map(
          ({ heading, body }): JSX.Element => (
            <NormalModule key={heading} heading={heading} body={body} />
          ),
        )}
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
};

const LAYER = {
  BASE: 1,
  OVER: 2,
};

const SCREEN_BREAK_POINT = '880px';
const CONTENT_MAX_WIDTH = '480px';

type MainText = {
  heading?: string;
  body?: string;
};

type NormalModuleProps = MainText;

const NormalModule: React.FC<NormalModuleProps> = ({ heading, body, children }) => (
  <StyledNormalModule>
    {heading && <NormalHeading>{heading}</NormalHeading>}
    {body && <MainTextBody>{body}</MainTextBody>}
    {children}
  </StyledNormalModule>
);

const Notice = styled.article`
  max-width: ${CONTENT_MAX_WIDTH};
  margin: 0 auto 56px;
  padding: 16px;
  color: #de1b1b;

  & a {
    &:link,
    &:visited {
      color: #de1b1b;
    }
  }
`;

const NoticeHeader = styled.h2`
  margin-bottom: 16px;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

// const NoticeList = styled.ul`
//   margin: 8px 0;
//   text-align: center;
// `;

// const NoticeListItem = styled.li`
//   &::before {
//     content: '・';
//   }
// `;

const StyledNormalModule = styled.div`
  margin-bottom: ${getSpacingUnit(7)};
`;

// const MainHeading = styled.div`
//   margin-bottom: ${getSpacingUnit(4)};
//   color: ${COLOR.UI_TEXT_NORMAL};
//   font-size: 3rem;
//   text-align: center;
//   ${media.greaterThan(SCREEN_BREAK_POINT)`
//     & br {
//       display: none;
//     }
//   `}
// `;

const NormalHeading = styled.h2`
  margin-bottom: ${getSpacingUnit(4)};
  color: ${COLOR.UI_TEXT_NORMAL};
  font-size: 2.4rem;
  text-align: center;
`;

const MainTextBody = styled.p`
  color: ${COLOR.UI_TEXT_WEAKEN};
  white-space: pre-wrap;
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
  position: absolute;
  z-index: ${LAYER.OVER};
  top: 16px;
  right: 16px;
  width: auto;
  height: 40px;
`;

const SnsLink = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  transition: opacity 0.5s ease;
  opacity: 1;

  &:link,
  &:visited {
    color: ${COLOR.BLAND_GRAY};
  }

  &:hover {
    opacity: 0.8;
  }

  ${media.lessThan(SCREEN_BREAK_POINT)`
    width: 32px;
    height: 32px;
  `}
`;

const MapContainer = styled.section`
  margin-bottom: ${getSpacingUnit(6)};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default IndexPage;
