import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Wait = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`http://localhost:3001/check/${id}`);
        const data = await response.json();
        console.log(data)
        if (data.status === 'completed') {
          clearInterval(interval);
          navigate('/result', { state: { result: data.result } });
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }, 1000); // 1초마다 체크

    return () => clearInterval(interval);
  }, [id, navigate]);

  return (
    <div className='home'>
        <div className='loader-wrapper'>
            <div className="loader"></div>
            <div className="loading-text">Analyzing...</div>
        </div>
    </div>
  );
};

export default Wait;
