import { createSlice } from "@reduxjs/toolkit";


export const todoslice = createSlice({
    name:'todo',
    initialState: {
        data: []
    },
    reducers :{
        addtodo: (state,action ) => {
              const curr={
                id:state.data?.length + 1,
                title:action.payload.title,
                desc:action.payload.desc
              }
              state.data = [curr,...state?.data]
              
        }  
    }
}
)
export const {addtodo} = todoslice.actions
export default todoslice.reducer