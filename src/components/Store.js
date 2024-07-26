import { configureStore } from '@reduxjs/toolkit'
import slicedata from './Slice.js'
import EmpSlice  from './EmpSlice.js'

export default configureStore({
  reducer: {
    studentlist: slicedata,
    empdatas : EmpSlice,

    
    
    
  },
 
})