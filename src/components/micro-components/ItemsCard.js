import React, {useContext, useEffect} from 'react'
import style from './ItemCard.module.css'
import {itemsContext} from '../../context/itemsContext'

function ItemCard({data:item}) {
  
  const id = item.id;
  const {setForm, toggle_edit_item_form,
    toggleEdit_isTrue
  } = useContext(itemsContext)

  return (
    <div className={style.grid}>
       {/* <div className={style.circle}></div> */}
      <div className={style.image}>
        <img src={item.store_image} alt={item.name} className={style.img}/>
      </div>
      <div className={style.cardInfo}>
        <p className={style.name}>{item.name}</p>
        <p className={style.address}>{item.address}</p>
        <p className={style.status}>{item.status}</p>
      </div>
      <div className={style.button_grp}>

      <button className={style.button} onClick={()=> {
        setForm(item).then(func=>{
          toggle_edit_item_form()
          toggleEdit_isTrue(true)
        })
        console.log(id);
      }}>Edit</button>
      </div>
    </div>
  )
}

export default ItemCard

/* <div onClick={()=> {
      setForm(item).then(func=>{
        toggle_edit_item_form()
      })
      console.log(id);
     }} className={style.grid}> */

// "id": 9,
//     "name": "GRILLERS RESTAURANT",
//     "status": "Online",
//     "address": null,
//     "category": [
//       1
//     ],
//     "store_image": "http://drwp.herokuapp.com/media/store/raw/grillers.jpg",
//     "avg_prep_time": null