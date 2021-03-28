import NavStyle from './PanelNav.module.css';
import SearchBox from './SearchBox'
import {NavLink} from 'react-router-dom'
import GridIcon from '@material-ui/icons/Apps'

const PanelNav = () => {
  
  return ( 
    <nav className={NavStyle.nav}>
      <div className={NavStyle.logo}>
        DRWP
      </div>
      
      <div className={NavStyle.search}>
        <SearchBox/>
      </div>

      <div className={NavStyle.links}>
        <NavLink to="/admin/dashboard" activeClassName={NavStyle.isActive} className={NavStyle.a}>Dashboard</NavLink>
        <NavLink to="/admin/accounts" activeClassName={NavStyle.isActive} className={NavStyle.a}>Accounts</NavLink>
        <NavLink to="/admin/restaurants" activeClassName={NavStyle.isActive} className={NavStyle.a}>Restaurants</NavLink>
        <NavLink to="/admin/addresses" activeClassName={NavStyle.isActive} className={NavStyle.a}>Addresses</NavLink>
        <NavLink to="/admin/items" activeClassName={NavStyle.isActive} className={NavStyle.a}>Items</NavLink>
      </div>

      <div className= {NavStyle.menu}>
        <GridIcon style={{
          color: '#242424'
        }}></GridIcon>
      </div>
    </nav>
   );
}
 
export default PanelNav;