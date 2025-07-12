# docs/api/props.md
# Props Reference

## TamilCalendarWidgetProps

### Required Props

#### `apiUrl`
- **Type**: `string`
- **Required**: ✅
- **Description**: Complete API URL with authentication token

```jsx
<TamilCalendarWidget 
  apiUrl="https://api.kanaksan.com/calendar?token=abc123"
  // ... other props
/>
```

#### `date`
- **Type**: `string`
- **Required**: ✅
- **Format**: `YYYY-MM-DD`
- **Description**: Date for the calendar sheet

```jsx
<TamilCalendarWidget 
  date="2025-07-12"
  // ... other props
/>
```

### Optional Props

#### `width`
- **Type**: `number`
- **Default**: `400`
- **Description**: Image width in pixels

#### `height`
- **Type**: `number`
- **Default**: `undefined` (auto)
- **Description**: Image height in pixels

#### `alt`
- **Type**: `string`
- **Default**: `"Tamil Daily Calendar"`
- **Description**: Alt text for accessibility

#### `className`
- **Type**: `string`
- **Default**: `""`
- **Description**: Additional CSS class name

#### `style`
- **Type**: `React.CSSProperties`
- **Default**: `{}`
- **Description**: Inline styles for the container

### Callback Props

#### `onLoad`
- **Type**: `() => void`
- **Description**: Called when image loads successfully

#### `onError`
- **Type**: `(error: Error) => void`
- **Description**: Called when an error occurs

### Customization Props

#### `showLoader`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Show loading indicator while fetching

#### `loaderComponent`
- **Type**: `React.ReactNode`
- **Description**: Custom loading component

#### `errorComponent`
- **Type**: `React.ReactNode`
- **Description**: Custom error component

## Complete Example

```jsx
<TamilCalendarWidget 
  apiUrl="https://api.kanaksan.com/calendar?token=abc123"
  date="2025-07-12"
  width={500}
  height={700}
  alt="Tamil Calendar for July 12, 2025"
  className="my-calendar"
  style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
  onLoad={() => console.log('Loaded!')}
  onError={(error) => console.error('Error:', error)}
  showLoader={true}
  loaderComponent={<div>Loading Tamil calendar...</div>}
  errorComponent={<div>Failed to load calendar</div>}
/>
```