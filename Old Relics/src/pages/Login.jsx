import React from 'react'
import Login from './Login.css'

function Login() {

    

  return (
    <div>
      /* From Uiverse.io by Rohankumar620 */ 

        <div class="form_back">
            <div class="form_details">SignUp</div>
            <input type="text" class="input" placeholder="Firstname"/>
            <input type="text" class="input" placeholder="Username"/>
            <input type="text" class="input" placeholder="Password"/>
            <input type="text" class="input" placeholder="Confirm Password"/>
            <button class="btn">Signup</button>
            <span class="switch">Already have an account? 
                <label for="signup_toggle" class="signup_tog">
                    Sign In
                </label>
            </span>
        </div>
  
  )
}

export default Login
