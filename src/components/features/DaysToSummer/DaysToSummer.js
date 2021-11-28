import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownDate() {
    const currentDate = new Date();
    let summerStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    let summerEnd = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23));
    let daysToSummer;

    const countDaysToSummer = function(summerStart, currentDate){
      return Math.round((summerStart.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    };

    if (currentDate < summerStart ){
      daysToSummer = countDaysToSummer(summerStart, currentDate);
      if (daysToSummer === 1) {
        return '1 day to summer!';
      } else return daysToSummer + ' days to summer!';
    }
    else if (currentDate > summerEnd ) {
      summerStart.setUTCFullYear(summerStart.getUTCFullYear() + 1);
      daysToSummer = countDaysToSummer(summerStart, currentDate);
      return daysToSummer + ' days to summer!';
    }
  }

  render() {
    const countDownDate = this.getCountdownDate();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{countDownDate}</h3>
      </div>
    );
  }
}

export default DaysToSummer;