import LSBStyles from './SideBarLeft.module.css'
import {
  Face, Dashboard, Assignment, Apps, 
  AccountCircle,ShoppingBasket, RestaurantMenu, 
  BarChart, Settings
} from '@material-ui/icons'
import {Link} from 'react-router-dom'
const SideBarLeft = () => {
  return ( 
  <div className={LSBStyles.grid}>
    <div className={LSBStyles.userAvatar}>
      <Face/>
    </div>

    <div className={LSBStyles.nav}>    
      <Link to='/admin/dashboard'> <Dashboard className={LSBStyles.current}/> </Link>
      <Link to='/admin/orders'> <Assignment/> </Link>
      <Link to='/admin/categories'> <Apps/> </Link>
      <Link to='/admin/products'> <ShoppingBasket/> </Link>
      <Link to='/admin/accounts'> <AccountCircle/> </Link>
      <Link to='/admin/restaurants'> <RestaurantMenu/> </Link>
      <Link to='/admin/stats'> <BarChart/> </Link>
      <Link to='/admin/settings'> <Settings/> </Link>
    </div>

  </div> );
}
 
export default SideBarLeft;