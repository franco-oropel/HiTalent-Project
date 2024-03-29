import {
  SEARCH_TALENT,
  CARGAR_USUARIO,
  GET_USER_TOKEN,
  GET_TALENT,
  GET_USER_ID,
  GET_TALENT_BY_ID,
  GET_ORDER_ID,
  GET_REVIEW_ID,
  GET_MOVE_ID,
  GET_QA_ID,
  PUT_ANSWER,
  GET_CATEGORIES,
  GET_POST_QUESTION,
  POST_QUESTION,
  SORT_BY_PRICE,
  GET_POST_REVIEW,
  FILTRO_CAT,
  TALENT_BY_RATING,
  CARGANDO,
  SELLER_PROFILE,
  REFRESH,
} from "../actions";
import { ASCENDENTE } from "../const";

const initialState = {
  user: [],
  talents: [],
  filteredTalents: [],
  token: "",
  profile: [],
  order: [],
  review: [],
  movement: [],
  qa: [],
  moreTalent: [],
  categories: [],
  questionsPost: [],
  ownerQuestion: "",
  cargando: false,
  public_profile: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TALENT:
      return {
        ...state,
        talents: action.payload,
        filteredTalents: action.payload,
        cargando: false,
      };
    case SEARCH_TALENT:
      return {
        ...state,
        filteredTalents: action.payload,
      };
    case GET_TALENT_BY_ID:
      return {
        ...state,
        moreTalent: action.payload,
        qa: action.payload,
      };
    case CARGAR_USUARIO:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case GET_USER_ID:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_ORDER_ID:
      return {
        ...state,
        order: action.payload,
      };
    case GET_REVIEW_ID:
      return {
        ...state,
        review: action.payload,
      };
    case GET_MOVE_ID:
      return {
        ...state,
        movement: action.payload,
      };
    case GET_QA_ID:
      return {
        ...state,
        qa: action.payload,
      };
    case PUT_ANSWER:
      return {
        ...state,
        qa: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_POST_QUESTION:
      return {
        ...state,
        questionsPost: action.payload,
        cargando: false,
      };
    case POST_QUESTION:
      return {
        ...state,
        questionsPost: action.payload,
      };
    case SORT_BY_PRICE:
      let talentPrice = [...state.filteredTalents];
      talentPrice = talentPrice.sort((a, b) => {
        if (a.cost < b.cost) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.cost > b.cost) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredTalents: talentPrice,
      };
    case GET_POST_REVIEW:
      return {
        ...state,
        review: action.payload,
      };
    case FILTRO_CAT:
      let allCat = state.talents;
      let fil =
        action.payload === "todas"
          ? allCat
          : allCat.filter((el) => el?.category?.title === action.payload);
      return {
        ...state,
        filteredTalents: fil,
      };
    case TALENT_BY_RATING:
      return {
        ...state,
        filteredTalents: action.payload,
      };
    case CARGANDO:
      return { ...state, cargando: true };
    case REFRESH:
      return { ...state, cargando: true };
      case SELLER_PROFILE:
        return {
          ...state,
          public_profile: action.payload
        }
    default:
      return state;
  }
}
