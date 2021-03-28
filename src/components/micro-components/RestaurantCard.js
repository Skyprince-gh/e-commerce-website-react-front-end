import React, {useContext, useEffect} from 'react'
import style from './RestaurantCard.module.css'
import {restaurantsContext} from '../../context/restaurantsContext'

function RestaurantCard({data:restaurant}) {
  
  const id = restaurant.id;
  const {setForm, toggle_edit_restaurant_form,
    toggleEdit_isTrue
  } = useContext(restaurantsContext)

  return (
    <div className={style.grid}>
       {/* <div className={style.circle}></div> */}
      <div className={style.image}>
        <img src={restaurant.store_image} alt={restaurant.name} className={style.img}/>
      </div>
      <div className={style.cardInfo}>
        <p className={style.name}>{restaurant.name}</p>
        <p className={style.address}>{restaurant.address}</p>
        <p className={style.status}>{restaurant.status}</p>
      </div>
      <div className={style.button_grp}>

      <button className={style.button} onClick={()=> {
        setForm(restaurant).then(func=>{
          toggle_edit_restaurant_form()
          toggleEdit_isTrue(true)
        })
        console.log(id);
      }}>Edit</button>
      </div>
    </div>
  )
}

export default RestaurantCard

/* <div onClick={()=> {
      setForm(restaurant).then(func=>{
        toggle_edit_restaurant_form()
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