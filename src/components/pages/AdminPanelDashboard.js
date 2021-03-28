// import panelStyles from './AdminPanelDashboard.module.css'
import Nav from '../micro-components/PanelNav'
import DashboardStyles from './AdminPanelGrid.module.css'
import LSide from '../micro-components/SideBarLeft'
import RSide from '../micro-components/SideBarRight'
import Head from '../micro-components/DashboardDashHead'


const AdminPanelDashboard = () => {
  return (
      // This grid is used to position all elements
     <div className={DashboardStyles.grid}>
       {/* This is the right side bar which contains stats about the site */}
       <div className={DashboardStyles.leftBar}>
         <LSide/>
       </div>
       {/* This part is the center of the console consists of cards and the navbar */}
       <div className={DashboardStyles.center} current={'dashboard'}>
         <Nav/>
         <Head page={'Dashboard'} logo={'dashboard'} text={'Widget'}/>
       </div>

        {/* This is the left bar which is consists of navigation tools and many more. */}
       <div className={DashboardStyles.rightBar}>
        <RSide/>
       </div>
     </div>   
   );
}
 
export default AdminPanelDashboard;