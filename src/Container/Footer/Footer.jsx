import React, { useState } from 'react';
import { images } from '../../Constants/index';
import './Footer.scss';
import { AppWrap, MotionWrap } from '../../Wrapper/';
import { client } from '../../client';
const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [meg, setMeg] = useState('');

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    if (formData.username !== '' && formData.email !== '') {
      setLoading(true);
      setMeg('');
      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };
      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    } else {
      setMeg('Please Enter Name & Email To Send Message To Me');
    }
  };
  return (
    <>
      <h2 className='head-text'>Take a Coffee & Chat With Me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:m.hafez5594@gmail.com' className='p-text'>
            m.hafez5594@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+201012244777' className='p-text'>
            01012244777
          </a>
        </div>
      </div>
      <p className='notation'>{meg}</p>
      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='username'
              value={username}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {!loading ? `Send Message` : `Sending...`}
          </button>
        </div>
      ) : (
        <div className='head-text'>
          <h3>Thank you for Getting In Touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact');
