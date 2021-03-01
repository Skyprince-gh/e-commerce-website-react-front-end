import SearchBoxStyles from './SearchBox.module.css'
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = () => {
  return ( 
  <form onSubmit= {''} className={SearchBoxStyles.searchBox}>
    <input className={SearchBoxStyles.input} placeholder="search" type="text" required/> 
    <button className={SearchBoxStyles.button} type="submit">
      <SearchIcon style={{
        fontSize: '20px',
        color: '#242424'
      }}></SearchIcon>
    </button>
  </form> );
}
 
export default SearchBox ;