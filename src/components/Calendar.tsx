import React from 'react';
// import styled from 'styled-components';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

export const Calendar: React.FC = () => {
  return <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />;
};

export default Calendar;
