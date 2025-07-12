# Quick Start

## Basic Usage

Once you have your API URL, using the Tamil Calendar Widget is simple:

```jsx
import React from 'react';
import { TamilCalendarWidget } from '@kanaksan/tamil-calendar-widget';

function App() {
  return (
    <div>
      <h1>My Tamil Calendar App</h1>
      <TamilCalendarWidget 
        apiUrl="https://api.kanaksan.com/calendar?token=your_token"
        date="2025-07-12"
        width={400}
      />
    </div>
  );
}

export default App;
```

## With Error Handling

```jsx
import React from 'react';
import { TamilCalendarWidget } from '@kanaksan/tamil-calendar-widget';

function App() {
  const handleLoad = () => {
    console.log('Calendar loaded successfully!');
  };

  const handleError = (error) => {
    console.error('Failed to load calendar:', error.message);
  };

  return (
    <TamilCalendarWidget 
      apiUrl="https://api.kanaksan.com/calendar?token=your_token"
      date="2025-07-12"
      width={400}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}
```

## Dynamic Date

```jsx
import React, { useState } from 'react';
import { TamilCalendarWidget } from '@kanaksan/tamil-calendar-widget';

function CalendarApp() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      
      <TamilCalendarWidget 
        apiUrl="https://api.kanaksan.com/calendar?token=your_token"
        date={selectedDate}
        width={400}
      />
    </div>
  );
}
```