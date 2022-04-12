import { types } from "../types/types";
import moment from "moment";
const initialState = { 
    events: [
        {   
            id: new Date().getTime(), 
            title: 'Cumpleaños del jefe',
            start: moment().toDate(),
            end: moment().add( 2, 'hours' ).toDate(),
            bgcolor:'#fafafa',
            notes:'Comprar el pastel',
            user:{
              _id:'123',
              name:'Daniel'
            }
        }
    ],
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
    
        default:
            return state
    }
}