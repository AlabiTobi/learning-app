import React,{ useState } from 'react'
import trading from '../../components/assets/Trading.png'
import './Login.css'


const Login = () => { 
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        
        if(id === "email"){
            setEmail(value);
        }
            
        if(id === "password"){
            setPassword(value);
        }
    }
        

    const handleSubmit  = () => {
        console.log(email,password);
    }

  return (
    <div className='login-page'>

        <img className='img-style'
            src={trading}alt='Trading'/>

         <div className="form-body1">
                      
            
            <div className='name1'>
                        
                <div className="email">
                    <label className="form__label" for="email"n>Email </label><br/>
                    <input  type="email" id="email" className="form__input1" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                
            </div>

            <div className='name1'>
                <div className="password">
                    <label className="form__label" for="password">Password </label><br/>
                    <input className="form__input1" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>

            <div class="login-button">
                <button onClick={()=>handleSubmit()} type="submit" class="btn1">Login-in</button>
            </div>

        </div>

    </div>
  )
}

export default Login