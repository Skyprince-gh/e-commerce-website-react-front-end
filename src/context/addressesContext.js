import React , {createContext, useState, useEffect} from 'react'
import {
      post_to_api, 
      get_from_api,
      delete_to_api, 
      update_to_api
} from '../functions/helper-functions'
import {v4 as uuid} from 'uuid'
// import axios from 'axios';
export const addressesContext  = createContext();


function AddressesContextProvider(props) {
  const [addresses, setAddresses] = useState([]);
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
    getAddresses()
    .then(response => setAddresses(response))
  },[])

  //add a restaurant to database
  const addAddress = (e, address) =>{
    e.preventDefault();
    addresses['id'] = uuid()
    const new_address = {...address}
    setAddresses([...addresses, new_address])
    
    post_to_api('http://localhost:4000/addresses', new_address)
    .then(data=>{
      console.log(`added restaurant: ${data}`)
    })

    setTimeout(()=>{
      toggle_edit_address_form();
    }, 2000)
  }
  
  const toggleSearch = ()=> {
    setSearch_isActive(!search_isActive);
  }

  //get all restuarants from API
  const getAddresses =  async () => {
    console.log('get addresses');
    const response = get_from_api('http://localhost:4000/addresses'); 
    return response; 
  }

  //toggle the form for editing a particular restuarant
  const toggle_edit_address_form = () =>{
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
  const populate_edit_form = (addresses,id) => {
    console.log(addresses)
    const address = addresses.filter(address => address.id === id)
    return address;
  }

  const setForm = async (data) => {
    return setCurrentForm(data);
  }

  //delet a restaurant
  const deleteAddress = (e, id) => {
    e.preventDefault()
    
    const new_addresses_arr = 
    addresses.filter(address => address.id !== id)
    setAddresses(new_addresses_arr);
    delete_to_api('http://localhost:4000/addresses/', id)
    setTimeout(()=>{
      toggle_edit_address_form()
    }, 1000)
  }

  //update a restaurant in the database
  const updateAddress = async (e,id, new_data) => {
    e.preventDefault()
    console.log('update restaurant');
    console.log(id, ' ', new_data)
    const new_addresses_arr = addresses.map(address => {
      console.log('old data: ', address)
      if(address.id === id){
         address = new_data
        console.log('new data: ', address)
      }

      return address;
    })

    console.log(new_addresses_arr);
    setAddresses(new_addresses_arr);
    toggle_edit_address_form();
    const response = await update_to_api('http://localhost:4000/addresses/' + id, new_data);
    return response

  }
  
  //bundle functions
  const functions = {
    addAddress,
    getAddresses, 
    updateAddress,
    deleteAddress,
    toggle_edit_address_form,
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
    addresses,
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
    <addressesContext.Provider value={{...variables,...functions}}>
      {props.children}
    </addressesContext.Provider>
  )
}

export default AddressesContextProvider