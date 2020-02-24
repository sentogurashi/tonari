import React from 'react';
// import styled from 'styled-components';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import { useGoogleApiKey } from '@/hooks';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

export const Calendar: React.FC = () => {
  const googleApiKey = useGoogleApiKey() || '';
  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={googleApiKey}
      events={{
        googleCalendarId: 'japanese__ja@holiday.calendar.google.com',
      }}
    />
  );
};

export default Calendar;
