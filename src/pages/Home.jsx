import React, {useCallback, useEffect} from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filter";
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";
import {addPizzaToCart} from "../redux/actions/cart";

const categoryNames = ['Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые']

const sortItems = [
    {name: 'популярные', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'name'}
]

function Home() {

    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filter}) => filter)

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = useCallback(type => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizzaToCart = obj => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames}/>
                <SortPopup activeSortType={sortBy} items={sortItems} onClickSortItem={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map(item => <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={item.id} {...item}/>)
                    : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)}
            </div>
        </div>
    )
}

export default Home