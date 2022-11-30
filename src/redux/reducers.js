import { PortfolioActions, StudiesActions } from "./actions";

const initialState = {
    page: 'portfolio'
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case PortfolioActions.ACCESS_STUDIES:
            return {
                ...state,
                page: 'studies'
            }
        case StudiesActions.ACCESS_PORTFOLIO:
            return {
                ...state,
                page: 'portfolio'
            }
        default:
            return state;
    }
}