import Style from './DashHead.module.css';
import {AddCircle} from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import { useContext } from 'react';
import {restaurantsContext} from '../../context/restaurantsContext'
// import { StylesProvider } from '@material-ui/core';

const RestaurantDashHead = ({page,logo, text}) => {
  const {
    toggle_edit_restaurant_form,  
    toggleEdit_isTrue
  } = useContext(restaurantsContext)
  
  const handleButtonPress = (e) =>{
    
    switch(text.toLowerCase()){
      case 'restaurant':
      {
        toggle_edit_restaurant_form();
        toggleEdit_isTrue(false)         
        console.log(text.toLowerCase)
      }
      break;
      default: 
      console.log('function not available')
    }
  }

  return ( 
  <div className={Style.grid}>
    <div className={Style.logo}>
      <Icon>{logo}</Icon>
       <span className={Style.logoSpan}>{page}</span>
    </div>

    <div>
      <button onClick={handleButtonPress} 
      className={Style.button}>
        <span><AddCircle/></span> Add {text}
        </button>
    </div>
  </div>  );
}
 
export default RestaurantDashHead;