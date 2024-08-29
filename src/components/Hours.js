import React, { useState, useEffect } from 'react';

const Hours = () => {
  const [status, setStatus] = useState('');
  const [dayName, setDayName] = useState('');

  useEffect(() => {
    const updateHours = () => {
      const now = new Date();
      const day = now.getDay(); // 0 (Sunday) to 6 (Saturday)
      const hour = now.getHours();
      let currentDay = '';
      let open = false;

      switch (day) {
        case 0: // Sunday
          currentDay = 'Sunday';
          open = hour >= 9 && hour < 20;
          break;
        case 6: // Saturday
          currentDay = 'Saturday';
          open = hour >= 9 && hour < 20;
          break;
        case 1: // Monday
          currentDay = 'Monday';
          open = hour >= 10 && hour < 16;
          break;
        case 2: // Tuesday
          currentDay = 'Tuesday';
          open = hour >= 10 && hour < 16;
          break;
        case 3: // Wednesday
          currentDay = 'Wednesday';
          open = hour >= 10 && hour < 16;
          break;
        case 4: // Thursday
          currentDay = 'Thursday';
          open = hour >= 10 && hour < 16;
          break;
        case 5: // Friday
          currentDay = 'Friday';
          open = hour >= 10 && hour < 16;
          break;
        default:
          currentDay = '';
      }

      setDayName(currentDay);

      if (open) {
        setStatus('OPEN');
      } else if ((day >= 1 && day <= 5) || day === 6 || day === 0) {
        setStatus('10 a.m. to 4 p.m.');
      } else {
        setStatus('CLOSED');
      }
    };

    updateHours();
    const timer = setInterval(updateHours, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Shelter Hours</h1>
      <h2>{dayName}</h2>
      <p>{status}</p>
    </div>
  );
};

export default Hours;
