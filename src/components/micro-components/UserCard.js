import Style from './UserCard.module.css'
import Icon from '@material-ui/core/Icon'
const UserCard = () => {
  return ( 
  <div className={Style.grid}>
    <div className={Style.menu}>
      <span className={Style.circle}></span>
      <span className={Style.cardMenu}>...</span>
    </div>

    <div className={Style.userImage}>
      <Icon className={Style.icon}>face</Icon>
    </div>
    <p className={Style.userName}>Username</p>
  </div> );
}
 
export default UserCard;