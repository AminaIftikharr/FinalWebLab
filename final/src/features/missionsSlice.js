import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('fetchData', async()=>{
    const response= await fetch ('https://api.spacexdata.com/v3/missions');
    return response.json();
})

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchData.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchData.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action)=>{
            console.log('Error', action.payload);
            state.isError = true;
        })
    },
});

export default dataSlice.reducer;