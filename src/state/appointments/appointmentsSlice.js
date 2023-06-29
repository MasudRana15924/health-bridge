import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePost } from "../../utilities/apiCaller";


const initialState={
   appointments:[],
    isLoading:false,
    isError:false,
    error:''
}

export const createAppointments=createAsyncThunk(
    'appointment/createAppointment',async({data,userToken}, { rejectWithValue })=>{

        try {
            const appointments = await privatePost('/new/appointment',userToken, data);
            return appointments;
        } catch (err) {
            return rejectWithValue(err);
        }
   
 
});
const appointmentsSlice=createSlice({
    name:'appointment',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createAppointments.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createAppointments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.appointments.push(action.payload);
            })
            .addCase(createAppointments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default appointmentsSlice.reducer; 