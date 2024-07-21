import React from 'react';
import { useLocation } from 'react-router-dom';
import ResponseDisplay from '../components/ResponseDisplay';
import ResultCharacter from '../components/ResultCharacter';

import '../App.css'

const Result = () => {
  const location = useLocation();
  const { result } = location.state;

  return (
    <div id='result'>
      <div>
        <h1 style={{ marginLeft: "30px" }}>Result</h1>
      </div>
      <div className='result-content'>
        <div className='result-text'>
          {result ? <ResponseDisplay result={result} /> : null}
        </div>
        <div className='result-image'>
          <ResultCharacter />
        </div>
      </div>
    </div>
    
  );
};

export default Result;
