import React, { useContext } from 'react'
import Nav from '../micro-components/PanelNav'
import Styles from './AdminPanelGrid.module.css'
import LSide from '../micro-components/SideBarLeft'
import RSide from '../micro-components/SideBarRight'
import Head from '../micro-components/RestaurantDashHead'
import RestaurantsWindow from '../windows/RestaurantsWindow'
// import RestaurantsContextProvider from '../../context/restaurantsContext'
import RestaurantEditForm from '../forms/RestaurantEditForm'
import {restaurantsContext} from '../../context/restaurantsContext'
import Message from '../micro-components/Message'

function AdminPanelRestaurants() {
  const {updateForm_isActive,edit_message_isActive, 
    delete_message_isActive, edit_isTrue, message } = useContext(restaurantsContext)

  return (

    <div className={Styles.grid}>
       {/* This is the right side bar which contains stats about the site */}
       <div className={Styles.leftBar}>
        <LSide/>
      </div>
      {/* This part is the center of the console consists of cards and the navbar */}
      <div className={Styles.center}>
        <Nav/>
        <Head  page={'Restaurants'} logo={'restaurant_menu'} text={'Restaurant'}/>
        <RestaurantsWindow/>
        {updateForm_isActive && <RestaurantEditForm edit={edit_isTrue}/>}
        {/* {addForm_isActive && <RestaurantEditForm edit={false}/>} */}
        {delete_message_isActive && <Message message={message}/>}
        {edit_message_isActive && <Message message={message}/>}
      </div>

       {/* This is the left bar which is consists of navigation tools and many more. */}
      <div className={Styles.rightBar}>
       <RSide/>
      </div>
    </div> 
    );
}

export default AdminPanelRestaurants
