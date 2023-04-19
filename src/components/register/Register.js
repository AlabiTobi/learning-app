import React,{ useState } from 'react'
import trading from '../../components/assets/Trading.png'
import { useNavigate} from "react-router-dom"
import './Register.css'

const Register = () => {
    let navigate = useNavigate()

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phoneNumber"){
            setPhoneNumber(value);
            }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,phoneNumber,password,confirmPassword);
    }
  return (
    <div className='register-page'>
        <div className='side-login'>
            <h4>Have an account?</h4>
            <li className='login' onClick={()=>navigate("/login")}>
                    Login in
            </li> 
       </div>

        <img className='img-style'
            src={trading}alt='Trading'/>

         <div className="form-body">
            <div className='name'>
                <div className="firstname">
                    <label className="form__label" for="firstName">First Name </label><br/>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label><br/>
                    <input  type="text" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Last Name"/>
                </div>    
            </div>            
            
            <div className='name'>
                        
                <div className="email">
                    <label className="form__label" for="email">Email </label><br/>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="phonenumber">
                    <label className="form__label" for="phoneNumber">Phone Number </label><br/>
                    <input  type="number" id="phoneNumber" className="form__input" value={phoneNumber} onChange = {(e) => handleInputChange(e)} placeholder="Phone Number"/>
                </div>
                
            </div>

            <div className='name'>
                <div className="password">
                    <label className="form__label" for="password">Password </label><br/>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label><br/>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>

            <div class="register-button">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
            </div>

    </div>
  )
}

export default Register