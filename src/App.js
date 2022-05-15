import {Header, Home, Cart} from './components'
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then(res => res.json())
            .then(data => setPizzas(data.pizzas))
    }, [])

    return <div className="wrapper">
        <Header/>
        <div className="content">
            <Routes>
                <Route path='/' element={<Home items={pizzas}/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
    </div>

}

export default App;
