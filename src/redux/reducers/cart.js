const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

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

    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            items: {},
            totalPrice: 0,
            totalCount: 0
        }
    }

    if (action.type === 'REMOVE_CART_ITEM') {

        const newItem = {
            ...state.items
        }
        const currentTotalPrice = newItem[action.payload].totalPrice
        const currentTotalCount = newItem[action.payload].items.length
        console.log(currentTotalCount)
        delete newItem[action.payload]
        return {
            ...state,
            items: newItem,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount
        }
    }
    //доделать
    // if(action.type === 'PLUS_CART_ITEM') {
    //     return  {
    //         ...state,
    //         totalCount: state.totalCount + 1
    //     }
    // }
    //
    // if(action.type === 'MINUS_CART_ITEM') {
    //     return  {
    //         ...state,
    //         totalCount: state.totalCount - 1
    //     }
    // }

    if (action.type === 'ADD_PIZZA_CART') {

        const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload]

        const newItems = {
            ...state.items,
            [action.payload.id]: {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems)
            }
        }
        const items = Object.values(newItems).map(obj => obj.items)
        const allPizzas = [].concat.apply([], items)
        const totalPrice = getTotalPrice(allPizzas)

        return {
            ...state,
            items: newItems,
            totalCount: allPizzas.length,
            totalPrice
        }
    }
    return state
}

export default cart