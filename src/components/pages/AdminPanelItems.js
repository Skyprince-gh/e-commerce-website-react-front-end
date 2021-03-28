import React, { useContext } from 'react'
import Nav from '../micro-components/PanelNav'
import Styles from './AdminPanelGrid.module.css'
import LSide from '../micro-components/SideBarLeft'
import RSide from '../micro-components/SideBarRight'
import Head from '../micro-components/ItemsDashHead'
import ItemsWindow from '../windows/ItemsWindow'
// import ItemEditForm from '../forms/ItemEditForm'
import {itemsContext} from '../../context/itemsContext'
import Message from '../micro-components/Message'

function AdminPanelItems() {
  const {updateForm_isActive,edit_message_isActive, 
    delete_message_isActive, edit_isTrue, message } = useContext(itemsContext)

  return (

    <div className={Styles.grid}>
       {/* This is the right side bar which contains stats about the site */}
       <div className={Styles.leftBar}>
        <LSide/>
      </div>
      {/* This part is the center of the console consists of cards and the navbar */}
      <div className={Styles.center}>
        <Nav/>
        <Head  page={'Items'} logo={'shopping_basket'} text={'Item'}/>
        <ItemsWindow/>
      </div>

       {/* This is the left bar which is consists of navigation tools and many more. */}
      <div className={Styles.rightBar}>
       <RSide/>
      </div>
    </div> 
    );
  }
  
  export default AdminPanelItems
  
  // {updateForm_isActive && <ItemEditForm edit={edit_isTrue}/>}
  // {/* {addForm_isActive && <ItemEditForm edit={false}/>} */}
  // {delete_message_isActive && <Message message={message}/>}
  // {edit_message_isActive && <Message message={message}/>}