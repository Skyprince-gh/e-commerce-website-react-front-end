import Style from './PanelWindow.module.css'
import {useState} from 'react';
import Icon from '@material-ui/core/Icon';
import UserCard from './micro-components/UserCard'

const PanelWindow = () => {
  const [isActive, setActive] = useState("false")
  const handleToggle = () => {
    setActive (!isActive);
  }

  return ( <div className={Style.grid}>
    <div className={Style.menu}>
      <div className={Style.left}>
        <span onClick={handleToggle} className={isActive ? Style.current : Style.span}>Admin</span>
        <span onClick={handleToggle} className={!isActive ? Style.current : Style.span}>Customers</span>
      </div>

      <div className={Style.right}>
        <div className={Style.option}>          
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
        </div>

        <div className={Style.option}>          
            <Icon className={Style.icon}>search</Icon>
            <span className={Style.optionSpan}>Search</span>
        </div>     
       
      </div>
    </div>
      <div className={Style.main}>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>        
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        
      </div>
  </div> );
}
 
export default PanelWindow;