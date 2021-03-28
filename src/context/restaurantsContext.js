import React , {createContext, useState, useEffect} from 'react'
import {
      post_to_api, 
      get_from_api,
      delete_to_api, 
      update_to_api
} from '../functions/helper-functions'
import {v4 as uuid} from 'uuid'
// import axios from 'axios';
export const restaurantsContext  = createContext();


function RestaurantsContextProvider(props) {
  const [restaurants, setRestaurants] = useState([]);
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
    getRestaurants()
    .then(response => setRestaurants(response))
  },[])

  //add a restaurant to database
  const addRestaurant = (e, restaurant) =>{
    e.preventDefault();
    restaurant['id'] = uuid()
    const new_restaurant = {...restaurant}
    setRestaurants([...restaurants, new_restaurant])
    
    post_to_api('http://localhost:4000/restaurants', new_restaurant)
    .then(data=>{
      console.log(`added restaurant: ${data}`)
    })

    setTimeout(()=>{
      toggle_edit_restaurant_form();
    }, 2000)
  }
  
  const toggleSearch = ()=> {
    setSearch_isActive(!search_isActive);
  }

  //get all restuarants from API
  const getRestaurants =  async () => {
    console.log('get restaurants');
    const response = get_from_api('http://localhost:4000/restaurants'); 
    return response; 
  }

  //toggle the form for editing a particular restuarant
  const toggle_edit_restaurant_form = () =>{
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
  const populate_edit_form = (restaurants,id) => {
    console.log(restaurants)
    const restaurant = restaurants.filter(restaurant => restaurant.id === id)
    return restaurant;
  }

  const setForm = async (data) => {
    return setCurrentForm(data);
  }

  //delet a restaurant
  const deleteRestaurant = (e, id) => {
    e.preventDefault()
    
    const new_restaurants_arr = 
    restaurants.filter(restaurant => restaurant.id !== id)
    setRestaurants(new_restaurants_arr);
    delete_to_api('http://localhost:4000/restaurants/', id)
    setTimeout(()=>{
      toggle_edit_restaurant_form()
    }, 1000)
    }

  //update a restaurant in the database
  const updateRestaurant = async (e,id, new_data) => {
    e.preventDefault()
    console.log('update restaurant');
    console.log(id, ' ', new_data)
    const new_restaurants_arr = restaurants.map(restaurant => {
      console.log('old data: ', restaurant)
      if(restaurant.id === id){
         restaurant = new_data
        console.log('new data: ', restaurant)
      }

      return restaurant;
    })

    console.log(new_restaurants_arr);
    setRestaurants(new_restaurants_arr);
    toggle_edit_restaurant_form();
    const response = await update_to_api('http://localhost:4000/restaurants/' + id, new_data);
    return response

  }
  
  //bundle functions
  const functions = {
    addRestaurant,
    getRestaurants, 
    updateRestaurant,
    deleteRestaurant,
    toggle_edit_restaurant_form,
    // toggle_add_restaurant_form,
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
    restaurants,
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
    <restaurantsContext.Provider value={{...variables,...functions}}>
      {props.children}
    </restaurantsContext.Provider>
  )
}

export default RestaurantsContextProvider
