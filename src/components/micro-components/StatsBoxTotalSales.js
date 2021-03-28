import { useState } from 'react';
import {Link} from 'react-router-dom';
import Stats from './StatsBoxTotalSales.module.css';

const StatsBoxTotalSales = () => {
  const [totalOrders, setTotalOrders] = useState(6458)
  const [totalSales, setTotalSales] = useState(248)
  return ( 
    <div className= {Stats.box}>
        <div className={Stats.upper}>
          <div className={Stats.Uleft}> 
          <h3>Total Sales</h3> 
          <p>GH¢ {totalSales}k</p>
          </div>
          <div className={Stats.URight}></div>
        </div>
        <div className={Stats.lower}>
          <div className={Stats.lLeft}>{totalOrders}</div>
          <div className={Stats.lRight}>
            <Link to="/">View Report</Link>
          </div>
        </div>
    </div>
   );
}
 
export default StatsBoxTotalSales;