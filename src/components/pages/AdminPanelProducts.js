import Nav from '../micro-components/PanelNav'
import Styles from './AdminPanelGrid.module.css'
import LSide from '../micro-components/SideBarLeft'
import RSide from '../micro-components/SideBarRight'
import Head from '../micro-components/RestaurantDashHead'
import ProductsWindow from '../windows/ProductsWindow'
import AddProduct from '../micro-components/AddProductForm'
const AdminPanelProducts = () => {
  return (   // This grid is used to position all elements
    <div className={Styles.grid}>
      {/* This is the right side bar which contains stats about the site */}
      <div className={Styles.leftBar}>
        <LSide/>
      </div>
      {/* This part is the center of the console consists of cards and the navbar */}
      <div className={Styles.center}>
        <Nav/>
        <Head  page={'Proucts'} logo={'shopping_basket'} text={'Product'}/>
        <ProductsWindow/>
        <AddProduct/>
      </div>

       {/* This is the left bar which is consists of navigation tools and many more. */}
      <div className={Styles.rightBar}>
       <RSide/>
      </div>
    </div> );
}
 
export default AdminPanelProducts;