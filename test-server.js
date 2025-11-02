// Simple test script to verify server functionality
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testServer() {
  console.log('🧪 Testing server functionality...');
  
  try {
    // Test health endpoint
    console.log('🔍 Testing health endpoint...');
    const healthResponse = await fetch('http://localhost:3001/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test email endpoint with sample data
    console.log('📧 Testing email endpoint...');
    const emailResponse = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        subject: 'Test Message',
        message: 'This is a test message from the server test script.'
      }),
    });
    
    const emailData = await emailResponse.json();
    console.log('📨 Email test response:', emailData);
    
    if (emailData.success) {
      console.log('✅ Email endpoint working correctly');
    } else {
      console.log('❌ Email endpoint returned an error:', emailData.message);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('💡 Make sure the server is running with `npm run server`');
  }
}

testServer();