import React, {useState} from 'react';

function Categories({items, onClickItem}) {

    const [activeItem, setActiveItem] = useState(null);

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
                {items && items.map((item, index) =>
                    <li className={activeItem === index ? 'active' : ''}
                        onClick={() => setActiveItem(index)}
                        key={`${item}_${index}`}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories

