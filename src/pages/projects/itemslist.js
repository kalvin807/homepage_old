import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default [{
  name: 'cbc_page',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        CBC's homepage
      </div>
      <div className='portfolio-item__desc'>
        My first attempt to work on webpage. Created it by using Bootstrap 4. 
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'html5']}/>
        <FontAwesomeIcon icon={['fab', 'css3-alt']}/>
        <FontAwesomeIcon icon={['fab', 'js-square']}/>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="http://www.chesssoc.hkusu.hku.hk/">Link</a>
      </div>
    </div>
  )
},{
  name: 'personal page',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Personal Page
      </div>
      <div className='portfolio-item__desc'>
        A personal page built by using React , JavaScript and HTML5/CSS3.
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'js-square']}/>
        <FontAwesomeIcon icon={['fab', 'react']}/> 
        <FontAwesomeIcon icon={['fab', 'html5']}/>
        <FontAwesomeIcon icon={['fab', 'css3-alt']}/>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kalvin807/homepage">Github</a>
      </div>
    </div>
  )
},
{
  name: 'Minecraft Server',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Minecraft Server
      </div>
      <div className='portfolio-item__desc'>
        A 24 hours running private Minecraft Server hosted on AWS Linux EC2.
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'aws']}/>
        <FontAwesomeIcon icon={['fab', 'linux']}/>
        <FontAwesomeIcon icon={['fab', 'centos']}/>
      </div>
    </div>
  )
  }
]