import Style from './ProductsWindow.module.css';
import Icon from '@material-ui/core/Icon';
import { useState } from 'react'
// import UserCard from '../micro-components/UserCard'


const ProductsWindow = () => {

  // const [linkArray, setLinkArray] = useState([true, false, false, false, false, false])
  
  

  // //toggle window menu categries based on click
  // const handleToggle = (e) => {
  //   if (e.target.innerText.toLowerCase() === 'electronics') {
  //     const newLinkArr = linkArray.map(link => link = false);
  //     newLinkArr[0] = !newLinkArr[0];
  //     setLinkArray(newLinkArr);
  //   }
  //   else if (e.target.innerText.toLowerCase() === 'food') {
  //     const newLinkArr = linkArray.map(link => link = false);
  //     newLinkArr[1] = !newLinkArr[1];
  //     setLinkArray(newLinkArr);
  //   }
  //   else if (e.target.innerText.toLowerCase() === 'building materials') {
  //     const newLinkArr = linkArray.map(link => link = false);
  //     newLinkArr[2] = !newLinkArr[2];
  //     setLinkArray(newLinkArr);
  //   }
  //   else if (e.target.innerText.toLowerCase() === 'parcels') {
  //     const newLinkArr = linkArray.map(link => link = false);
  //     newLinkArr[3] = !newLinkArr[3];
  //     setLinkArray(newLinkArr);
  //   }
  //   else if (e.target.innerText.toLowerCase() === 'medicine') {
  //     const newLinkArr = linkArray.map(link => link = false);
  //     newLinkArr[4] = !newLinkArr[4];
  //     setLinkArray(newLinkArr);
  //   }
  //   else if (e.target.innerText.toLowerCase() === 'clothing') {
  //     const newLinkArr = linkArray.map(link => link = false);
  //     newLinkArr[5] = !newLinkArr[5];
  //     setLinkArray(newLinkArr);
  //   }

  // }


  // return (
  //   <div className={Style.grid}>
  //     <div className={Style.menu}>
  //       <div className={Style.left}>
  //         <span onClick={handleToggle} className={linkArray[0] ? Style.current : Style.span}>Electronics</span>
  //         <span onClick={handleToggle} className={linkArray[1] ? Style.current : Style.span}>Food</span>
  //         <span onClick={handleToggle} className={linkArray[2] ? Style.current : Style.span}>Building Materials</span>
  //         <span onClick={handleToggle} className={linkArray[3] ? Style.current : Style.span}>Parcels</span>
  //         <span onClick={handleToggle} className={linkArray[4] ? Style.current : Style.span}>Medicine</span>
  //         {/* <span onClick={handleToggle} className={linkArray[5] ? Style.current : Style.span}></span> */}
  //       </div>

  //       <div className={Style.right}>
  //         <div className={Style.option}>
  //           <Icon className={Style.icon}>filter_list</Icon>
  //           <span className={Style.optionSpan}>Filters</span>
  //         </div>

  //         <div className={Style.option}>
  //           <Icon className={Style.icon}>create</Icon>
  //           <span className={Style.optionSpan}>Edit</span>
  //         </div>

  //         <div className={Style.option}>
  //           <Icon className={Style.icon}>delete</Icon>
  //           <span className={Style.optionSpan}>Delete</span>
  //         </div>

  //         <div className={Style.option}>
  //           <Icon className={Style.icon}>search</Icon>
  //           <span className={Style.optionSpan}>Search</span>
  //         </div>

  //       </div>
  //     </div>


  //     <div className={Style.main}>
  //         <UserCard/>
  //     </div>
  //   </div>
  // );
}

export default ProductsWindow;