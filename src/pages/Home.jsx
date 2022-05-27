import React from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";

function Home({items}) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={(name) => console.log(name)} items={[
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые'
                ]}/>
                <SortPopup items={[
                    {name: 'популярные', type: 'popular'},
                    {name: 'цене', type: 'price'},
                    {name: 'алфавиту', type: 'alphabet'}
                ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(item => <PizzaBlock key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default Home