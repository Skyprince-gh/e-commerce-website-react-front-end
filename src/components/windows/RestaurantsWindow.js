import React , {useEffect, useState, useContext} from 'react'
// import {connect} from 'react-redux'
import Style from './RestaurantsWindow.module.css'
import Icon from '@material-ui/core/Icon';
import {restaurantsContext} from '../../context/restaurantsContext'
import RestaurantCard from '../micro-components/RestaurantCard';
import 'animate.css'

function RestaurantsWindow() {
  const {restaurants, toggleSearch, search_isActive} = useContext(restaurantsContext);  
  
  const [filteredRestaurants, setFilteredRest] = useState(restaurants);
  
  useEffect(()=> {
    setFilteredRest(restaurants)
  }, [restaurants])
  // const handleSearch = (param) => {
  //   console.log(param)
    
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleSearch = (e) => {
    const search = e.target.value;
    const arr = restaurants.filter(rest => {
      return rest.name.toLowerCase().includes(search)
    })

    setFilteredRest(arr)
  }

  return (
    <div className={Style.grid}>
      <div className={Style.menu}>
        <div className={Style.left}>

        </div>

        <div className={Style.right}>
          {/* <div class Name={Style.option}>
            <Icon className={Style.icon}>filter_list</Icon>
            <span className={Style.optionSpan}>Filters</span>
          </div> 
  
          <div className={Style.option}>
            <Icon className={Style.icon}>create</Icon>
            <span className={Style.optionSpan}>Edit</span>
          </div> 

          <div className={Style.option}>
            <Icon className={Style.icon}>delete</Icon>
            <span className={Style.optionSpan}>Delete</span>
          </div> */}

          {!search_isActive && <div onClick={toggleSearch} className={Style.option}>
            <Icon className={Style.icon}>search</Icon>
            <span className={Style.optionSpan}>Search</span>
          </div>}
          {search_isActive && <form onSubmit= {handleSubmit}>
            <input onChange={handleSearch} onBlur={toggleSearch} name="search" className={Style.searchBox} placeholder="search" type="text"/>
          </form>}
        </div>
      </div>


      <div className={Style.main}>
        { filteredRestaurants && filteredRestaurants.map(restaurant => {
         return  <RestaurantCard key={restaurant.id} data={restaurant}/>
        }        
        )} {filteredRestaurants.length === 0 && <p className={Style.center}>No Restaurants Available</p>}
      </div>
    </div>
  )
}


export default RestaurantsWindow

