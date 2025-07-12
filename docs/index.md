---
layout: home
title: Tamil Calendar Widget - React Component Documentation
titleTemplate: :title

hero:
  name: Tamil Calendar Widget
  text: Beautiful React Component
  tagline: Display Tamil daily calendar sheets with ease
  image:
    src: /22022022.jpg
    alt: Tamil Calendar Widget
  actions:
    - theme: brand
      text: Get Started
      link: /guide/installation
    - theme: alt
      text: View Demo
      link: /demo

features:
  - icon: 🚀
    title: Easy Integration
    details: Simple one-line installation and usage in any React app
  - icon: ⚡
    title: Smart Caching
    details: Automatic image caching for better performance
  - icon: 🛡️
    title: Error Handling
    details: Comprehensive error states with meaningful messages
  - icon: 📱
    title: Responsive
    details: Works perfectly on all screen sizes
  - icon: 🎨
    title: Customizable
    details: Easy styling with CSS classes and inline styles
  - icon: 📦
    title: TypeScript
    details: Full TypeScript support with detailed type definitions
---

## Quick Example

```jsx
import { TamilCalendarWidget } from '@kanaksan/tamil-calendar-widget';

function App() {
  return (
    <TamilCalendarWidget 
      apiUrl="https://api.kanaksan.com/calendar?token=your_token"
      date="2025-02-22"
      width={400}
    />
  );
}
```

## Get API Access

To use this widget, you need access to our Tamil Calendar API:

📧 **Contact**: contact@kanaksan.com  
🌐 **Website**: https://kanaksan.com  
📋 **Request Access**: [API Access Form](https://kanaksan.com/api-access)

# ===================================
# docs/guide/installation.md
# Installation

## Prerequisites

- React 16.8+ or 17+ or 18+
- Node.js 14+
- npm or yarn

## Install the Package

::: code-group

```bash [npm]
npm install @yourname/tamil-calendar-widget
```

```bash [yarn]
yarn add @yourname/tamil-calendar-widget
```

```bash [pnpm]
pnpm add @yourname/tamil-calendar-widget
```

:::

## Import in Your Project

```jsx
import { TamilCalendarWidget } from '@yourname/tamil-calendar-widget';
```

## Get API Access

Before you can use the widget, you need API access:

1. **Contact us** at contact@kanaksan.com
2. **Provide your use case** and expected usage
3. **Receive your API URL** with authentication token
4. **Start using the widget**

::: tip
We offer different API tiers:
- **Free**: 100 requests/day
- **Pro**: 1000 requests/day + historical data
- **Enterprise**: Unlimited + custom features
:::

# ===================================
# docs/guide/quick-start.md
# Quick Start

## Basic Usage

Once you have your API URL, using the Tamil Calendar Widget is simple:

```jsx
import React from 'react';
import { TamilCalendarWidget } from '@yourname/tamil-calendar-widget';

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
import { TamilCalendarWidget } from '@yourname/tamil-calendar-widget';

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
import { TamilCalendarWidget } from '@yourname/tamil-calendar-widget';

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