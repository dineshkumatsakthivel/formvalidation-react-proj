import { createSlice } from "@reduxjs/toolkit";

// let emparr = [{ename:'dinesh',eid:1234,email:'dineshtracer.dt',desigination:'tl'}]
// let  emparr= [{ename: 'dinensh',eid:'1234',email:'dinnesh@gamil',desigination:'tds'},
//       {ename: 'dinenshkumr',eid:'1434',email:'esh@gamil',desigination:'ds'}
//     ]
const emparr=[]
JSON.parse(localStorage.getItem('edetai'))


const empslice = createSlice({
    name:'emplist',
    initialState:emparr,

    reducers:{
        emplist:(state,action)=>{
            console.log(state,action);

            state.push(action.payload)
            localStorage.setItem(('empdt'),JSON.stringify(state,action.payload))

        }

    },
})

export const {emplist} =empslice.actions;
export default empslice.reducer

