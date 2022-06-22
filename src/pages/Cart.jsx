import React from 'react';
import CartItem from "../components/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, minusCartItem, plusCartItem, removeCartItem} from "../redux/actions/cart";
import cartImage from '../assets/img/empty-cart.png'
import {Link} from "react-router-dom";

function Cart() {

    const dispatch = useDispatch()

    const {items, totalPrice, totalCount} = useSelector(({cart}) => cart)

    const addedPizzas = Object.keys(items).map(key => {
        return items[key].items[0]
    })

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCart())
        }
    }

    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить пиццу?')) {
            dispatch(removeCartItem(id))
        }
    }

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id))
    }

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id))
    }

    return (
            <div className="content">
                <div className="container container--cart">
                    {
                        totalCount? <div className="cart">
                                <div className="cart__top">
                                    <h2 className="content__title">Корзина
                                    </h2>
                                    <div className="cart__clear">
                                        <span onClick={onClearCart}>Очистить корзину</span>
                                    </div>
                                </div>
                                {addedPizzas.map(obj =>
                                    <CartItem
                                        id={obj.id}
                                        name={obj.name}
                                        type={obj.type}
                                        size={obj.size}
                                        totalPrice={items[obj.id].totalPrice}
                                        totalCount={items[obj.id].items.length}
                                        onRemoveItem = {onRemoveItem}
                                        onPlusItem={onPlusItem}
                                        onMinusItem={onMinusItem}
                                    />
                                )}
                            <div className="cart__bottom">
                                <div className="cart__bottom-details">
                                    <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                                    <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                                </div>
                                <div className="cart__bottom-buttons">
                                    <Link to="/" className="button button--outline button--add go-back-btn">
                                        <span>Вернуться назад</span>
                                    </Link>
                                    <div className="button pay-btn">
                                        <span>Оплатить сейчас</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            : <div className="cart cart--empty">
                        <h2>Корзина пустая</h2>
                        <p>
                        Вероятней всего, вы не заказывали ещё пиццу.<br />
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                        </p>
                        <img src={cartImage} alt="Empty cart" />
                        <Link to="/" className="button button--black">
                        <span>Вернуться назад</span>
                        </Link>
                        </div>
                    }
            </div>
        </div>
    )
}

export default Cart