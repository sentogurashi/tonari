import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Loader } from 'google-maps';
import { Module } from '@/layouts';
import { useGoogleApiKey } from '@/hooks';
import { SCREEN_TYPE, SPACING, COLORS } from '@/constants';
import { IntersectionFadeIn } from '@/animations';

export const AccessModule: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const apiKey = useGoogleApiKey();

  useEffect(() => {
    (async (): Promise<void> => {
      if (!apiKey) return;
      const loader = new Loader(apiKey);
      const google = await loader.load();
      const position = new google.maps.LatLng(35.708082, 139.648879);
      const map = new google.maps.Map(mapContainerRef.current as HTMLDivElement, {
        zoom: 16,
        center: position,
        scrollwheel: false,
        // disable UI controls
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      });
      map.setOptions({
        styles: [
          {
            stylers: [
              {
                saturation: -100,
              },
            ],
          },
        ],
      });
      const marker = new google.maps.Marker({
        position,
        map,
      });
    })();
  }, []);

  return (
    <Module title="アクセス・営業案内">
      <IntersectionFadeIn>
        <MainText>
          〒166-0002 東京都杉並区高円寺北3丁目32−16−2
          <br />
          JR中央線「高円寺」駅 徒歩5分
        </MainText>
        <MapContainer ref={mapContainerRef} />
        <List>
          <ListLabel>営業時間</ListLabel>
          <ListContent>
            15時〜25時（ラストオーダー24時）
            <br />
            ※日曜のみ9時〜25時（ラストオーダー24時）
          </ListContent>
        </List>
        <List>
          <ListLabel>定休日</ListLabel>
          <ListContent>毎週木曜日</ListContent>
        </List>
      </IntersectionFadeIn>
    </Module>
  );
};

const MapContainer = styled.div`
  width: 100%;

  &::before {
    content: '';
    display: block;
    padding-bottom: 60%;
    ${media.lessThan(SCREEN_TYPE.MEDIUM)`
      padding-bottom: 100%;
    `}
  }
`;

const baseTextStyle = css`
  margin-bottom: ${SPACING.XX_LARGE}px;
  text-align: center;
`;

const MainText = styled.p`
  ${baseTextStyle}
`;

const ListLabel = styled.dt`
  ${media.greaterThan(SCREEN_TYPE.MEDIUM)`
    display: inline-block;
    width: 200px;
  `}
  ${media.lessThan(SCREEN_TYPE.MEDIUM)`
    width: 100%;
  `}
  margin-bottom: ${SPACING.NORMAL}px;
  padding: ${SPACING.SMALL}px ${SPACING.X_LARGE}px;
  background-color: ${COLORS.UI_BASE};
  color: ${COLORS.UI_TEXT_DARK_BACKGROUND};
`;

const ListContent = styled.dd``;

const List = styled.dl`
  margin-top: ${SPACING.XX_LARGE}px;
  ${baseTextStyle}
`;

const FlexBox = styled.div`
  display: flex;
`;

export default AccessModule;
