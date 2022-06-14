import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}`:''}&_sort=${sortBy}&_order=desc`).then(({data}) => {
        dispatch(setPizzas(data))
    })
}