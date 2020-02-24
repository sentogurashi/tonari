import React from 'react';
// import styled from 'styled-components';
import loadable from '@loadable/component';
import { Module } from '@/layouts';

// 通常importだとgatsby build時にエラーになる
const Calendar = loadable(() => import('../components/Calendar'));

export const ScheduleModule: React.FC = () => {
  return (
    <Module title="スケジュール">
      <Calendar />
    </Module>
  );
};

export default ScheduleModule;
