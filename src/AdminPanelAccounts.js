// import panelStyles from './AdminPanelDashboard.module.css'
import Nav from './components/micro-components/PanelNav'
import DashboardStyles from './AdminPanelDashboard.module.css'
import LSide from './components/micro-components/SideBarLeft'
import RSide from './components/micro-components/SideBarRight'
import Head from './components/micro-components/DashHead'
import Window from './components/PanelWindow'
const AdminPanelAccounts = () => {
  return (   // This grid is used to position all elements
    <div className={DashboardStyles.grid}>
      {/* This is the right side bar which contains stats about the site */}
      <div className={DashboardStyles.leftBar}>
        <LSide/>
      </div>
      {/* This part is the center of the console consists of cards and the navbar */}
      <div className={DashboardStyles.center}>
        <Nav/>
        <Head  page={'Accounts'} logo={'account_circle'} text={'Account'}/>
        <Window/>
      </div>

       {/* This is the left bar which is consists of navigation tools and many more. */}
      <div className={DashboardStyles.rightBar}>
       <RSide/>
      </div>
    </div> );
}
 
export default AdminPanelAccounts;