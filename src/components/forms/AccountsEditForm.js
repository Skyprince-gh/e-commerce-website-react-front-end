import React, {useContext} from 'react'
import style from './RestaurantEditForm.module.css'
import {accountsContext} from '../../context/accountsContext'
import {convertImageToText} from '../../functions/helper-functions'
import 'animate.css'

function AccountsEditForm() {
    const {
      toggle_edit_account_form, 
      currentForm,
      deleteAccount,
      toggle_delete_message, 
      toggle_edit_message,
      updateAccount,
      edit_isTrue,
      addAccount
    } = useContext(accountsContext);
  
    let newForm = currentForm;
    let addForm = {};
    let validationPassword = '';
    let do_not_match = false;
    
    return (
      <div className={style.grid}>
        {/* editing a restaurant */}
        {  edit_isTrue && 
        <form onSubmit={(e)=> {
          e.preventDefault();
          if(newForm.password === validationPassword){
          updateAccount(e, newForm.id, newForm )
          toggle_edit_message(`${newForm.name} was edited`)
          }else if(newForm.password !== validationPassword){
            toggle_edit_message('passwords do not match')
            do_not_match= true;
          }
          }} className="animate__animated animate__fadeInDown">
          <h3>Edit Account</h3>
          <input type="text" onChange={(e)=>newForm['name']= e.target.value} name="name" placeholder={currentForm.name? currentForm.name : 'name'}/>
          <input type="email" onChange={(e)=>newForm['email']= e.target.value} name="email" placeholder={currentForm.email? currentForm.email: 'email'}/>
          <input type="number" onChange={(e)=>newForm['phone']= +e.target.value} name="phone" placeholder={currentForm.phone? currentForm.phone: 'phone' }/>
          <input type="password" onChange={(e)=>newForm['password']= e.target.value} name="password" placeholder='password'/>
          <input type="password" onChange={(e)=>validationPassword = e.target.value} name="validatePassword" placeholder='Validate Password'/>
          { do_not_match && <p>Passwords do not match</p>}
          <div className={style.file}>
            <label htmlFor="file">Select Image</label>
            <input onChange={(e)=> convertImageToText(e.target['files'][0] , (imageTxt => {
                newForm['user_image'] = imageTxt;        
            }))} id="file" type="file" name="store_image" multiple />
          </div>

          <div className={style.buttons}>
            <button type="submit">Save</button>
            <button onClick={(e)=>{ 
              deleteAccount(e, currentForm.id);
              toggle_delete_message(`${currentForm.name} was deleted`)
            }
              }>Delete</button>
            <button onClick= {()=> toggle_edit_account_form()}>Cancel</button>
          </div>
        </form>
        }


        {/* adding a restaurant */}

       { !edit_isTrue && 
        <form onSubmit={(e)=> {
          e.preventDefault()
          if(addForm.password === validationPassword){
          addAccount(e, addForm)
          toggle_edit_message(`${addForm.name} was edited`)
          }else if(addForm.password !== validationPassword){
            do_not_match = true
            toggle_edit_message('passwords do not match')
          }
          }} className="animate__animated animate__fadeInDown">
          <h3>Add Account</h3>
          <input type="text" onChange={(e)=>addForm['name']= e.target.value} name="name" placeholder='name'/>
          <input type="email" onChange={(e)=>addForm['email']= e.target.value} name="email" placeholder='email'/>
          <input type="number" onChange={(e)=>addForm['phone']= +e.target.value} name="phone" placeholder='phone'/>
          <input type="password" onChange={(e)=>addForm['password']= e.target.value} name="password" placeholder='password'/>
          <input type="password" onChange={(e)=> validationPassword = e.target.value} name="password" placeholder='password'/>
          {do_not_match && <p>Passwords do not match</p>}
          <div className={style.file}>
            <label htmlFor="file">Select Image</label>
            <input onChange={(e)=> convertImageToText(e.target['files'][0] , (imageTxt => {
                addForm['user_image'] = imageTxt;        
            }))} id="file" type="file" name="store_image" multiple />
          </div>
          
          <div className={style.buttons}>
            <button type="submit">Save</button>
            <button onClick= {()=> toggle_edit_account_form()}>Cancel</button>
          </div>
        </form>
        }
      
    </div>
  )
}

export default AccountsEditForm
