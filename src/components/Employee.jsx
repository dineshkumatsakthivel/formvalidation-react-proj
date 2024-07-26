import React, { Children, useRef, useState } from 'react'
import { useEffect } from 'react';
import { Routes, useNavigate } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { GiCementShoes } from "react-icons/gi";
// import Studetninfo from './components/Studetninfo';
import { HiChevronDown } from "react-icons/hi";
import { IconBase } from 'react-icons/lib';
import { useSelector } from 'react-redux';
import { ImAccessibility } from "react-icons/im";



const Employee= () => {

//  let empdatas =useSelector((state)=>state.empdatas);
//  console.log(empdatas);
//  localStorage.setItem(('empdt'),JSON.stringify(empdatas))
// let empdatas = useSelector((state)=>state.empdatas) 
let empdatas= JSON.parse(localStorage.getItem('empdt'))




  const sidebox_arr = [{
    icon: < MdOutlineSelfImprovement />, name: 'students', s_incon: <HiChevronDown />,
    Children: {
      icon: < MdOutlineSelfImprovement />,
      name: 'Student info'
    },

  },
  {
    icon: <GiCementShoes />, name: 'Employee', s_incon: <HiChevronDown />,
    Children: {
      icon: <GiCementShoes />,
      name: 'Employee info'
    },

  },
  ]

  const [show, setshow] = useState('')

  // ----------------------------side bar use state-----------------------
  const [open, setopen] = useState(true)

  //  toggle 
  const [ref, setref] = useState(true)

  // const[openit , setopenit]= useState(false)

  let refdata = useRef()
  let box_data = useRef()
  console.log(box_data);

  let clikbut = () => {

    console.log(refdata);


    if (ref === true) {
      // refdata.current.style.backgroundColor ="red"
      refdata.current.style.transform = "translate(-130px)"
      refdata.current.style.transition = "0.9s"

      box_data.current.style.marginLeft = "-130px"
      box_data.current.style.transition = '0.9s'



    }

    else {
      // refdata.current.style.backgroundColor ="blue"
      refdata.current.style.transform = "translate(4px)"

      box_data.current.style.marginLeft = "05px"
      box_data.current.style.transition = '0.9s'


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
  const saveData = (e) => {
    e.preventDefault();
    navigate('/studentinfo')
  }

  const save_Emp = (e) => {
    e.preventDefault();
    navigate('/employeeinfo')


  }
  const student_pg = (e) => {
    e.preventDefault();
    navigate('/students')


  }
  const emp_list = (e) => {
    e.preventDefault();
    navigate('/employee')


  }
  const del_emp =(index)=>{
   
      
    empdatas.splice(index ,1)
    console.log(index);


     localStorage.setItem('empdt',JSON.stringify(empdatas))
    //  localStorage.setItem("studata", JSON.stringify(datass))


    //  JSON.parse(localStorage.getItem('empdt'))
  }


  return (
    <>     <div className='header mt-1 d-flex '>
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
         <form>
         
            <table><tbody>
              <tr>
                <th>E-name</th>
                <th>E- id</th>
                <th>E- mail-id </th>
                <th>Desigination </th>
                <th>Remove</th>
                </tr>
                {empdatas.map((v,index)=>{
                  return(
                    <tr key={index}>
                      <td>{v.ename}</td>
                      <td>{v.eid}</td>
                      <td>{v.email}</td>
                      <td>{v.desigination}</td>
                      <td><button  onClick={()=>{del_emp(index)}}>del</button></td>
                    </tr>
                  
                  )
                })}</tbody></table>
</form>
         </div>
        
         </div>

    </div>
     

    </>


  )
}

export default Employee
