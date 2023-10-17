const initialState = {
    status: 'All',
    color: []
}

export default function filterReducer (state=initialState, action) {
    switch(action.type){
        case 'filters/statusFilterChanged':{
            return{
                ...state,
                status: action.payload
                }
            }
        case 'filters/colorFilterChanged':{
            return{
                ...state,
                color: action.payload.color,
                changeType: action.payload.changeType
                } 
        }
        default:
            return state
    }
}