import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privatePut } from '../../utilities/apiCaller';


const initialState = {
    updatePrescription:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchUpdatePrescription = createAsyncThunk(
    'doctor/fetchUpdatePrescription',
    async ({data,userToken,_id}) => {
            const appointments = await privatePut(`/doctor/appointment/${_id}`,userToken,data);
            return appointments;
    }
);
export const updatePrescriptionSlice = createSlice({
    name: 'appointments',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpdatePrescription.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchUpdatePrescription.fulfilled,(state,action)=>{
          state.isLoading=false
          state.updatePrescription=action.payload;
        })
        .addCase(fetchUpdatePrescription.rejected,(state,action)=>{
            state.isLoading=false
            state.updatePrescription={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default updatePrescriptionSlice.reducer;