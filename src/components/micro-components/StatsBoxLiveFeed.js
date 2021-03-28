import Style from './StatsBoxLiveFeed.module.css'

const StatsBoxLiveFeed = () => {
  return ( 
  <div className={Style.box}>
    <div className={Style.upper}>
      <div className={Style.left}>
        <span>Actions</span>
        <span>Orders</span>
      </div>
      <div className={Style.right}>
        <span>...</span>
      </div>
    </div>
  </div> );
}
 
export default StatsBoxLiveFeed;