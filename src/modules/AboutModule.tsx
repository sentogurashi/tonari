import React from 'react';
import styled from 'styled-components';
import { Module } from '@/layouts';
import { SPACING, TYPOGRAPHY } from '@/constants';

export const AboutModule: React.FC = () => {
  return (
    <Module title="私たちについて">
      <Paragraph>小杉湯となりを企画＋運営するのは「銭湯ぐらし」という会社。</Paragraph>
      <Paragraph>
        元々小杉湯の隣に、解体前の風呂なしアパートがあり、小杉湯三代目平松氏が活用方法を検討していた。
        <br />
        当時常連で、空き家活用が専門だった銭湯ぐらし代表の加藤との出会いからプロジェクトがスタート。
      </Paragraph>
      <Paragraph>
        様々な職種のメンバーを集め、解体までの期間、共に暮らしながら、
        <br />
        それぞれ自分の得意な分野と銭湯を組み合わせて、銭湯の魅力を伝える活動を展開。
      </Paragraph>
      <Paragraph>
        メンバーは、1年間毎日銭湯に入る生活から「銭湯のあるくらし」の豊かさを実感し、
        <br />
        もっと多くの人にこのくらしを伝えたいと「銭湯ぐらし」を法人化。
      </Paragraph>
      <Paragraph>
        アパートの跡地に銭湯のあるくらしを体験できる場所「小杉湯となり」を企画。
      </Paragraph>
      <Paragraph>
        建主が小杉湯、事業主体が銭湯ぐらしという座組で、運営を行うことになった。
      </Paragraph>
    </Module>
  );
};

const Paragraph = styled.p`
  margin: ${SPACING.XX_LARGE}px 0;
  font-size: ${TYPOGRAPHY.TEXT_SIZE.SMALL}rem;
  line-height: ${TYPOGRAPHY.LINE_HEIGHT.THICK};
  text-align: center;
`;

export default AboutModule;
