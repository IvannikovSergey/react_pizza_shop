import React, {useCallback} from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filter";

const categoryNames = ['Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые']

const sortItems = [
    {name: 'популярные', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
]

function Home() {

    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categoryNames}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map(item => <PizzaBlock key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default Home