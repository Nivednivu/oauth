import './App.css'
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import {Row,Col} from 'react-bootstrap'
function App() {
  
const [input,setinput]=useState({
  username:"",email:""
})
const {username,email} = input
  const handlelogin = ()=>{

if(!username || !email){
  alert("please fill the form");
}else{
  alert("login successfully")

}
  }
   console.log(input);
  return (
    <>
    <div className='d-flex justify-content-center align-items-center p-5 border rounded  'style={{height:'100vh',marginLeft:'250px',marginRight:'250px'}}>
      <Row>
        <Col>
        <img style={{width:"500px",height:'57vh'}} src="https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg" alt="" />
        </Col>
        <Col>
        <div className=' p-5 border rounded shadow ms-5 '>
          <input type="email" placeholder='enter your Email ' className='mt-5 form-control' value={input.username} onChange={(e)=>setinput({...input,username:e.target.value})}/>
          <input type="password" placeholder='enter your password' className='mt-3 form-control' value={input.email} onChange={(e)=>setinput({...input,email:e.target.value})} />
          <br />
          <button onClick={handlelogin} className='btn btn-success '>Login </button>
          <p className='mt-4 'style={{marginLeft:'80px'}}>OR</p>
          <br />
          <GoogleLogin

  onSuccess={credentialResponse => {
    console.log(credentialResponse.credential);
  
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  />    

        </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default App
