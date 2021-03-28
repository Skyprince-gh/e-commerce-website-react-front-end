import React, {useContext} from 'react'
import Nav from '../micro-components/PanelNav'
import DashboardStyles from './AdminPanelGrid.module.css'
import LSide from '../micro-components/SideBarLeft'
import RSide from '../micro-components/SideBarRight'
import Head from '../micro-components/AddressesDashHead'
import AddressesWindow from '../windows/AddressesWindow'
import AddressesEditForm from '../forms/AddressesEditForm'
import {addressesContext} from '../../context/addressesContext'
import {restaurantsContext} from '../../context/restaurantsContext'
import Message from '../micro-components/Message'

function AdminPanelAddresses() {
  const {updateForm_isActive, edit_message_isActive, 
    delete_message_isActive, edit_isTrue, message } 
    = useContext(addressesContext)

  return (   // This grid is used to position all elements
    <div className={DashboardStyles.grid}>
      {/* This is the right side bar which contains stats about the site */}
      <div className={DashboardStyles.leftBar}>
        <LSide/>
      </div>
      {/* This part is the center of the console consists of cards and the navbar */}
      <div className={DashboardStyles.center}>
        <Nav/>
        <Head  page={'Addresses'} logo={'location_on'} text={'Address'}/>
        <AddressesWindow/>
        {updateForm_isActive && <AddressesEditForm edit={edit_isTrue}/>}
        
      </div>

       {/* This is the left bar which is consists of navigation tools and many more. */}
      <div className={DashboardStyles.rightBar}>
       <RSide/>
      </div>
    </div> );
}

export default AdminPanelAddresses


// {updateForm_isActive && <AddressesEditForm edit={edit_isTrue}/>}
// {/* {addForm_isActive && <RestaurantEditForm edit={false}/>} */}
// {delete_message_isActive && <Message message={message}/>}
// {edit_message_isActive && <Message message={message}/>}