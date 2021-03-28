import LSBStyles from './SideBarLeft.module.css'
import {
  Face, Dashboard, Assignment, Apps, 
  AccountCircle,ShoppingBasket, RestaurantMenu, 
  BarChart, Settings, LocationOn
} from '@material-ui/icons'
import {NavLink} from 'react-router-dom'
const SideBarLeft = () => {
  return ( 
  <div className={LSBStyles.grid}>
    <div className={LSBStyles.userAvatar}>
      <Face/>
    </div>

    <div className={LSBStyles.nav}>    
      <NavLink activeClassName={LSBStyles.isActive} to='/admin/dashboard'> <Dashboard/> </NavLink>
      <NavLink activeClassName={LSBStyles.isActive} to='/admin/accounts'> <AccountCircle/> </NavLink>
      <NavLink activeClassName={LSBStyles.isActive} to='/admin/restaurants'> <RestaurantMenu/> </NavLink>
      <NavLink activeClassName={LSBStyles.isActive} to='/admin/addresses'> <LocationOn/> </NavLink>
      <NavLink activeClassName={LSBStyles.isActive} to='/admin/items'> <ShoppingBasket/> </NavLink>
      <NavLink activeClassName={LSBStyles.isActive} to='/admin/categories'> <Apps/> </NavLink>
      <NavLink activeClassName={LSBStyles.isActive} to='/admin/stats'> <BarChart/> </NavLink>
      <NavLink activeClassName={LSBStyles.isActive} to='/admin/settings'> <Settings/> </NavLink>
    </div>

  </div> );
}
 
export default SideBarLeft;