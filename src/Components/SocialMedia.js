import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/mohamed-hafez-b41676181/' target='_blank'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://twitter.com/MoHafez_' target='_blank'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href='' target='_blank'>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/Mhafez90/' target='_blank'>
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;