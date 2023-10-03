











import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../src/styles/Nav.module.css';

const analysing = () => {

  

  

  return (
    <>
      <div id='root'>
        <div className='App'>
          <div className={styles['container']}>
            <img
              className={styles['logo-img']}
              src='/logo.png'
              alt='Logo'
            />
            <div className={styles['home-leftsection']}>
              <div className={styles['leftsection-content']}>
                <img
                  src='/sound.png'
                  alt='sound'
                  className={styles['music-img']}
                />
                <h1>ANALYSING</h1>
                
              </div>
            </div>
            <div className={styles['home-right-section']}>
              <video
                autoPlay
                loop
                muted
                className={styles['music-gif']}
              >
                <source src='/effect.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default analysing;



























