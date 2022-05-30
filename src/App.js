import {Header, Home, Cart} from './components'
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPizzas} from './redux/actions/pizzas'

function App() {

    const dispatch = useDispatch();


    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
        // fetch('http://localhost:3000/db.json')
        //     .then(res => res.json())
        //     .then(data => setPizzas(data.pizzas))
    }, [])

    return <div className="wrapper">
        <Header/>
        <div className="content">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
    </div>

}

export default App;
