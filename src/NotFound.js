import NotFoundStyles from './NotFound.module.css'
const NotFound = () => {
  return ( 
    <div className= {NotFoundStyles.grid}>
      <p>The Page You Requested Not Found</p>
    </div>
   );
}
 
export default NotFound;