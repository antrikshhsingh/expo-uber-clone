import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    origin:null,
    destination:null,
    traveltimeinformation:null
}
// pushing data to the data layer and creating a slice
export const navSlice = createSlice({
    name:'nav',
    initialState,
    //reducer dispatches our action
    reducer:{
        setOrigin:(state,action) => {
            state.origin = action.payload;
        },
        setDestination: (state,action) =>{
            state.destination = action.payload;
        },
        settraveltimeinfromation : (state,action) =>{
            state.traveltimeinformation = action.payload;
        },
    },
});

export const {setOrigin,settraveltimeinfromation,setDestination} = navSlice.actions;

// selectors 

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation= (state) => state.nav.traveltimeinformation;

export default navSlice.reducer