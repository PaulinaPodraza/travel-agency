
import React from 'react';
import styles from './HappyHourAd.scss';

// eslint-disable-next-line react/prop-types
const HappyHourAd = ({ title, promoDescription }) => (
  <div>
    <h3 className={styles.titile}>
      {title}
    </h3>
    <div className={styles.promoDescription}>
      {promoDescription}
    </div>
  </div>
);

export default HappyHourAd;