// import React, { useRef } from 'react';
// import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.css';

// import styles from '../src/styles/Nav.module.css';

// const Nav = () => {
//   const fileInputRef = useRef(null);

//   const handleUploadButtonClick = () => {
//     // Trigger a click event on the file input to open the gallery
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFileInputChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       // Create a FileReader to read the file contents
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         const fileContents = e.target.result;
//         console.log('Selected File:', selectedFile);
//         console.log('File Contents:', fileContents);
//       };

//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   return (
//     <>
//       <div id='root'>
//         <div className='App'>
//           <div className={styles['container']}>
//             <img
//               className={styles['logo-img']}
//               src='/logo.png'
//               alt='Logo'
//             />
//             <div className={styles['home-leftsection']}>
//               <div className={styles['leftsection-content']}>
//                 <img
//                   src='/sound.png'
//                   alt='sound'
//                   className={styles['music-img']}
//                 />
//                 <h1>CONVERTING VIDEO
//                   <br />
//                   INTO MUSIC
//                 </h1>
//                 <input
//                   type='file'
//                   id="fileinput"
//                   accept='video/*' // Accept any video format
//                   className={styles['input']}
//                   ref={fileInputRef}
//                   style={{ display: 'none' }} // Hide the input visually
//                   onChange={handleFileInputChange} // Listen for file input change
//                 />
//                 <button
//                   type='button'
//                   className={`btn btn-danger btn-lg ${styles['upload-button']}`}
//                   onClick={handleUploadButtonClick}
//                 >
//                   Upload Video
//                 </button>
//               </div>
//             </div>
//             <div className={styles['home-right-section']}>
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 className={styles['music-gif']}
//               >
//                 <source src='/effect.mp4' type='video/mp4' />
//               </video>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Nav;































// import React, { useRef } from 'react';
// import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.css';

// import styles from '../src/styles/Nav.module.css';

// const Nav = () => {
//   const fileInputRef = useRef(null);

//   const handleUploadButtonClick = () => {
//     // Trigger a click event on the file input to open the gallery
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//       console.log(fileInputRef,"fileInputRef")
//       console.log("hello")
//     }
//   };

//   return (
//     <>
//       <div id='root'>
//         <div className='App'>
//           <div className={styles['container']}>
//             <img
//               className={styles['logo-img']}
//               src='/logo.png'
//               alt='Logo'
//             />
//             <div className={styles['home-leftsection']}>
//               <div className={styles['leftsection-content']}>
//                 <img
//                   src='/sound.png'
//                   alt='sound'
//                   className={styles['music-img']}
//                 />
//                 <h1>CONVERTING VIDEO
//                   <br />
//                   INTO MUSIC
//                 </h1>
//                 <input
//                   type='file'
//                   id="fileinput"
//                   accept='video/*' // Accept any video format
//                   className={styles['input']}
//                   ref={fileInputRef}
//                   style={{ display: 'none' }} // Hide the input visually
//                 />
//                 <button
//                   type='button'
//                   className={`btn btn-danger btn-lg ${styles['upload-button']}`}
//                   onClick={handleUploadButtonClick}
//                 >
//                   Upload Video
//                 </button>
//               </div>
//             </div>
//             <div className={styles['home-right-section']}>
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 className={styles['music-gif']}
//               >
//                 <source src='/effect.mp4' type='video/mp4' />
//               </video>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Nav;












import React, { useRef } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../src/styles/Nav.module.css';

const Nav = () => {
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    // Trigger a click event on the file input to open the gallery
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      console.log('Selected File:', selectedFile);
      console.log('Object URL:', objectURL);
    }
  };

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
                <h1>CONVERTING VIDEO
                  <br />
                  INTO MUSIC
                </h1>
                <input
                  type='file'
                  id="fileinput"
                  accept='video/*' // Accept any video format
                  className={styles['input']}
                  ref={fileInputRef}
                  style={{ display: 'none' }} // Hide the input visually
                  onChange={handleFileInputChange} // Listen for file input change
                />
                <button
                  type='button'
                  className={`btn btn-danger btn-lg ${styles['upload-button']}`}
                  onClick={handleUploadButtonClick}
                >
                  Upload Video
                </button>
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

export default Nav;
















































