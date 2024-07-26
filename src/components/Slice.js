import { createSlice } from '@reduxjs/toolkit'


// let arr =[{id:1,studentname:'dinesh',rej_num:'123',gender:'male',mark1:'200',mark2:'300'},
//     {id:2,studentname:'tinesh',rej_num:'323',gender:'male',mark1:'400',mark2:'900'}
// ]
let arr =[]
//

// let arr = JSON.parse(localStorage.getItem("studata")) || []
export const counterSlice = createSlice({
  name: 'counter',
  // initialState: arr,empl,
initialState :arr,

  reducers: {
    increment: (state,action) => {

        state.push(action.payload)
        // console.log(state,action);
  
           localStorage.setItem("studata" ,JSON.stringify(state) )


    },
  
  },
})

// Action creators are generated for each case reducer function
export const { increment} = counterSlice.actions

export default counterSlice.reducer