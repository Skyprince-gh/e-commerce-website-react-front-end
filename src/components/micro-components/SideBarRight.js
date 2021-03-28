import SBRStyles from './SideBarRight.module.css'
import StatsBoxTotalSales from './StatsBoxTotalSales'
import StatsBoxTotalSessions from './StatsBoxTotalSessions'
import StatsBoxCustomerRate from './StatsBoxCustomerRate'
import StatsBoxLiveFeed from './StatsBoxLiveFeed'
const SideBarRight = () => {
  return ( 
  <div className={SBRStyles.grid}>
    <StatsBoxTotalSales/>
    <StatsBoxTotalSessions/>
    <StatsBoxCustomerRate/>
    <StatsBoxLiveFeed/>
  </div> );
}
 
export default SideBarRight;