
import './LogIn.css';
const LogIn = () => {
    return (
    <div>
   
      <div id="container">
     
      <p>UserID</p>
      <input id="username" type='text'placeholder="Type your user ID" required/>
        <p>Password</p>
        <input id="password" type='password'placeholder="Type your password" required />
       
   
    <p id="forgot">Forgot password?</p>
   
      </div>
    </div>
  )
}

export default LogIn;
