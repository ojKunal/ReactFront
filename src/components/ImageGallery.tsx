import React, { useState } from 'react';
import styles from './ImageGallery.module.css';
import { useLocation } from 'react-router-dom';

const ImageGallery = () => {
  const location = useLocation();
  const { imagesArray } = location.state || { imagesArray: [] };
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image:any) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = (e:any) => {
    if (e.target === e.currentTarget) {
      setFullscreenImage(null);
    }
  };

  return (
    <div className={styles.galleryContainer}>
      {imagesArray.map((image:any, index:any) => (
        <div key={index} className={styles.imageRow}>
          {index % 2 === 0 ? (
            <div className={styles.imageWrapper} style={{ flex: 1 }}>
              <img src={image} alt={`Image ${index}`} className={styles.image} />
              <button
                className={styles.fullscreenButton}
                onClick={() => openFullscreen(image)}
              >
                ⛶
              </button>
              <div className={styles.description}>
                {`Description for image ${index}`}
              </div>
            </div>
          ) : (
            <>
              <div className={styles.imageWrapper} style={{ flex: 0.5 }}>
                <img src={imagesArray[index]} alt={`Image ${index}`} className={styles.image} />
                <button
                  className={styles.fullscreenButton}
                  onClick={() => openFullscreen(imagesArray[index])}
                >
                  ⛶
                </button>
                <div className={styles.description}>
                  {`Description for image ${index}`}
                </div>
              </div>
              {index + 1 < imagesArray.length && (
                <div className={styles.imageWrapper} style={{ flex: 0.5 }}>
                  <img
                    src={imagesArray[index + 1]}
                    alt={`Image ${index + 1}`}
                    className={styles.image}
                  />
                  <button
                    className={styles.fullscreenButton}
                    onClick={() => openFullscreen(imagesArray[index + 1])}
                  >
                    ⛶
                  </button>
                  <div className={styles.description}>
                    {`Description for image ${index + 1}`}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ))}
      {fullscreenImage && (
        <div className={styles.fullscreenModal} onClick={closeFullscreen}>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className={styles.fullscreenImage}
          />
          <button className={styles.closeButton} onClick={closeFullscreen}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;