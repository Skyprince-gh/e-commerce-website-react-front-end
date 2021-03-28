import React, {useContext} from 'react';
import style from './AddressCard.module.css';
import Icon from '@material-ui/core/Icon'
import {addressesContext} from '../../context/addressesContext'
function AddressCard({data: address}) {

  const id = address.id;
  const {setForm, toggle_edit_address_form,
    toggleEdit_isTrue
  } = useContext(addressesContext)

  return (
    <div className={style.grid}>
     <div className={style.menu}>
       <div className={style.circle}></div>
       <span className={style.cardMenu} onClick={()=> {
        setForm(address).then(func=>{
          toggle_edit_address_form();
          toggleEdit_isTrue(true);
        })
        console.log(id);
      }}>...</span>
     </div>
     <div className={style.main}>

        <div className={style.address}>
          <h3>Address</h3>
          <p>{address.address}</p>
        </div>

        <div className={style.user}>
          <h3>User</h3>
          {/* <p>{address.user.name}</p>
          <p>{address.user.id}</p> */}
        </div>

        <div className={style.longitude}>
          <h3>Longitude</h3>
          <p>{ String(address.longitude).length > 8 ? String(address.longitude).slice(0, 8)+ '...' : address.longitude}</p>
        </div>

        <div className={style.latitude}>
          <h3>Latitude</h3>
          <p>{ String(address.latitude).length > 8 ? String(address.latitude).slice(0, 8)+ '...' : address.latitude}</p>
        </div>

        <div className={style.default}>
          <h3>Default</h3>
          <p>{address.default}</p>
        </div>

     </div>
    </div>
  )
}

export default AddressCard
