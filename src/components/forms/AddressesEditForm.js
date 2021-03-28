import React, {useContext} from 'react'
import style from './RestaurantEditForm.module.css'
import {addressesContext} from '../../context/addressesContext'
import {convertImageToText} from '../../functions/helper-functions'
import 'animate.css'

function AddressesEditForm() {
    const {
      toggle_edit_address_form, 
      currentForm,
      deleteAddress,
      toggle_delete_message, 
      toggle_edit_message,
      updateAddress,
      edit_isTrue,
      addAddress
    } = useContext(addressesContext);
  
    let newForm = currentForm;
    let addForm = {};
    let validationPassword = '';
    let do_not_match = false;
    
    return (
      <div className={style.grid}>
    
        {  !edit_isTrue && 
        <form onSubmit={(e)=> {
          e.preventDefault();
          addAddress(e, addForm)
          toggle_edit_message(`${addForm.name} was added`)
          toggle_edit_address_form()
          console.log('edited')
        }} 
        className="animate__animated animate__fadeInDown">
          <h3>Add Address</h3>
          <input type="text" onChange={(e)=>addForm['address']= e.target.value} name="address" placeholder='address' required/>
          
          <select onChange={e=>addForm['address_type']} name="address_type" required>
            <option value="private">private</option>
            <option selected value="public">public</option>
          </select> 

          <input type="number" name="longitude" onChange={e=> addForm['longitude'] = +e.target.value} placeholder='longitude' step="0.0000001" required/>

          <input type="number" name="latitude" onChange={e=> addForm['latitude'] = +e.target.value} placeholder='latitude' step="0.0000001" required/>

          <select onChange={e=>addForm['default'] = e.target.value} name="default" required>
            <option selected value={true}>True</option>
            <option value={false}>False</option>
          </select> 

          {/* Display window to select a user to attach to this address. */}
          <div className={style.buttons}>
            <button >Add User </button>            
          </div>

          <div className={style.buttons}>
            <button type="submit"> Save </button>            
            <button onClick= {()=> toggle_edit_address_form()}>Cancel</button>
          </div>
        </form>
        }


        {/* adding a restaurant */}

       { edit_isTrue && 
        <form onSubmit={(e)=> {
          e.preventDefault();          
          updateAddress(e, newForm.id, newForm )
          toggle_edit_message(`${newForm.name} was edited`)        
          }} className="animate__animated animate__fadeInDown">
          
          <h3>Edit Address</h3>
          <input type="text" onChange={(e)=>newForm['address']= e.target.value} name="address" placeholder={currentForm.address? currentForm.address : 'address'} />
          
          <select onChange={e=>newForm['address_type']} name="address_type">
            <option value="private">private</option>
            <option selected value="public">public</option>
          </select> 

          <input type="number" name="longitude" onChange={e=> newForm['longitude'] = +e.target.value} placeholder= {currentForm.longitude? currentForm.longitude : 'longitude'} step="0.0000001"/>

          <input type="number" name="latitude" onChange={e=> newForm['latitude'] = +e.target.value} placeholder={currentForm.latitude? currentForm.latitude : 'latitude'} step="0.0000001"/>

          <select onChange={e=>newForm['default'] = e.target.value} name="default">
            <option selected value={true}>True</option>
            <option value={false}>False</option>
          </select> 

          {/* Display window to select a user to attach to this address. */}
          

          <div className={style.buttons}>
            <button type="submit"> Save </button>            
            <button onClick={(e)=>{ 
              deleteAddress(e, currentForm.id);
              toggle_delete_message(`${currentForm.name} was deleted`)
            }
              } >Delet User </button>            
            <button onClick= {()=> toggle_edit_address_form()}>Cancel</button>
          </div>
        </form>
        }
      
    </div>
  )
}

export default AddressesEditForm
