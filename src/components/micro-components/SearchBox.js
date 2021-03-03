import SearchBoxStyles from './SearchBox.module.css'
import {Search} from '@material-ui/icons';

const SearchBox = () => {
  return ( 
  <form className={SearchBoxStyles.searchBox}>
    <input className={SearchBoxStyles.input} placeholder="search" type="text" required/> 
    <button className={SearchBoxStyles.button} type="submit">
      <Search/>
    </button>
  </form> );
}
 
export default SearchBox ;