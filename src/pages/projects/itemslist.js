import React from 'react';

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
        <i className="fab fa-js"></i>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
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
        <i className="fab fa-js"></i>
        <i className="fab fa-react"></i>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
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
        Small-scale Minecraft Server
      </div>
      <div className='portfolio-item__desc'>
        A 24 hours running private Minecraft Server hosted on AWS Linux EC2.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-aws"></i>
        <i className="fab fa-linux"></i>
        <i className="fab fa-centos"></i>
      </div>
    </div>
  )
  }
]