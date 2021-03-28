import Style from './AddProductForm.module.css';
import {useState} from 'react'
const AddProductForm = () => {
  const [active, setActive] = useState(false);

  const handleSubmit =  (e) => {
    console.log('product form submitted')
    setActive(false)
  } 
  return ( 
    <div>
      { active &&

        <div className={Style.grid}>
    <form className={Style.form} onSubmit={handleSubmit} action="">
      <div className={Style.head}>
      <button className={Style.close}>X</button>
      </div>
      <h3>Add New Product Details</h3>
      <input className={Style.input} type="text" placeholder="Product Name" id="name"/>
      <input className={Style.input} type="number" placeholder="GH¢0.00"/>
      <input className={Style.description} type="text" id="description" placeholder="description"/>
      <select className={Style.tags} multiple>
        {/* run loop to display all tags */}
        <option value="">tag1</option>
        <option value="">tag2</option>
        <option value="">tag3</option>
        <option value="">tag3</option>
        <option value="">tag3</option>
        <option value="">tag3</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  </div>
    }
    </div>
  );
}
 
export default AddProductForm;