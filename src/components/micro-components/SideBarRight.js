import SBRStyles from './SideBarRight.module.css'
import StatsBoxTotalSales from './StatsBoxTotalSales'
import StatsBoxTotalSessions from './StatsBoxTotalSessions'
import StatsBoxCustomerRate from './StatsBoxCustomerRate'
const SideBarRight = () => {
  return ( 
  <div className={SBRStyles.grid}>
    <StatsBoxTotalSales/>
    <StatsBoxTotalSessions/>
    <StatsBoxCustomerRate/>
    
  </div> );
}
 
export default SideBarRight;