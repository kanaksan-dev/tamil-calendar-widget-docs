# Quick Start

Now that you've installed the **Tamil Calendar Widget**, let’s walk through how to use it in a real React project.

---

## ✅ Basic Usage

```jsx
import React from 'react';
import { TamilCalendarWidget } from '@kanaksan/tamil-calendar-widget';

function App() {
  return (
    <TamilCalendarWidget
      apiUrl="https://api.kanaksan.com/calendar?token=your_token"
      date="2025-07-12"
      width={400}
    />
  );
}
