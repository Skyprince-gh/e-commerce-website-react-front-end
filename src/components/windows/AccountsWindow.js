import Style from './AccountsWindow.module.css'
import {useState, useContext, useEffect} from 'react';
import Icon from '@material-ui/core/Icon';
import UserCard from '../micro-components/AccountsCard'
import {accountsContext} from '../../context/accountsContext'
// import ItemCard from '../micro-components/AccountsCard';

const AccountsWindow = () => {
  const {accounts, toggleSearch, search_isActive} = useContext(accountsContext);  
  
  const [filteredAccounts, setFilteredAccounts] = useState(accounts);
  const [isActive, setIsActive] = useState(true);

  useEffect(()=> {
    setFilteredAccounts(accounts)
  }, [accounts])
  

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleToggle = (e) => {
    setIsActive(!isActive);
  }

  const handleSearch = (e) => {
    const search = e.target.value;
    const arr = accounts.filter(rest => {
      return rest.name.toLowerCase().includes(search)
    })

    setFilteredAccounts(arr)
  }

  return ( 
  <div className={Style.grid}>
    <div className={Style.menu}>
      <div className={Style.left}>
        <span onClick={handleToggle} className={isActive ? Style.current : Style.span}>Admin</span>
        <span onClick={handleToggle} className={!isActive ? Style.current : Style.span}>Customers</span>
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
      { filteredAccounts && filteredAccounts.map(account => {
         return  <UserCard key={account.id} data={account}/>
        }        
        )} {filteredAccounts.length === 0 && <p className={Style.center}>No Accounts Available</p>}
             
      </div>
  </div> );
}
 
export default AccountsWindow;