import NavStyle from './PanelNav.module.css';
import SearchBox from './SearchBox'
import {Link , NavLink} from 'react-router-dom'
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
        <NavLink to="/admin/orders" activeClassName={NavStyle.isActive} className={NavStyle.a}>Orders</NavLink>
        <NavLink to="/admin/categories" activeClassName={NavStyle.isActive} className={NavStyle.a}>Categories</NavLink>
        <NavLink to="/admin/products" activeClassName={NavStyle.isActive} className={NavStyle.a}>Products</NavLink>
        <NavLink to="/admin/accounts" activeClassName={NavStyle.isActive} className={NavStyle.a}>Accounts</NavLink>
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