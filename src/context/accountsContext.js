import React , {createContext, useState, useEffect} from 'react'
import {
      post_to_api, 
      get_from_api,
      delete_to_api, 
      update_to_api
} from '../functions/helper-functions'
import {v4 as uuid} from 'uuid'
// import axios from 'axios';
export const accountsContext  = createContext();


function AccountsContextProvider(props) {
  const [accounts, setAccounts] = useState([]);
  const [updateForm_isActive, setUpdateForm_isActive] = useState(false);
  // const [addForm_isActive, setAddForm_isActive ] = useState(false);
  // const [editForm_isActive, setEditForm_isActive] = useState(false);
  const [edit_isTrue, setEdit_isTrue] = useState(false)
  const [currentForm, setCurrentForm] = useState({});
  const [delete_message_isActive, setMessage_isActive] = useState(false)
  const [edit_message_isActive, set_edit_message_isActive] = useState(false)
  const [message, setMessage] = useState('hello');
  const [search_isActive, setSearch_isActive] = useState(false)
  //A toggle of this state shows which form must be present
  
  useEffect(()=> {
    getAccounts()
    .then(response => setAccounts(response))
  },[])

  //add a restaurant to database
  const addAccount = (e, account) =>{
    e.preventDefault();
    accounts['id'] = uuid()
    const new_account = {...account}
    setAccounts([...accounts, new_account])
    
    post_to_api('http://localhost:4000/users', new_account)
    .then(data=>{
      console.log(`added restaurant: ${data}`)
    })

    setTimeout(()=>{
      toggle_edit_account_form();
    }, 2000)
  }
  
  const toggleSearch = ()=> {
    setSearch_isActive(!search_isActive);
  }

  //get all restuarants from API
  const getAccounts =  async () => {
    console.log('get accounts');
    const response = get_from_api('http://localhost:4000/users'); 
    return response; 
  }

  //toggle the form for editing a particular restuarant
  const toggle_edit_account_form = () =>{
    setUpdateForm_isActive(!updateForm_isActive)
    console.log('edit toggled: ', updateForm_isActive)
  }

  //set edit is true based on boolean value passed
  const toggleEdit_isTrue = (bool) => {
    setEdit_isTrue(bool)
  }

  // const toggleAddForm_isActive = (bool) =>{
  //   setAddForm_isActive(bool);
  // }
  
  // const toggleEditForm_isActive = (bool) => {
  //     setEditForm_isActive(bool);
  // }

  //toggle the form for adding a new restaurant
  // const toggle_add_restaurant_form = () =>{
  //   setAddForm_isActive(!addForm_isActive)
  //   console.log('toggled: ', addForm_isActive)
  // }

  const toggle_delete_message = (new_message) => {
    setMessage(new_message)
    setMessage_isActive(true);

    setTimeout(()=> {
      setMessage_isActive(false)
    }, 2000)
  }
  
  const toggle_edit_message = (new_message) => {
    setMessage(new_message)
    set_edit_message_isActive(true);
  
    setTimeout(()=> {
      set_edit_message_isActive(false)
    }, 2000)    
  }


  //populate the edit form with data
  const populate_edit_form = (accounts,id) => {
    console.log(accounts)
    const account = accounts.filter(account => account.id === id)
    return account;
  }

  const setForm = async (data) => {
    return setCurrentForm(data);
  }

  //delet a restaurant
  const deleteAccount = (e, id) => {
    e.preventDefault()
    
    const new_accounts_arr = 
    accounts.filter(account => account.id !== id)
    setAccounts(new_accounts_arr);
    delete_to_api('http://localhost:4000/users/', id)
    setTimeout(()=>{
      toggle_edit_account_form()
    }, 1000)
  }

  //update a restaurant in the database
  const updateAccount = async (e,id, new_data) => {
    e.preventDefault()
    console.log('update restaurant');
    console.log(id, ' ', new_data)
    const new_accounts_arr = accounts.map(account => {
      console.log('old data: ', account)
      if(account.id === id){
         account = new_data
        console.log('new data: ', account)
      }

      return account;
    })

    console.log(new_accounts_arr);
    setAccounts(new_accounts_arr);
    toggle_edit_account_form();
    const response = await update_to_api('http://localhost:4000/users/' + id, new_data);
    return response

  }
  
  //bundle functions
  const functions = {
    addAccount,
    getAccounts, 
    updateAccount,
    deleteAccount,
    toggle_edit_account_form,
    toggle_delete_message,
    toggle_edit_message,
    populate_edit_form,
    setForm,
    toggleSearch,
    toggleEdit_isTrue,
    // toggle_add_restaurant_form,
    // toggleEditForm_isActive,
    // toggleAddForm_isActive
  }
  //bundle variables
  const variables = {
    accounts,
    updateForm_isActive,
    currentForm,
    delete_message_isActive, 
    edit_message_isActive, 
    message,
    search_isActive,
    edit_isTrue
    // addForm_isActive,
    // editForm_isActive
  }

  return (
    <accountsContext.Provider value={{...variables,...functions}}>
      {props.children}
    </accountsContext.Provider>
  )
}

export default AccountsContextProvider