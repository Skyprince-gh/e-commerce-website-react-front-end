import Style from './AddressesWindow.module.css'
import React, {useState, useContext, useEffect} from 'react';
import Icon from '@material-ui/core/Icon';
import AddressCard from '../micro-components/AddressCard'
import {addressesContext} from '../../context/addressesContext'

function AddressesWindow() {
  const {addresses, toggleSearch, search_isActive} = useContext(addressesContext);  
  
  const [filteredAddresses, setFilteredAddresses] = useState(addresses);
  const [isActive, setIsActive] = useState(true);

  useEffect(()=> {
    setFilteredAddresses(addresses)
  }, [addresses])
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  const handleToggle = (e) => {
    setIsActive(!isActive);
  }
  
  const handleSearch = (e) => {
    const search = e.target.value;
    const arr = addresses.filter(rest => {
      return rest.name.toLowerCase().includes(search)
    })
    
    setFilteredAddresses(arr)
  }
  
  return ( 
    <div className={Style.grid}>
    <div className={Style.menu}>
      <div className={Style.left}>
        {/* <span onClick={handleToggle} className={isActive ? Style.current : Style.span}>Admin</span>
        <span onClick={handleToggle} className={!isActive ? Style.current : Style.span}>Customers</span> */}
      </div>

      <div className={Style.right}>
        {/* <div className={Style.option}>          
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
          
       { filteredAddresses && filteredAddresses.map(f_address => {
         return  <AddressCard key={f_address.id} data={f_address}/> /* <UserCard key={address.id} data={address}/>*/
       }        
       )} {filteredAddresses.length === 0 && <p className={Style.center}>No Addresses Available</p>}
             
      </div>
  </div> );
}

export default AddressesWindow
