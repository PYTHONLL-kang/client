import React from 'react';

const ResponseDisplay = ({ result }) => {

  return (
    <div>
      <p>{result.mbti}</p>
      <p>{result.probs}</p>
    </div>
  );
};

export default ResponseDisplay;
