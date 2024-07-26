import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useState, useRef } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { GiCementShoes } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { increment } from './Slice';
import { HiChevronDown } from "react-icons/hi";
import { ImAccessibility } from "react-icons/im";


const Studetninfo = () => {
  const[studentname ,setstudentname]= useState('')

  const[rej_num, setrej_num]= useState('')
  const[mark1, setmark1] =useState()
  const[mark2, setmark2] =useState()
  const[gender , setgender] =useState()
  // const[female, setfemale] =useState()

 
  // console.log(mark1,mark2);
useEffect(()=>{},[])
  

   
    let navigate = useNavigate()
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
  
  const save_Emp =(e)=>{
    e.preventDefault();
    navigate('/employeeinfo')


    }

    const back_Home=(e)=>{
        e.preventDefault()
        navigate('/students')

    }
    let backpage = (e) => {
        e.preventDefault()
        localStorage.removeItem('log')
        navigate('/login')
    }
    const emp_list =(e)=>{
      e.preventDefault();
      navigate('/employee')
    }
  
    
   
    
    
    let dispatch = useDispatch()

    const add_info=(e)=>{
      e.preventDefault();
      

      
     dispatch((increment({id:Math.floor(Math.random()*100),studentname,rej_num,gender,mark1,mark2})))


     setrej_num('')
     setstudentname('')
     setmark1("")
     setmark2('')
    //  setmale()
    //  setfemale('')



     if(studentname === ""){
      alert('please fill studentnamae')
    }
    else if(rej_num === ""){
      alert("please fill register number")
    }
    else if(mark1 === "" && mark2 ===""){
      alert('please enter 10th & 12th marks')
    }
  console.log(gender );
    



       
  // console.log(name,regid);

    }
    const student_pg = (e) => {
      e.preventDefault();
      navigate('/students')
  
  
    }
  
    const saveData = (e) => {
      e.preventDefault();
      navigate('/studentinfo')
    }
    
    

  return (
    <>  
     <div className='header mt-1 d-flex '>
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
        <div>
      <form className='border-form'>
        <table >
          <tr>
       <th> <label className='s_input'>Student Name:</label></th>
        <td><input type="text"  value={studentname} onChange={(e)=>{setstudentname(e.target.value)}} /><br /></td></tr>
        <tr><th><label className='s_input'>Student Rej-Number:</label></th>
        <td> <input type="text" value={rej_num} onChange={(e)=>{setrej_num(e.target.value)}} /></td></tr>
        <br />
        <tr><th><label className='s_input' >male</label></th> <td> <input name='gender' value="male" onChange={(e)=>{setgender(e.target.value)}} type="radio" /></td> </tr><br />
        <tr> <th> <label className='s_input'>female</label></th><td><input name='gender' value='female' onChange={(e)=>{setgender(e.target.value)}} type="radio" /><br /></td></tr>


        <tr><th><label className='s_input'>Student 10th Mark</label> </th>
        <td> <input type="number" value={mark1} onChange={(e)=>{setmark1(e.target.value)}}/></td></tr> <br />
        <tr><th><label className='s_input'>12th Mark</label></th> <td>  <input type="number" value={mark2} onChange={(e)=>{setmark2(e.target.value)}} /></td></tr>
        <br />
        </table>



        <button onClick={add_info} className='btn_stu'>save</button>
      </form>
    </div>
       
        
        </div>
       
      </div>













     
    </>

  )
}

export default Studetninfo
