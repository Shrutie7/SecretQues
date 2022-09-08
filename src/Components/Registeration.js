
import React, { useState } from 'react'
import { Form, Alert } from 'bootstrap';
import Login from './Login'

function Registeration() {
    const [name, setName]= useState("");
    const [email,setEmail]= useState("");
    const [phone,setPhone]= useState("");
    const [password,setPassword]= useState("");

    const[flag, setFlag]=useState(false);
    const[login, setLogin]=useState(true);



function handleSubmit(e){
    e.preventDefault();

    if(!name || !email || !phone || !password)
    {
        setFlag(true);
    }else{
        setFlag(false);
       
        localStorage.setItem("Name",JSON.stringify(name));
        localStorage.setItem("Email",JSON.stringify(email));
        localStorage.setItem("phone",JSON.stringify(phone));
        localStorage.setItem("Password",JSON.stringify(password));
        console.log("saved in Local storage");
        setLogin(!login);
    }

}
  function handleClick() {
    setLogin(!login);
  }


  return (
    <>
    <div>
        {" "}
        {login ? (
        <form onSubmit={handleSubmit}>
            <h3>Registeration</h3>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className='form-control' placeholder='Enter Full Name' onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className='form-control' placeholder='Enter email' onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Phone no.</label>
                <input type="phone" className='form-control' placeholder='Enter Contact no.' onChange={(event)=>setPhone(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className='form-control' placeholder='Enter Password' onChange={(event)=>setPassword(event.target.value)}/>
            </div>

            <button type ="submit" className='btn btn-dark btn-lg btn-block'>Register</button>





            {flag && (
                <Alert color="primary" variant="danger">
                    Please Fill every field 
                </Alert>
            )}
        </form>
        ) : (
        <Login/>
        )}


    </div>

    </>
  );
}

export default Registeration;