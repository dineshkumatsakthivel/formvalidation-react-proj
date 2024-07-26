import React, { useRef, useState } from 'react'
import "./assets/side.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidedrive = () => {

    const [ref, setref] = useState(true)

    let boxOne = useRef() 
    let boxTwo = useRef() 




    let toggle_sidebar = () => {


    if(ref === true){
console.log(ref, boxOne);
      boxOne.current.style.backgroundColor ="red"

boxOne.current.style.transform ="translate(-200px)"
boxOne.current.style.transition ="0.4s"

boxTwo.current.style.marginLeft = "-200px"
boxTwo.current.style.transition ="0.4s"





    }

      if(ref === false){

         boxOne.current.style.backgroundColor ="yellow"

boxOne.current.style.transform ="translate(0px)"
boxOne.current.style.transition ="0.4s"

boxTwo.current.style.marginLeft = "0px"
boxTwo.current.style.transition ="0.4s"

      }


      setref(!ref)
      
    }
    return (

        <>

            <div id='container' style={{ display: "flex" }}>


                <div className='box1' ref={boxOne} style={{ width: "300px", height: "400px", border: "1px solid black", display: "flex", justifyContent: "space-between" }}>
                    <div>box1</div>
                    <div className='pe-2' onClick={toggle_sidebar}>x</div>

                </div>
                <div className='box2' ref={boxTwo} style={{ backgroundColor: "yellowgreen", width: "100%", height: "400px", border: "1px solid black" }}> second 2</div>


            </div>

        </>
    )
}

export default Sidedrive
