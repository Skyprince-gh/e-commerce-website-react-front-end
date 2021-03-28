import adminStyles from './AdminLoginForm.module.css'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
// import Animate from 'animate.css-react'
import 'animate.css'
import axios from 'axios'

const AdminLoginForm = () => {
  const history = useHistory();
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [errMessage, setErrMessage] = useState('')
  
  const handleSignIn = (e) => {
    e.preventDefault()
    console.log({phone,password})

    axios.post('http://drwp.herokuapp.com/api/accounts/login/', {phone, password})
    .then(response =>{
      console.log('response: ' ,response.data)
      if(response.status === 200){
        history.push('/admin/dashboard')
      }
    })
    .catch(err =>{
      console.log(typeof err, {...err})
      setErrMessage('could not log in user please check if your email and password is correct')
    })

    }
    
  

  return (
    <div className= {adminStyles.adminLogin}>
      <form onSubmit={handleSignIn} className= {adminStyles.form + " animate__animated animate__fadeInDown" }>
        <h1 className="">Admin Panel</h1>
        {/* <p className= "">Don't have an account? 
        <a href="">Create account</a></p> */}
        <input placeholder="Phone" type="text" onChange={(e) => setPhone(e.target.value)} required />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} required />

        <div className= {adminStyles.inputGroup}>
          <input type="checkbox" name="robot" value="not a robot" required/>
          <span>I am not a robot</span>
        </div>

        <input type="submit" value="Sign in" />        
      {errMessage && <p>{errMessage}</p>}
      </form>
    </div>);
}

export default AdminLoginForm;