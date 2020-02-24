import React from 'react';
// import styled from 'styled-components';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import { Module } from '@/layouts';

export const ScheduleModule: React.FC = () => {
  return (
    <Module title="スケジュール">
      <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
    </Module>
  );
};

export default ScheduleModule;
