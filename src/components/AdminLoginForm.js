import adminStyles from './AdminLoginForm.module.css'
import {useHistory} from 'react-router-dom'
// import Animate from 'animate.css-react'
import 'animate.css'

const AdminLoginForm = () => {
  const history = useHistory();
  
  const handleSignIn = (e) => {
    e.preventDefault()
    history.push('/admin/dashboard')
  }

  return (
    <div className= {adminStyles.adminLogin}>
      <form onSubmit={handleSignIn} className= {adminStyles.form + " animate__animated animate__fadeInDown" }>
        <h1 className="">Admin Panel</h1>
        {/* <p className= "">Don't have an account? 
        <a href="">Create account</a></p> */}
        <input placeholder="Username" type="text" required />
        <input placeholder="Password" type="password" required />

        <div className= {adminStyles.inputGroup}>
          <input type="checkbox" name="robot" value="not a robot" required/>
          <span>I am not a robot</span>
        </div>

        <input type="submit" value="Sign in" />        
      </form>
    </div>);
}

export default AdminLoginForm;