// import panelStyles from './AdminPanelDashboard.module.css'
import Nav from '../micro-components/PanelNav'
import DashboardStyles from './AdminPanelGrid.module.css'
import LSide from '../micro-components/SideBarLeft'
import RSide from '../micro-components/SideBarRight'
import Head from '../micro-components/AccountsDashHead'
import AccountsWindow from '../windows/AccountsWindow'
import {accountsContext} from '../../context/accountsContext'
import Message from '../micro-components/Message'
import {useContext} from 'react'
import AccountsEditForm from '../forms/AccountsEditForm'

const AdminPanelAccounts = () => {
  const {updateForm_isActive,edit_message_isActive, 
    delete_message_isActive, edit_isTrue, message } 
    = useContext(accountsContext)

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
        <AccountsWindow/>
        {updateForm_isActive && <AccountsEditForm edit={edit_isTrue}/>}
        {/* {addForm_isActive && <RestaurantEditForm edit={false}/>} */}
        {delete_message_isActive && <Message message={message}/>}
        {edit_message_isActive && <Message context={message}/>}
      </div>

       {/* This is the left bar which is consists of navigation tools and many more. */}
      <div className={DashboardStyles.rightBar}>
       <RSide/>
      </div>
    </div> );
}
 
export default AdminPanelAccounts;