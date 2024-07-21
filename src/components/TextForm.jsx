import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const TextForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  // const [captchaToken, setCaptchaToken] = useState(null);
  const captchaToken = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (captchaToken) {
      onSubmit({ text, captchaToken});
    } else {
      alert('Please complete the CAPTCHA');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={4000}
        rows={10}
        cols={50}
        placeholder="Enter your text here (max 4,000 characters)"
        required
      />
      {/* <ReCAPTCHA
        sitekey="6Le2lxMqAAAAANITeyO-6AF2i-5HJhy82sJNkgP_"
        onChange={(token) => setCaptchaToken(token)}
      /> */}
      <div className='submit-wrapper'>
        <button className='submit-button' type="submit">Analyze</button>
      </div>
    </form>
  );
};

export default TextForm;
