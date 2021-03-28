import React, {useContext, useEffect} from 'react'
import style from './RestaurantEditForm.module.css'
import {restaurantsContext} from '../../context/restaurantsContext'
import {convertImageToText} from '../../functions/helper-functions'
import 'animate.css'

function RestaurantEditForm({edit}) {
  const {
    toggle_edit_restaurant_form, 
    currentForm,
    deleteRestaurant,
    toggle_delete_message, 
    toggle_edit_message,
    updateRestaurant,
    edit_isTrue,
    addRestaurant
  } = useContext(restaurantsContext);

  let newForm = currentForm;
  let addForm = {}
  return (
    <div className={style.grid}>
      {/* editing a restaurant */}
      {  edit_isTrue && 
      <form onSubmit={(e)=> {
        updateRestaurant(e, newForm.id, newForm )
        toggle_edit_message(`${newForm.name} was edited`)
        }} className="animate__animated animate__fadeInDown">
        <h3>Edit Restaurant</h3>
        <input type="text" onChange={(e)=>newForm['name']= e.target.value} name="name" placeholder={currentForm.name? currentForm.name : 'name'}/>
        <input type="text" onChange={(e)=>newForm['address']= e.target.value} name="address" placeholder={currentForm.address? currentForm.address: 'address'}/>
        <input type="text" onChange={(e)=>newForm['category']= [+e.target.value]} name="category" placeholder={currentForm.category? currentForm.category: 'category' }/>
        <input type="number" onChange={(e)=>newForm['avg_prep_time']= +e.target.value} name="avg_prep_time" placeholder={currentForm.number? currentForm.number : 'average prep time/mins'}/>
        <select onChange={(e)=>newForm['status']= e.target.value} name="status">
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <div className={style.file}>
          <label htmlFor="file">Select Image</label>
          <input onChange={(e)=> convertImageToText(e.target['files'][0] , (imageTxt => {
              newForm['store_image'] = imageTxt        
          }))} id="file" type="file" name="store_image" multiple />
        </div>
        {/* newForm['store_image'] = e.target.value */}
        {/* console.log('image:',typeof e.target.value) */}
        <div className={style.buttons}>
          <button type="submit">Save</button>
          <button onClick={(e)=>{ 
            deleteRestaurant(e, currentForm.id);
            toggle_delete_message(`${currentForm.name} was deleted`)
          }
            }>Delete</button>
          <button onClick= {()=> toggle_edit_restaurant_form()}>Cancel</button>
        </div>
      </form>
      }


      {/* adding a restaurant */}

       
      { !edit_isTrue && 
      <form onSubmit={(e)=> {
        addRestaurant(e, addForm)
        toggle_edit_message(`${addForm.name} was added`)
        }} className="animate__animated animate__fadeInDown">
        <h3>Add Restaurant</h3>
        <input type="text" onChange={(e)=>addForm['name']= e.target.value} name="name" placeholder='name' required/>
        <input type="text" onChange={(e)=>addForm['address']= e.target.value} name="address" placeholder='address' required/>
        <input type="text" onChange={(e)=>addForm['category']= [+e.target.value]} name="category" placeholder='category' required/>
        <input type="number" onChange={(e)=>addForm['avg_prep_time']= +e.target.value} name="avg_prep_time" placeholder='average prep time/mins' required/>
        
        <select onChange={(e)=>newForm['status'] = e.target.value} name="status" required>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <div className={style.file}>
          <label htmlFor="file">Select Image</label>
          <input onChange={(e)=> addForm['store_image'] = convertImageToText(e.target['files'][0] , (imageTxt => {
              addForm['store_image'] = imageTxt;        
          }))} id="file" type="file" name="store_image" multiple/>
        </div>
        {/*addForm['store_image'] =*/}
        <div className={style.buttons}>
          <button type="submit">Save</button>
          <button onClick= {()=> toggle_edit_restaurant_form()}>Cancel</button>
        </div>
      </form>}
    </div>
  )
}

export default RestaurantEditForm


// "id": 9,
//     "name": "GRILLERS RESTAURANT",
//     "status": "Online",
//     "address": null,
//     "category": [
//       1
//     ],
//     "store_image": "http://drwp.herokuapp.com/media/store/raw/grillers.jpg",
//     "avg_prep_time": null