import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate }from 'react-router-dom'
import logo from '../../assests/favicon.png'
import Aboutauth from './Aboutauth'
import './Auth.css'
import { signup ,login } from '../../actions/auth'

export default function Auth() {
  const [Signup, isSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

  const HandleSwitch=()=>{
     isSignup(!Signup);
  }

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const onSubmit=(e)=>{
    e.preventDefault();
    if(Signup){
      if(!name)
         alert("Enter your name to continue!!");

      dispatch(signup({name,email,password},navigate));
    }
    else if(!email || !password){
      alert("Fill the Details first!!");
    }
    else{
      dispatch(login({email,password},navigate));
    }
  }

  return (
    <section className='auth-section'>
      {Signup && <Aboutauth/>}
      <div className='auth-container-2'>
        {!Signup && <img src={logo} style={{height: '60px'}} alt='stack overflow' className='login-logo' />}
        <form onSubmit={onSubmit}>
          {
            Signup && (
              <label htmlFor="name">
            <h4>Display Name</h4>
            <input type="name" name='name' id='name' onChange={(e)=>{setName(e.target.value)}} />
          </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}} />
          </label>
          <label htmlFor="password">
            <div style={{display: 'flex' , justifyContent : 'space-between'}}>
              <h4>Password</h4>
              {!Signup && <p style={{color: '#007ac6' ,fontSize: '13px'}}>Forget password ?</p>}
            </div>
            <input type="password" name='password' id='password' onChange={(e)=>{setPass(e.target.value)}}/>
            {Signup && <p style={{color: '#666767' , fontSize: '13px' }}>Passwords must contain at least eight<br/> characters, including at least 1 letter and 1 number.</p>}
          </label>
          {Signup && (
            <label htmlFor="check">
            <input type="checkbox" id='check' />
            <p style={{fontSize: '13px',fontWeight: 'bold' }}>Opt-in to receive occasional product updates,<br/> user research invitations, company announcements, and digests.</p>
          </label>
          )}
          <button type='submit' className='auth-btn'>{!Signup ? 'Login' : 'Signup'}</button>
          {Signup && (
            <p style={{color: '#666767' , fontSize: '13px' }}>By clicking “Sign up”, you agree to our
              <span style={{color: '#007ac6'}}> terms of<br/> service</span>, 
              <span style={{color: '#007ac6'}}>privacy policy</span> and 
              <span style={{color: '#007ac6'}}>cookie policy</span> </p>
          )}
        </form>
        <p>
          {Signup ? 'Already have an account !' : 'Dont have an account?'}
          <button type='button' className='handle-switch-btn' onClick={HandleSwitch}>{Signup? 'Login' : 'Signup'}</button>

        </p>
      </div>
    </section>
  )
}
