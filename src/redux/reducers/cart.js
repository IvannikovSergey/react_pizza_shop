const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    if (action.type === 'SET_TOTAL_PRICE') {
        return {
            ...state,
            totalPrice: action.payload
        }
    }

    if (action.type === 'SET_TOTAL_COUNT') {
        return {
            ...state,
            totalCount: action.payload
        }
    }

    if (action.type === 'ADD_PIZZA_CART') {

        const newItems = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload]
        }

        return {
            ...state,
            items: newItems,
            totalCount: [].concat.apply([], Object.values(newItems)).length
        }
    }
    return state
}

export default cart