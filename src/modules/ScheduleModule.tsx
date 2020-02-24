import React from 'react';
import styled from 'styled-components';
import { Module } from '@/layouts';

export const ScheduleModule: React.FC = () => {
  return (
    <Module title="スケジュール">
      <CalenderContainer>
        <Calender
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23009688&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showNav=1&amp;showTz=0&amp;showCalendars=0&amp;showDate=1"
          frameBorder="0"
          scrolling="no"
        />
      </CalenderContainer>
    </Module>
  );
};

const CalenderContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: 60%;
  }
`;

const Calender = styled.iframe`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export default ScheduleModule;
