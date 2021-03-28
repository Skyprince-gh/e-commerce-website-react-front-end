import React , {createContext, useState, useEffect} from 'react'
import {
      post_to_api, 
      get_from_api,
      delete_to_api, 
      update_to_api
} from '../functions/helper-functions'
import {v4 as uuid} from 'uuid'
// import axios from 'axios';
export const itemsContext  = createContext();


function ItemsContextProvider(props) {
  const [items, setItems] = useState([]);
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
    getItems()
    .then(response => setItems(response))
  },[])

  //add a item to database
  const addItem = (e, item) =>{
    e.preventDefault();
    item['id'] = uuid()
    const new_item = {...item}
    setItems([...items, new_item])
    
    post_to_api('http://localhost:4000/items', new_item)
    .then(data=>{
      console.log(`added item: ${data}`)
    })

    setTimeout(()=>{
      toggle_edit_item_form();
    }, 2000)
  }
  
  const toggleSearch = ()=> {
    setSearch_isActive(!search_isActive);
  }

  //get all restuarants from API
  const getItems =  async () => {
    console.log('get items');
    const response = get_from_api('http://localhost:4000/items'); 
    return response; 
  }

  //toggle the form for editing a particular restuarant
  const toggle_edit_item_form = () =>{
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

  //toggle the form for adding a new item
  // const toggle_add_item_form = () =>{
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
  const populate_edit_form = (items,id) => {
    console.log(items)
    const item = items.filter(item => item.id === id)
    return item;
  }

  const setForm = async (data) => {
    return setCurrentForm(data);
  }

  //delet a item
  const deleteItem = (e, id) => {
    e.preventDefault()
    
    const new_items_arr = 
    items.filter(item => item.id !== id)
    setItems(new_items_arr);
    delete_to_api('http://localhost:4000/items/', id)
    setTimeout(()=>{
      toggle_edit_item_form()
    }, 1000)
    }

  //update a item in the database
  const updateItem = async (e,id, new_data) => {
    e.preventDefault()
    console.log('update item');
    console.log(id, ' ', new_data)
    const new_items_arr = items.map(item => {
      console.log('old data: ', item)
      if(item.id === id){
         item = new_data
        console.log('new data: ', item)
      }

      return item;
    })

    console.log(new_items_arr);
    setItems(new_items_arr);
    toggle_edit_item_form();
    const response = await update_to_api('http://localhost:4000/items/' + id, new_data);
    return response

  }
  
  //bundle functions
  const functions = {
    addItem,
    getItems, 
    updateItem,
    deleteItem,
    toggle_edit_item_form,
    // toggle_add_item_form,
    toggle_delete_message,
    toggle_edit_message,
    populate_edit_form,
    setForm,
    toggleSearch,
    toggleEdit_isTrue,
    // toggleEditForm_isActive,
    // toggleAddForm_isActive
  }
  //bundle variables
  const variables = {
    items,
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
    <itemsContext.Provider value={{...variables,...functions}}>
      {props.children}
    </itemsContext.Provider>
  )
}

export default ItemsContextProvider
