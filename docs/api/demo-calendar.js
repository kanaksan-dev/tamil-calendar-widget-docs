export default async function handler(req, res) {
  const { date } = req.query;
  
  // Use environment variable or fallback
  const imageUrl = process.env.DEMO_IMAGE_URL || 
    'https://ik.imagekit.io/kanaksan/kanaksan/dailysheets/2022/022022/22022022.jpg';

  try {
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      return {
        statusCode: 404,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: 'Calendar not found'
      };
    }

    const imageBuffer = await response.arrayBuffer();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*'
      },
      body: Buffer.from(imageBuffer).toString('base64'),
      isBase64Encoded: true
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: 'Failed to fetch calendar'
    };
  }
};