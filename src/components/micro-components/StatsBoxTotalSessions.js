import { useState } from 'react';
import {Link} from 'react-router-dom';
import Stats from './StatsBoxTotalSessions.module.css';

const StatsBoxTotalSessions = () => {
  const [totalSessions, setTotalSessions] = useState(456)
  const [liveSessions, setLiveSessions] = useState(5)
  return ( <div className= {Stats.box}>
    <div className={Stats.upper}>
      <div className={Stats.Uleft}> 
      <h3>Total Sessions</h3> 
      <p>{totalSessions}k</p>
      </div>
      <div className={Stats.URight}></div>
    </div>
    <div className={Stats.lower}>
      <div className={Stats.lLeft}>
        <span>live</span>
        </div>
      <div className={Stats.lCenter}>{liveSessions}k</div>
      <div className={Stats.lRight}>
        <Link to="/">See Live View</Link>
      </div>
    </div>
</div> );
}
 
export default StatsBoxTotalSessions;