
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet.css'
import { useState , useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
// import Homepag from '../Homepag';
// import {useHistory} from 'react-router-dom'




function Login() {
  // let history = useHistory()


  const navigate  = useNavigate()
  const [mail, setmail] = useState([])
  const [password, setpassword] = useState('')
   
  let inputval = { mail, password }
  const [errormsg , setErrormsg] =useState('')
  const[errorpas, setErrorpas] = useState('')
  const [succes, setSucces] = useState();

  useEffect(() => {
    if(localStorage.getItem('log'))
      navigate('/')
    
      
      
    },[]);


  let handeled = (e) => {
    e.preventDefault();
    setErrormsg('')
    setErrorpas('')
    setSucces('')
  
    console.log(inputval);

    let emailrex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
  let passwordrex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
      
    // let ema = "Dineshtra123@"
    // let pass = "eA19#9876543998"
    let togg = emailrex.test(mail)
let passd  = passwordrex.test(password)
    console.log(togg);
    console.log(passwordrex.test(password));
   

    if(togg === false || togg === "" || togg === null ){

          alert("check your email")
    }
    else if(passd === false || passd === "" || passd === null){

      alert("check your password")
    }
    else if(mail === "Dinesh123@gamil.com" && password === "dDinesh123#"){

      localStorage.setItem(("log") , true)
      navigate('/')
      // console.log("hu");
    }

//     if( togg === false  ) 
//       {
//     setErrormsg("pleasse enter email 1.alapha 2.num 3.splchar")

//   }
 
// if( passd === false){
//     setErrorpas("At least one lowercase[a-z]uppercase[A-Z]Numeric[0-9]specialchar[@!#]length must be in the range [8-15]")

   
//    }

// if(mail !== "Dinesh123@gamil.com" || password !== "dDinesh123#21") return( setErrormsg("pleasse enter vaild email and Password")&& setErrorpas('din'))
   
      // navigate("/") 
  }


  return (
    
      <div className='container ms-lg-5 mx-md-5 '>
      <form className='box1 mt-5 mb-5 px-2 ml-2 ' onSubmit={handeled}  >
        <h1 className='mb-5 mx-5'>Log In</h1>
      <div className='hidebox1'>
        {errormsg.length > 0 && (<div style={{ width:'270px', color:'red'}}>{errormsg}</div>)}
        {errorpas.length >0 && (<div style={{ width:'270px', color:'red',fontSize:'10px'}}>{errorpas}</div>)}
        {/* {succes.length >0 &&  (<div style={{ width:'270px', color:'green',fontSize:'10px'}}>{succes}</div>)} */}
        {<div style={{fontSize:'20px',padding:'10px',color:'green'}}>{succes}</div>}<br/>
        </div>


        <label className='p-2 mb-2 mt-3'><CgProfile className='icon' /> Mail-id</label><br />
        <input className='input' type="text" placeholder='Please Enter Your Mail-id' value={mail} onChange={(e) => { setmail(e.target.value) }} />
        <br />
        <label className='mt-3 mb-2 p-2'> < RiLockPasswordFill className='icon' />Password</label><br />
        <input className='input' type="password" placeholder='Please Enter Your Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
        <br />
        <button className='btn mt-5' >LogIn</button>
      </form>
    </div>

  )
}

export default Login
