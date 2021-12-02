import { SEARCH_TALENT, CARGAR_USUARIO, POST_USER, GET_USER_TOKEN, GET_TALENT, GET_USER_ID, GET_ORDER_ID, GET_REVIEW_ID, GET_MOVE_ID, GET_QA_ID } from "../actions"

const initialState = {
    user : [],
    talents: [],
    filteredTalents: [],
    token: '',
    profile: [],
    order: [],
    review: [],
    movement: [],
    qa: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_TALENT:
            return {
                ...state,
                talents: action.payload,
                filteredTalents: action.payload
            }
        case SEARCH_TALENT:
            return {
                ...state,
                talents: action.payload
            }
        case CARGAR_USUARIO:
            return {
                ...state,
                user : action.payload
            }
        case GET_USER_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case GET_USER_ID:
            return {
                ...state,
                profile: action.payload
            }
        case GET_ORDER_ID:
            return {
                ...state,
                order: action.payload
            }
        case GET_REVIEW_ID:
            return {
                ...state,
                review: action.payload
            }
        case GET_MOVE_ID:
            return{
                ...state,
                movement: action.payload
            }
        case GET_QA_ID:
            return{
                ...state,
                qa: action.payload
            }
        default:
            return state
    }
}

