import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../Constants/index';
import { AppWrap } from '../../Wrapper'; 
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Header = () => {
  return (
    <div  className='app_header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'>
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h2 className='head-text'>Mohamed Hafez</h2>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Frontend Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className='app__header-img'>
        <img src={images.profile} alt='profile-bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-cirlces'>
        {[
          images.html,
          images.css,
          images.javascript,
          images.typescript,
          images.sass,
          images.bootstrap,
          images.react,
          images.redux,
        ].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header,'home');
