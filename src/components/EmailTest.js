import React, { useState } from 'react';

const EmailTest = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const testEmailFunctionality = async () => {
    setIsTesting(true);
    setTestResult(null);
    
    try {
      const response = await fetch('http://localhost:3001/health');
      
      if (response.ok) {
        const data = await response.json();
        setTestResult({
          success: true,
          message: 'Server is running and accessible!',
          details: data
        });
      } else {
        setTestResult({
          success: false,
          message: 'Server is not accessible. Please make sure the server is running.',
          details: await response.text()
        });
      }
    } catch (error) {
      setTestResult({
        success: false,
        message: 'Failed to connect to server. Please make sure the server is running.',
        details: error.message
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div style={{
      padding: '2rem',
      margin: '2rem 0',
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6',
      borderRadius: '0.5rem',
      textAlign: 'center'
    }}>
      <h3>Email Functionality Test</h3>
      <p>Click the button below to test if the email server is running and accessible.</p>
      
      <button 
        onClick={testEmailFunctionality}
        disabled={isTesting}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: isTesting ? 'not-allowed' : 'pointer',
          opacity: isTesting ? 0.6 : 1
        }}
      >
        {isTesting ? 'Testing...' : 'Test Email Server'}
      </button>
      
      {testResult && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          borderRadius: '0.25rem',
          backgroundColor: testResult.success ? '#d4edda' : '#f8d7da',
          border: `1px solid ${testResult.success ? '#c3e6cb' : '#f5c6cb'}`,
          color: testResult.success ? '#155724' : '#721c24'
        }}>
          <h4>{testResult.message}</h4>
          {testResult.details && (
            <pre style={{
              textAlign: 'left',
              fontSize: '0.8rem',
              marginTop: '0.5rem',
              padding: '0.5rem',
              backgroundColor: 'rgba(0,0,0,0.05)',
              borderRadius: '0.25rem',
              overflow: 'auto'
            }}>
              {JSON.stringify(testResult.details, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailTest;