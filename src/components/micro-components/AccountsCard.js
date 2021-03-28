import Style from './AccountsCard.module.css'
import Icon from '@material-ui/core/Icon'
import {accountsContext} from '../../context/accountsContext'
import {useContext} from 'react'
const AccountsCard = ({data: account}) => {

  const id = account.id;
  const {setForm, toggle_edit_account_form,
    toggleEdit_isTrue
  } = useContext(accountsContext)

  return ( 
  <div className={Style.grid}>
    <div className={Style.menu}>
      <span className={Style.circle}></span>
      <span className={Style.cardMenu} onClick={()=> {
        setForm(account).then(func=>{
          toggle_edit_account_form();
          toggleEdit_isTrue(true);
        })
        console.log(id);
      }}>...</span>
    </div>

    <div className={Style.userImage}>
        <img src={account.user_image} className={Style.img} alt="user_image"/>
    </div>
    <p className={Style.userName}>{account.name}</p>
  </div> );
}
 
export default AccountsCard;