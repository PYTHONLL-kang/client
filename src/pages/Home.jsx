import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextForm from '../components/TextForm';
import { submitText } from '../services/api';

const Home = () => {
  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async ({ text, captchaToken }) => {
    try {
      const response = await submitText({ text, captchaToken });
      const result = response.data
      console.log(result)
      const id = result.id
      navigate('/wait', { state: { id } });
    } catch (error) {
      console.error('Error submitting text:', error);
      setResponse('Failed to submit text. Please try again.');
    }
  };

  return (
    <div className='home'>
      {/* <h1>Analyze your <span className='highlight' style={{color: '#ffa500'}}>MBTI</span> with Writing.</h1> */}
      <h1>Analyze your <span style={{color: "#ffa500"}}>MBTI</span> with Writing.</h1>
        <TextForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
