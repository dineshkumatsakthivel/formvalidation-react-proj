import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Routes, useNavigate } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { GiCementShoes } from "react-icons/gi";
// import Studetninfo from './components/Studetninfo';
import { HiChevronDown} from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { emplist } from './EmpSlice';
import { ImAccessibility } from "react-icons/im";

 

const Employeeinfo = () => {

  const[ename , setename]= useState('')
  const[eid , seteid]= useState('')
  const[email , setemail]= useState('')
  const[desigination, setdesigination]= useState('')


  

//  toggle 
const [ref , setref] = useState(true)

  // const[openit , setopenit]= useState(false)

let refdata  = useRef()
let box_data = useRef()
// console.log(box_data);

  let clikbut =()=>{ 
         
   console.log(refdata);


   if(ref === true ){
  // refdata.current.style.backgroundColor ="red"
  refdata.current.style.transform ="translate(-130px)" 
  refdata.current.style.transition ="0.9s" 

  box_data.current.style.marginLeft ="-130px"
  box_data.current.style.transition='0.9s'



   }

   else{
    // refdata.current.style.backgroundColor ="blue"
  refdata.current.style.transform ="translate(4px)" 
  
  box_data.current.style.marginLeft ="05px"
  box_data.current.style.transition='0.9s'


   }



   setref(!ref)
    
   


  }


  //  useEffect(()=>{
  //     {!openit}
  //  },[])
   
 
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('log'))
      navigate('/login')


  }, []);
  let backpage = (e) => {
    e.preventDefault()
    localStorage.removeItem('log')
    navigate('/login')

  }
  const saveData =(e)=>{
    e.preventDefault();
    navigate('/studentinfo')
}

    const save_Emp =(e)=>{
    e.preventDefault();
    navigate('/employeeinfo')


    }
    const student_pg =(e)=>{
    e.preventDefault();
    navigate('/students')


    }
    const emp_list =(e)=>{
      e.preventDefault();
      navigate('/employee')
    }
  
    let dispatch =useDispatch()
    const add_stulist=(e)=>{
      e.preventDefault()
      console.log(ename,eid,email,desigination,'hai');
      dispatch(( emplist({id:Math.floor(Math.random()*100),ename,eid,email,desigination})))

      setdesigination('')
      seteid('')
      setemail('')
      setename('')


    }
    
  

  return (
      <>    <div className='header mt-1 d-flex '>
    <p className='ms-5 '><ImAccessibility /> Welcome</p>
    <button className='btn1 me-5 ' onClick={backpage}>log out</button>

  </div>
    <br />
    <div className='container-fluid '>
      <div className='box2 ' style={{width:'300px'}} ref={refdata}>
        <p className='ico '><FiAlignJustify onClick={clikbut} /> </p>

    
          <div className="sidebox">
            <div className="sideboxx .open" style={{display:'flex',alignItems:'center'}}>
              <span className='sidebox_list ' >
             <div onClick={student_pg} style={{ width: '100%', border: '2px solid black',display:'flex', cursor: 'pointer' }}> <p className='icon1 me-3 h1'><MdOutlineSelfImprovement /></p><h3>students</h3>
             </div></span>
             <p className='toggle_btn'><HiChevronDown /></p>

              
           
              </div>    
              <div className="sidebox_child  d-flex">
              <h5 onClick={saveData}><MdOutlineSelfImprovement />Student info</h5></div>
        
         </div>
            <div className='sidebox'>
            <div className="sideboxx .open  " style={{display:'flex',alignItems:'center'}}>
            <span className='sidebox_list ' >

         <div  onClick={emp_list} style={{ width: '100%', border: '2px solid black', display: 'flex', cursor:'pointer'}}><p className='icon1 me-3 h1'><GiCementShoes /></p><h3>Employee</h3> 
            </div> </span>
            <p className='toggle_btn'><HiChevronDown /></p> 

            </div>
            <div className='sidebox_child  d-flex'>
              <h5 onClick={save_Emp}><GiCementShoes />Employee  info</h5> </div>
        </div>
   
      
     


      </div>
        <div className='box3' ref={box_data}>

          <form >
            <table>
            <tr> <th><label >Employee name :</label></th> <td><input type="text" value={ename} onChange={(e)=>{setename(e.target.value)}} /></td>
            </tr>
            <tr> <th><label >Employee id :</label></th> <td><input type="text" value={eid} onChange={(e)=>{seteid(e.target.value)}} /></td>
            </tr>
            <tr> <th><label >Employee mail-id :</label></th> <td><input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} /></td>
            </tr>
            <tr> <th><label >Desigination :</label></th> <td><input type="text" value={desigination} onChange={(e)=>{setdesigination(e.target.value)}} /></td>
            </tr>
            </table>
            <button  style={{width:'100%'}} onClick={add_stulist} >Submit</button>
          </form>

    
        </div>
      </div>
    </>


  )
}

export default Employeeinfo
