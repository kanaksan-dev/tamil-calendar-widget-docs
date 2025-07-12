export default async function handler(req, res) {
  const { date } = req.query;
  
  const imageUrl = 'https://ik.imagekit.io/kanaksan/kanaksan/dailysheets/2022/022022/22022022.jpg';
  
  try {
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      return res.status(404).json({ 
        error: 'Calendar not found',
        message: `No calendar available for date: ${date}` 
      });
    }
    
    const imageBuffer = await response.arrayBuffer();
    
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.send(Buffer.from(imageBuffer));
    
  } catch (error) {
    console.error('Error fetching calendar:', error);
    
    res.status(500).json({ 
      error: 'Failed to fetch calendar',
      message: 'The calendar service is temporarily unavailable. Please try again later.'
    });
  }
}