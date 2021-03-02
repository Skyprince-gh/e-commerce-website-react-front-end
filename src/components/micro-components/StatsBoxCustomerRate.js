import { useState } from 'react';
import Stats from './StatsBoxCustomerRate.module.css';

const StatsBoxCustomerRate = () => {
  const [customerRate, setCustomerRate] = useState(5.4)

  return (
    <div className={Stats.box}>
      <div className={Stats.upper}>

        <div className={Stats.Uleft}>
          <h3>Customer Rate</h3>
          <p>{customerRate}% </p>
        </div>

        <div className={Stats.URight}></div>
      </div>

      <div className={Stats.lower}>

        <div className={Stats.lLeft}>
          <span className={Stats.circle + ' ' + Stats.red}></span>
          <span>First Time</span>
        </div>

        <div className={Stats.lRight}>
          <span className= {Stats.circle + ' ' + Stats.green}></span>
          <span>Returning</span>
        </div>

      </div>
    </div>
  );
}

export default StatsBoxCustomerRate;