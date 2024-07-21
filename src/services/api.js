import axios from 'axios';

export const submitText = ({ text, captchaToken }) => {
  return axios.post('http://localhost:3001/submit', { text, captchaToken });
};
