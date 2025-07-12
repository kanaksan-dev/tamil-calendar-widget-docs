<script setup>
import { ref, onMounted, watch } from 'vue'

const apiUrl = ref('')
const date = ref('2025-02-22')
const width = ref(400)
const height = ref()
const imagePreview = ref('')
const loading = ref(false)
const error = ref('')

// Use the proxy URL instead of direct ImageKit URL
onMounted(() => {
  // This URL points to your Vercel serverless function
  apiUrl.value = '/api/demo-calendar'
  loadPreview()
})

const loadPreview = async () => {
  loading.value = true
  error.value = ''
  imagePreview.value = ''
  
  try {
    const response = await fetch(`${apiUrl.value}?date=${date.value}`)
    if (response.ok && response.headers.get('content-type')?.includes('image')) {
      const blob = await response.blob()
      imagePreview.value = URL.createObjectURL(blob)
    } else {
      error.value = 'Failed to load calendar preview'
    }
  } catch (err) {
    error.value = 'Network error: Unable to connect to calendar service'
  } finally {
    loading.value = false
  }
}

// Watch for changes and reload preview
watch([date], loadPreview)

// Cleanup blob URLs
const cleanup = () => {
  if (imagePreview.value) {
    URL.revokeObjectURL(imagePreview.value)
  }
}

// Cleanup on unmount
onMounted(() => {
  return cleanup
})
</script>

# Interactive Demo

Try the Tamil Calendar Widget with different settings and see a live preview:

<div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin: 20px 0; background: #f9f9f9;">

## Configuration

<div style="display: grid; gap: 15px; margin: 20px 0;">

**Date:**
<input v-model="date" type="date" style="width: 200px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" @change="loadPreview" />

**Width:**
<input v-model.number="width" type="number" min="200" max="800" style="width: 100px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />

**Height (optional):**
<input v-model.number="height" type="number" min="200" max="800" style="width: 100px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Auto" />

</div>

</div>

## 🎮 Live Preview

<div style="text-align: center; margin: 30px 0; padding: 20px; border: 2px dashed #ddd; border-radius: 8px; background: #fafafa;">

<div v-if="loading" style="padding: 40px; color: #666;">
  <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #007bff; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 15px;"></div>
  <p>Loading Tamil calendar...</p>
</div>

<div v-else-if="error" style="padding: 40px; color: #dc2626;">
  <div style="font-size: 48px; margin-bottom: 15px;">⚠️</div>
  <p>{{ error }}</p>
  <button @click="loadPreview" style="margin-top: 10px; padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Retry
  </button>
</div>

<div v-else-if="imagePreview" style="display: inline-block;">
  <img 
    :src="imagePreview" 
    :style="`width: ${width}px; max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); ${height ? `height: ${height}px; object-fit: contain;` : ''}`" 
    alt="Tamil Calendar Preview" 
  />
  <p style="margin-top: 15px; color: #666; font-size: 14px;">
    📅 Tamil Calendar for {{ date }}
  </p>
</div>

</div>

## 📝 Code Example

Based on your configuration above, here's how to use the widget:

```jsx
import { TamilCalendarWidget } from '@kanaksan/tamil-calendar-widget';

function App() {
  return (
    <TamilCalendarWidget 
      apiUrl="YOUR_API_URL_HERE"
      date="{{ date }}"
      width={{ width }}{{ height ? `\n      height={${height}}` : '' }}
    />
  );
}
```

## 🚀 Getting Started

### Step 1: Install the Package
```bash
npm install @kanaksan/tamil-calendar-widget
```

### Step 2: Get API Access
📧 **Contact**: helpdesk@kanaksan.com  
🌐 **Website**: https://kanaksan.com  
📋 **Request API Access**: We'll provide you with a secure API URL

### Step 3: Use in Your App
```jsx
import { TamilCalendarWidget } from '@kanaksan/tamil-calendar-widget';

<TamilCalendarWidget 
  apiUrl="https://your-secure-api-url-here"
  date="2025-02-22"
  width={400}
/>
```

## 🎨 Advanced Examples

### With Custom Styling
```jsx
<TamilCalendarWidget 
  apiUrl="YOUR_API_URL"
  date="2025-02-22"
  width={400}
  className="my-calendar"
  style={{ 
    borderRadius: '12px', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    border: '2px solid #ff6b35'
  }}
/>
```

### With Error Handling
```jsx
<TamilCalendarWidget 
  apiUrl="YOUR_API_URL"
  date="2025-02-22"
  width={400}
  onLoad={() => console.log('Calendar loaded successfully!')}
  onError={(error) => console.error('Failed to load:', error.message)}
/>
```

### Responsive Calendar
```jsx
<TamilCalendarWidget 
  apiUrl="YOUR_API_URL"
  date="2025-02-22"
  width={Math.min(400, window.innerWidth - 40)}
  className="responsive-calendar"
/>
```

## ✨ Features Demonstrated

- 🎯 **Live Preview**: See the actual Tamil calendar image
- ⚡ **Interactive Configuration**: Change date and size in real-time  
- 🛡️ **Error Handling**: Graceful fallbacks when API is unavailable
- 📱 **Responsive Design**: Works on all screen sizes
- 🎨 **Customizable**: Easy styling with CSS classes and inline styles

::: tip API Security
The demo above uses a proxy function to hide the actual image URL. In production, you'll receive a secure API endpoint that provides authenticated access to calendar data.
:::

<style scoped>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,.25);
}

button:hover {
  background: #0056b3 !important;
}
</style>