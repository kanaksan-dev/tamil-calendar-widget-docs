# docs/demo.md
# Live Demo

<script setup>
import { ref } from 'vue'

const apiUrl = ref('https://api.kanaksan.com/calendar?token=demo')
const date = ref('2025-07-12')
const width = ref(400)
</script>

# Interactive Demo

Try the Tamil Calendar Widget with different settings:

<div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin: 20px 0;">

**Configuration:**

API URL: <input v-model="apiUrl" style="width: 100%; margin: 5px 0; padding: 8px;" />

Date: <input v-model="date" type="date" style="width: 200px; margin: 5px 0; padding: 8px;" />

Width: <input v-model.number="width" type="number" min="200" max="800" style="width: 100px; margin: 5px 0; padding: 8px;" />

</div>

## Result:

```jsx
<TamilCalendarWidget 
  apiUrl="{{ apiUrl }}"
  date="{{ date }}"
  width={{ width }}
/>
```

::: warning Demo Notice
This demo shows the component structure. For a working demo, you need:
1. A valid API URL from kanaksan.com
2. Proper CORS configuration on the API
3. A React environment
:::

## Code Examples

### Basic Usage
```jsx
import { TamilCalendarWidget } from '@yourname/tamil-calendar-widget';

<TamilCalendarWidget 
  apiUrl="https://api.kanaksan.com/calendar?token=your_token"
  date="2025-07-12"
  width={400}
/>
```

### With Custom Styling
```jsx
<TamilCalendarWidget 
  apiUrl="https://api.kanaksan.com/calendar?token=your_token"
  date="2025-07-12"
  width={400}
  className="my-calendar"
  style={{ 
    borderRadius: '12px', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
  }}
/>
```

### With Error Handling
```jsx
<TamilCalendarWidget 
  apiUrl="https://api.kanaksan.com/calendar?token=your_token"
  date="2025-07-12"
  width={400}
  onLoad={() => console.log('Calendar loaded!')}
  onError={(error) => alert('Error: ' + error.message)}
/>
```
