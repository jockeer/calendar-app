import { types } from "../types/types";
// import moment from "moment";
// {   
//     id: new Date().getTime(), 
//     title: 'Cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add( 2, 'hours' ).toDate(),
//     notes:'Comprar el pastel',
//     user:{
//       _id:'123',
//       name:'Daniel'
//     }
// }
const initialState = { 
    events: [],
    activeEvent:null
}

export const calendarReducer = ( state = initialState, action ) => {
    switch (action.type) {

        case types.eventSetActive:
            
            return {
                ...state,
                activeEvent:action.payload
            }
        case types.eventAddNew:
            // console.log(action.payload);
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
                
            }
        case types.eventClearActiveEvent:
            // console.log(action.payload);
            return {
                ...state,
                activeEvent: null
                
            }
        case types.eventUpdated:
            // console.log(action.payload);
            return {
                ...state,
                events: state.events.map( 
                    e => ( e.id === action.payload.id) 
                    ? action.payload
                    : e
                )
            }
        case types.eventDeleted:
            // console.log(action.payload);
            return {
                ...state,
                events: state.events.filter( 
                    e => ( e.id !== state.activeEvent.id) 
                ),
                activeEvent:null
            }
        case types.eventLoaded:
            // console.log(action.payload);
            return {
                ...state,
                events: [...action.payload]
            }
        case types.eventClearLogout:
            // console.log(action.payload);
            return {...initialState}
    
        default:
            return state
    }
}