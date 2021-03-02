import Style from './DashHead.module.css';
import {AccountCircle, AddCircle} from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
// import { StylesProvider } from '@material-ui/core';

const DashHead = ({page,logo, text}) => {

  const handleText = () =>{
    return {text}? 'Widget': {page};
  }

  return ( 
  <div className={Style.grid}>
    <div className={Style.logo}>
      <Icon>{logo}</Icon>
       <span className={Style.logoSpan}>{page}</span>
    </div>

    <div>
      <button className={Style.button} onClick= {''}>
        <span><AddCircle/></span> Add {text}
        </button>
    </div>
  </div>  );
}
 
export default DashHead;