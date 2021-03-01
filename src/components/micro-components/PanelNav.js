import NavStyle from './PanelNav.module.css';
import SearchBox from './SearchBox'
import {Link} from 'react-router-dom'
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
        <Link to="/admin/dashboard" className={NavStyle.a}>Dashboard</Link>
        <Link to="/admin/orders" className={NavStyle.a}>Orders</Link>
        <Link to="/admin/categories" className={NavStyle.a}>Categories</Link>
        <Link to="/admin/products" className={NavStyle.a}>Products</Link>
        <Link to="/admin/accounts" className={NavStyle.a}>Accounts</Link>
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